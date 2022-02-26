(this.webpackJsonpr3f_swaying_grass=this.webpackJsonpr3f_swaying_grass||[]).push([[0],{42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(42);var o=n(9),a=n.n(o),i=n(31),r=n.n(i),c=n(32),s=n(39),g=n(10),v=n(12),d=n(11),u=function(e){var t,n=e.imagePath,a=e.linkPath,i=e.position,r=void 0===i?"bottom-right":i,c=e.size,s=void 0===c?[50,50]:c,g=Object(o.useState)(!1),u=Object(v.a)(g,2),f=u[0],m=u[1],y="/r3f-swaying-grass"+n;switch(r){case"top-left":t=l.topLeft;break;case"top-right":t=l.topRight;break;case"bottom-left":t=l.bottomLeft;break;default:t=l.bottomRight}return Object(d.jsx)("a",{style:t,href:a,target:"_blank",rel:"noreferrer noopener",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:Object(d.jsx)("img",{style:f?x.img:l.img,src:y,alt:"",width:s[0],height:s[1]})})},f={position:"absolute",fontSize:"0"},l={topLeft:Object(g.a)(Object(g.a)({},f),{},{top:"10px",left:"10px"}),topRight:Object(g.a)(Object(g.a)({},f),{},{top:"10px",right:"10px"}),bottomLeft:Object(g.a)(Object(g.a)({},f),{},{bottom:"10px",left:"10px"}),bottomRight:Object(g.a)(Object(g.a)({},f),{},{bottom:"10px",right:"10px"}),img:{objectFit:"cover",opacity:"0.5",transform:"rotate(0deg)",transition:"all 0.3s"}},x={img:Object(g.a)(Object(g.a)({},l.img),{},{opacity:"1",transform:"rotate(360deg)"})},m=n(52),y=n(53),b=n(13),p=n(2),h=n(33),z=n(51),_=n(0),j=n(1),P=n(34),w=function(){function e(){var t=this;Object(_.a)(this,e),this._gui=void 0,this._currentFolderName=void 0,this._getGui=function(e){var n=t._gui;return e?n=t._folder(e):t._currentFolderName&&(n=t._folder(t._currentFolderName)),n},this._folder=function(e){var n=t._gui.folders.find((function(t){return t._title===e}));return n||(n=t._gui.addFolder(e)),n},this._uncontainedName=function(e,t){return!e.controllers.find((function(e){return e._name===t}))},this.setFolder=function(e){return t._currentFolderName=e,t},this.addColor=function(e,n,o,a,i){var r=a||n,c=t._getGui(i);t._uncontainedName(c,r)&&c.addColor(e,n,o).name(r)},this.addNumericSlider=function(e,n,o,a,i,r,c){var s=r||n,g=t._getGui(c);t._uncontainedName(g,s)&&g.add(e,n,o,a,i).name(s)},this.addDropdown=function(e,n,o,a,i){var r=a||n,c=t._getGui(i);t._uncontainedName(c,r)&&c.add(e,n,o).name(r)},this.addButton=function(e,n,o,a){var i=o||n,r=t._getGui(a);t._uncontainedName(r,i)&&r.add(e,n).name(i)},this.addCheckBox=function(e,n,o,a){var i=o||n,r=t._getGui(a);t._uncontainedName(r,i)&&r.add(e,n).name(i)},this._gui=new P.a}return Object(j.a)(e,null,[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance._currentFolderName=void 0,this._instance}}]),e}();w._instance=void 0;var O={sway:.3},M="/r3f-swaying-grass"+"/assets/models/rabbit.glb";z.a.preload(M);var k,F=function(){var e=Object(o.useRef)(null);w.instance.setFolder("Uniforms").addNumericSlider(O,"sway",.1,1,.01);var t=Object(z.a)(M).nodes.Rabbit.geometry,n=Object(o.useMemo)((function(){var e=new p.Mesh(t,new p.MeshBasicMaterial);return new h.a(e).build()}),[t]),a=2e5,i=Object(o.useCallback)((function(){for(var t=new p.Object3D,o=new p.Vector3,i=new p.Vector3,r=0;r<a;r++)n.sample(o,i),t.position.copy(o),t.lookAt(i.add(o)),t.updateMatrix(),e.current.setMatrixAt(r,t.matrix);e.current.instanceMatrix.needsUpdate=!0}),[a,n]);Object(o.useEffect)((function(){e.current.geometry.applyMatrix4((new p.Matrix4).makeRotationX(Math.PI/2)),e.current.geometry.applyMatrix4((new p.Matrix4).makeTranslation(0,0,.5)),i()}),[i]);var r={uniforms:{u_time:{value:0},u_sway:{value:O.sway}},vertexShader:N,fragmentShader:S};return Object(b.d)((function(){r.uniforms.u_time.value+=.005,r.uniforms.u_sway.value=O.sway})),Object(d.jsxs)("group",{children:[Object(d.jsx)("mesh",{geometry:t,children:Object(d.jsx)("meshBasicMaterial",{color:"#000"})}),Object(d.jsxs)("instancedMesh",{ref:e,args:[void 0,void 0,a],children:[Object(d.jsx)("coneGeometry",{args:[.05,1,2,20,!1,0,Math.PI]}),Object(d.jsx)("shaderMaterial",{args:[r],side:p.DoubleSide})]})]})},N="\nuniform float u_time;\nuniform float u_sway;\nvarying float v_pz;\n\n".concat("\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise31(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","\n\nconst float PI = 3.14159265358979;\n\nvoid main() {\n\tvec3 pos = position.xyz;\n\tv_pz = pos.z;\n\n\tvec3 base = vec3(pos.x, pos.y, 0.0);\n\tvec4 baseGP = instanceMatrix * vec4(base, 1.0);\n\tfloat noise = cnoise31(baseGP.xyz * vec3(0.1) + u_time * 0.5);\n\tnoise = smoothstep(-1.0, 1.0, noise);\n\n\tfloat swingX = sin(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);\n\tfloat swingY = cos(u_time * 2.0 + noise * 2.0 * PI) * pow(v_pz, 2.0);\n\tpos.x += swingX * u_sway;\n\tpos.y += swingY * u_sway;\n\n  vec4 globalPosition = instanceMatrix * vec4(pos, 1.0);\n\tvec4 mPos = modelMatrix * globalPosition;\n  \n\tgl_Position = projectionMatrix * viewMatrix * mPos;\n}\n"),S="\nvarying float v_pz;\n\nvoid main() {\n\tvec3 color = mix(vec3(0.0), vec3(0.68, 0.89, 0.40), v_pz);\n\n\tgl_FragColor = vec4(color, 1.0);\n}\n",I=function(){return Object(d.jsxs)(b.a,{camera:{position:[-5,15,30],fov:50,aspect:window.innerWidth/window.innerHeight,near:.1,far:2e3},dpr:window.devicePixelRatio,shadows:!1,children:[Object(d.jsx)("color",{attach:"background",args:["#ade1ad"]}),Object(d.jsx)(m.a,{attach:"orbitControls",target:[0,8,0]}),Object(d.jsx)(o.Suspense,{fallback:null,children:Object(d.jsx)(F,{})}),Object(d.jsx)(y.a,{}),Object(d.jsx)("axesHelper",{})]})},C=function(){return Object(d.jsxs)("div",{className:G.container,children:[Object(d.jsx)(I,{}),Object(d.jsx)(u,{imagePath:"/assets/icons/github.svg",linkPath:"https://github.com/nemutas/r3f-swaying-grass"})]})},G={container:Object(s.a)(k||(k=Object(c.a)(["\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\toverflow: hidden;\n\t"])))},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),R()}},[[50,1,2]]]);
//# sourceMappingURL=main.33dddf0b.chunk.js.map