<template>
    <canvas ref="bgCanvas" id="bg-canvas">

    </canvas>
</template>

<script setup lang="ts">

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import modelUrl from "../assets/models/thinker.glb";
const bgCanvas = ref<HTMLCanvasElement>()


onMounted(() => {

    const app = document.getElementById('app') as HTMLDivElement;

    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;

    let spotLight: THREE.SpotLight, model: THREE.Group;

    init();

    function init() {

        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: bgCanvas.value });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        renderer.outputEncoding = THREE.sRGBEncoding;

        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;

        renderer.setAnimationLoop(render);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(70, 50, 10);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 20;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set(0, 18, 0);
        controls.update();
        // disable controlling by mouse or touch
        controls.enabled = false;
        // disable zooming
        controls.enableZoom = false;

        const ambient = new THREE.HemisphereLight(0xffffff, 0x444444, 0.05);
        scene.add(ambient);

        const loader = new THREE.TextureLoader().setPath('/textures/');
        const filenames = ['disturb.jpg', 'colors.png', 'uv_grid_opengl.jpg'];



        const textures: {
            [key: string]: any
        } = { none: null };

        for (let i = 0; i < filenames.length; i++) {

            const filename = filenames[i];

            const texture = loader.load(filename);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.encoding = THREE.sRGBEncoding;

            textures[filename] = texture;

        }

        spotLight = new THREE.SpotLight(0xffffff, 5);
        spotLight.position.set(25, 75, 25);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 1;
        spotLight.decay = 2;
        spotLight.distance = 100;
        spotLight.map = textures['disturb.jpg'];

        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 2000;
        spotLight.shadow.focus = 1;
        scene.add(spotLight);


        //

        const geometry = new THREE.PlaneGeometry(1000, 1000);
        const material = new THREE.MeshLambertMaterial({ color: 0x808080 });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, - 1, 0);
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        //

        const gltLoader = new GLTFLoader()
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        gltLoader.setDRACOLoader(dracoLoader);
        gltLoader.load(modelUrl, function (geometry) {
            model = geometry.scene;
            geometry.scene.scale.set(20, 20, 20);
            // geometry.scene.computeVertexNormals();
            geometry.scene.rotation.y = - Math.PI / 2;
            geometry.scene.position.y = 0;
            geometry.scene.castShadow = true;
            geometry.scene.receiveShadow = true;
            scene.add(geometry.scene);
        });

        window.addEventListener('resize', onWindowResize);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function render() {

        const time = performance.now() / 3000;

        spotLight.position.x = Math.cos(time) * 25;
        spotLight.position.z = Math.sin(time) * 25;
        renderer.render(scene, camera);

    }

    // page scrolling should rotate the model
    app.addEventListener('scroll', (e) => {
        let scrollTop = app.scrollTop
        if (model)
            model.rotation.y = scrollTop * 0.001;
    })

})

</script>

<style lang="scss">
#bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>