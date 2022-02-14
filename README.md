# About
This repository is a boilerplate for r3f（React Three Fiber）.<br>

https://nemutas.github.io/r3f-boilerplate/

![output(video-cutter-js com) (1)](https://user-images.githubusercontent.com/46724121/152631764-af5b1fc7-fc25-4ec8-ac5b-2761931f58c0.gif)

# Environment
* CRA（Create React App）
* TypeScript

```
npx create-react-app . --template typescript --use-npm
```

# Installed packages
### dependencies
* [@emotion/css](https://emotion.sh/docs/introduction)
* [three](https://threejs.org/)
* [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* [@react-three/drei](https://docs.pmnd.rs/drei/introduction)
* [valtio](https://github.com/pmndrs/valtio)
* [lil-gui](https://lil-gui.georgealways.com/)
* [gsap](https://greensock.com/)

### devDependencies
* @types/three
* [gh-pages](https://github.com/tschaub/gh-pages)

# Deploy to Pages
Follow the steps below to deploy.<br>
1. Change package.json<br>
```
"homepage": "https://<your name>.github.io/<your project name>/"
```
2. Run the deploy command
```
npm run deploy
```

# About Controller
In this boilerplate, use [lil-gui](https://lil-gui.georgealways.com/) instead of [Leva](https://github.com/pmndrs/leva) as the controller.<br>

Leva is specialized for react, but when using shaders in threejs, the shader is regenerated at the same time as the component is redrawn, causing a stall in the gpu.
For this reason, it is more convenient to update the value in the frame loop, in which case it is better to use lil-gui.

However, lil-gui is not an optimized package for react, so I have customized it for use.
