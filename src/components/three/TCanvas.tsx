import React, { Suspense, VFC } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { SwayingGrass } from './SwayingGrass';

export const TCanvas: VFC = () => {
	return (
		<Canvas
			camera={{
				position: [-5, 15, 30],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}
			shadows={false}>
			{/* scene */}
			<color attach="background" args={['#ade1ad']} />
			{/* camera controller */}
			<OrbitControls attach="orbitControls" target={[0, 8, 0]} />
			{/* objects */}
			<Suspense fallback={null}>
				<SwayingGrass />
			</Suspense>
			{/* helper */}
			<Stats />
			<axesHelper />
		</Canvas>
	)
}
