import { useCallback, useEffect, useMemo, useRef, VFC } from 'react';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { cnoise31 } from '../../modules/glsl';
import { GUIController } from '../../modules/gui';
import { datas } from '../../modules/store';
import { getPublicPath } from '../../modules/utils';

export const SwayingGrass: VFC = () => {
	const meshRef = useRef<THREE.InstancedMesh>(null)

	// --------------------------------------------
	// add controller

	const gui = GUIController.instance.setFolder('Uniforms')
	gui.addNumericSlider(datas, 'sway', 0.1, 1.0, 0.01)

	// --------------------------------------------
	// sampling geometry

	// const samplingGeometry = useMemo(() => new THREE.PlaneGeometry(20, 20), [])
	// const samplingGeometry = useMemo(() => new THREE.IcosahedronGeometry(10, 10), [])
	// const samplingGeometry = useMemo(() => new THREE.TorusKnotGeometry(8, 1.5, 200, 20, 3, 5), [])
	const model = useFBX(getPublicPath('/assets/models/bunny.fbx'))
	const samplingGeometry = (model.children[0] as THREE.Mesh).geometry
	samplingGeometry.applyMatrix4(new THREE.Matrix4().makeScale(0.2, 0.2, 0.2))

	// --------------------------------------------
	// create sampler

	const sampler = useMemo(() => {
		const samplingMesh = new THREE.Mesh(samplingGeometry, new THREE.MeshBasicMaterial())
		const sampler = new MeshSurfaceSampler(samplingMesh).build()
		return sampler
	}, [samplingGeometry])

	// --------------------------------------------
	// initialize matrix

	const amount = 200000 // 200k

	const updateMatrix = useCallback(() => {
		const object = new THREE.Object3D()
		const samplingPosition = new THREE.Vector3()
		const samplingNormal = new THREE.Vector3()

		for (let i = 0; i < amount; i++) {
			sampler.sample(samplingPosition, samplingNormal)
			object.position.copy(samplingPosition)
			object.lookAt(samplingNormal.add(samplingPosition))
			object.updateMatrix()

			meshRef.current!.setMatrixAt(i, object.matrix)
		}
		meshRef.current!.instanceMatrix.needsUpdate = true
	}, [amount, sampler])

	useEffect(() => {
		// fixed cone matrix
		meshRef.current!.geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2))
		meshRef.current!.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 0.5))

		updateMatrix()
	}, [updateMatrix])

	// --------------------------------------------
	// create shader

	const shader: THREE.Shader = {
		uniforms: {
			u_time: { value: 0 },
			u_sway: { value: datas.sway }
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader
	}

	useFrame(() => {
		shader.uniforms.u_time.value += 0.005
		shader.uniforms.u_sway.value = datas.sway
	})

	return (
		<>
			<mesh geometry={samplingGeometry}>
				<meshBasicMaterial color="#000" />
			</mesh>
			<instancedMesh ref={meshRef} args={[undefined, undefined, amount]}>
				<coneGeometry args={[0.05, 1, 2, 20, false, 0, Math.PI]} />
				<shaderMaterial args={[shader]} side={THREE.DoubleSide} />
			</instancedMesh>
		</>
	)
}

// ========================================================
// shader

const vertexShader = `
uniform float u_time;
uniform float u_sway;
varying float v_pz;

${cnoise31}

const float PI = 3.14159265358979;

void main() {
	vec3 pos = position.xyz;
	v_pz = pos.z;

	vec3 base = vec3(pos.x, pos.y, 0.0);
	vec4 baseGP = instanceMatrix * vec4(base, 1.0);
	float noise = cnoise31(baseGP.xyz * vec3(0.1) + u_time * 0.5);
	noise = smoothstep(-1.0, 1.0, noise);

	float swingX = sin(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);
	float swingY = cos(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);
	pos.x += swingX * u_sway;
	pos.y += swingY * u_sway;

  vec4 globalPosition = instanceMatrix * vec4(pos, 1.0);
	vec4 mPos = modelMatrix * globalPosition;
  
	gl_Position = projectionMatrix * viewMatrix * mPos;
}
`

const fragmentShader = `
varying float v_pz;

void main() {
	vec3 color = mix(vec3(0.0), vec3(0.68, 0.89, 0.40), v_pz);

	gl_FragColor = vec4(color, 1.0);
}
`
