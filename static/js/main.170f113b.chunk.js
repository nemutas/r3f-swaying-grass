(this.webpackJsonpr3f_swaying_grass=this.webpackJsonpr3f_swaying_grass||[]).push([[0],{41:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);t(41);var i=t(9),a=t.n(i),o=t(30),r=t.n(o),c=t(31),s=t(38),g=t(51),v=t(52),d=t(12),u=t(2),x=t(32),f=t(50),l=t(0),y=t(1),m=t(33),z=function(){function n(){var e=this;Object(l.a)(this,n),this._gui=void 0,this._currentFolderName=void 0,this._getGui=function(n){var t=e._gui;return n?t=e._folder(n):e._currentFolderName&&(t=e._folder(e._currentFolderName)),t},this._folder=function(n){var t=e._gui.folders.find((function(e){return e._title===n}));return t||(t=e._gui.addFolder(n)),t},this._uncontainedName=function(n,e){return!n.controllers.find((function(n){return n._name===e}))},this.setFolder=function(n){return e._currentFolderName=n,e},this.addColor=function(n,t,i,a,o){var r=a||t,c=e._getGui(o);e._uncontainedName(c,r)&&c.addColor(n,t,i).name(r)},this.addNumericSlider=function(n,t,i,a,o,r,c){var s=r||t,g=e._getGui(c);e._uncontainedName(g,s)&&g.add(n,t,i,a,o).name(s)},this.addDropdown=function(n,t,i,a,o){var r=a||t,c=e._getGui(o);e._uncontainedName(c,r)&&c.add(n,t,i).name(r)},this.addButton=function(n,t,i,a){var o=i||t,r=e._getGui(a);e._uncontainedName(r,o)&&r.add(n,t).name(o)},this.addCheckBox=function(n,t,i,a){var o=i||t,r=e._getGui(a);e._uncontainedName(r,o)&&r.add(n,t).name(o)},this._gui=new m.a}return Object(y.a)(n,null,[{key:"instance",get:function(){return this._instance||(this._instance=new n),this._instance._currentFolderName=void 0,this._instance}}]),n}();z._instance=void 0;var _,p={sway:.3},h=t(10),P=function(){var n=Object(i.useRef)(null);z.instance.setFolder("Uniforms").addNumericSlider(p,"sway",.1,1,.01);var e=Object(f.a)("/r3f-swaying-grass"+"/assets/models/bunny.fbx"),t=e.children[0].geometry;t.applyMatrix4((new u.Matrix4).makeScale(.2,.2,.2)),e.children[0].updateMatrix();var a=Object(i.useMemo)((function(){var n=new u.Mesh(t,new u.MeshBasicMaterial);return new x.a(n).build()}),[t]),o=2e5,r=Object(i.useCallback)((function(){for(var e=new u.Object3D,t=new u.Vector3,i=new u.Vector3,r=0;r<o;r++)a.sample(t,i),e.position.copy(t),e.lookAt(i.add(t)),e.updateMatrix(),n.current.setMatrixAt(r,e.matrix);n.current.instanceMatrix.needsUpdate=!0}),[o,a]);Object(i.useEffect)((function(){n.current.geometry.applyMatrix4((new u.Matrix4).makeRotationX(Math.PI/2)),n.current.geometry.applyMatrix4((new u.Matrix4).makeTranslation(0,0,.5)),r()}),[r]);var c={uniforms:{u_time:{value:0},u_sway:{value:p.sway}},vertexShader:w,fragmentShader:b};return Object(d.d)((function(){c.uniforms.u_time.value+=.005,c.uniforms.u_sway.value=p.sway})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("mesh",{geometry:t,children:Object(h.jsx)("meshBasicMaterial",{color:"#000"})}),Object(h.jsxs)("instancedMesh",{ref:n,args:[void 0,void 0,o],children:[Object(h.jsx)("coneGeometry",{args:[.05,1,2,20,!1,0,Math.PI]}),Object(h.jsx)("shaderMaterial",{args:[c],side:u.DoubleSide})]})]})},w="\nuniform float u_time;\nuniform float u_sway;\nvarying float v_pz;\n\n".concat("\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise31(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","\n\nconst float PI = 3.14159265358979;\n\nvoid main() {\n\tvec3 pos = position.xyz;\n\tv_pz = pos.z;\n\n\tvec3 base = vec3(pos.x, pos.y, 0.0);\n\tvec4 baseGP = instanceMatrix * vec4(base, 1.0);\n\tfloat noise = cnoise31(baseGP.xyz * vec3(0.1) + u_time * 0.5);\n\tnoise = smoothstep(-1.0, 1.0, noise);\n\n\tfloat swingX = sin(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);\n\tfloat swingY = cos(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);\n\tpos.x += swingX * u_sway;\n\tpos.y += swingY * u_sway;\n\n  vec4 globalPosition = instanceMatrix * vec4(pos, 1.0);\n\tvec4 mPos = modelMatrix * globalPosition;\n  \n\tgl_Position = projectionMatrix * viewMatrix * mPos;\n}\n"),b="\nvarying float v_pz;\n\nvoid main() {\n\tvec3 color = mix(vec3(0.0), vec3(0.68, 0.89, 0.40), v_pz);\n\n\tgl_FragColor = vec4(color, 1.0);\n}\n",j=function(){return Object(h.jsxs)(d.a,{camera:{position:[-10,5,30],fov:50,aspect:window.innerWidth/window.innerHeight,near:.1,far:2e3},dpr:window.devicePixelRatio,shadows:!1,children:[Object(h.jsx)("color",{attach:"background",args:["#ade1ad"]}),Object(h.jsx)(g.a,{attach:"orbitControls"}),Object(h.jsx)(i.Suspense,{fallback:null,children:Object(h.jsx)(P,{})}),Object(h.jsx)(v.a,{}),Object(h.jsx)("axesHelper",{})]})},O=function(){return Object(h.jsx)("div",{className:M.container,children:Object(h.jsx)(j,{})})},M={container:Object(s.a)(_||(_=Object(c.a)(["\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\toverflow: hidden;\n\t"])))},F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.170f113b.chunk.js.map