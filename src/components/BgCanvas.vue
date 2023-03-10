<template>
    <canvas ref="bgCanvas" id="bg-canvas">

    </canvas>
</template>

<script setup lang="ts">
import { Color, Group, HemisphereLight, Mesh, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, Scene, SpotLight, TextureLoader, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// @ts-ignore
import modelUrl from "../assets/models/the_thinker.glb";
const bgCanvas = ref<HTMLCanvasElement>()


function initScene() {

    const app = document.getElementById('app') as HTMLDivElement;

    let renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera;

    let spotLight: SpotLight, model: Group;

    init();

    function init() {

        renderer = new WebGLRenderer({ antialias: false, canvas: bgCanvas.value });
        // if desktop device, use device pixel ratio and turn on antialiasing
        if (window.innerWidth > 768) {
            renderer = new WebGLRenderer({ antialias: true, canvas: bgCanvas.value });
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        renderer.setSize(window.innerWidth, window.innerHeight);


        renderer.shadowMap.enabled = true;
        // optimize shadow map
        renderer.shadowMap.autoUpdate = false;

        // renderer.outputEncoding = sRGBEncoding;

        // renderer.toneMapping = ACESFilmicToneMapping;
        // optimize tone mapping for mobile devices
        // renderer.toneMappingExposure = 1;

        renderer.setAnimationLoop(render);

        scene = new Scene();
        scene.background = new Color(0x000000);

        camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(70, 40, 10);

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

        const ambient = new HemisphereLight(0xffffff, 0x154FA1, 0.05);
        scene.add(ambient);

        const loader = new TextureLoader().setPath('/textures/');
        const filenames = ['disturb3.png'];



        const textures: {
            [key: string]: any
        } = { none: null };

        for (let i = 0; i < filenames.length; i++) {

            const filename = filenames[i];

            const texture = loader.load(filename);
            // texture.minFilter = LinearFilter;
            // texture.magFilter = LinearFilter;
            // texture.encoding = sRGBEncoding;

            textures[filename] = texture;

        }

        spotLight = new SpotLight(0xffffff, 50);
        spotLight.position.set(25, 75, 25);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 1;
        spotLight.decay = 2;
        spotLight.distance = 100;
        spotLight.map = textures['disturb3.png'];

        // spotLight.castShadow = true;
        // spotLight.shadow.mapSize.width = 256;
        // spotLight.shadow.mapSize.height = 256;
        // spotLight.shadow.camera.near = 10;
        // spotLight.shadow.camera.far = 2000;
        // spotLight.shadow.focus = 1;
        scene.add(spotLight);


        //

        const geometry = new PlaneGeometry(1000000, 1000000);
        const material = new MeshLambertMaterial({ color: 0x154FA1 });

        const mesh = new Mesh(geometry, material);
        mesh.position.set(0, - 1, 0);
        mesh.rotation.x = - Math.PI / 2;
        // mesh.receiveShadow = true;
        scene.add(mesh);

        //

        const gltLoader = new GLTFLoader()
        const dracoLoader = new DRACOLoader();
        // const kTx2Loader = new KTX2Loader();
        // kTx2Loader.detectSupport(renderer);
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        gltLoader.setDRACOLoader(dracoLoader);
        // gltLoader.setKTX2Loader(kTx2Loader);
        // gltLoader.setMeshoptDecoder(MeshoptDecoder);
        gltLoader.load(modelUrl, function (geometry) {
            model = geometry.scene;
            geometry.scene.scale.set(20, 20, 20);
            // in mobile scale down to 15
            if (window.innerWidth < 768) {
                geometry.scene.scale.set(15, 15, 15);
            }
            // geometry.scene.computeVertexNormals();
            geometry.scene.rotation.y = - Math.PI;
            geometry.scene.position.y = 0;
            geometry.scene.castShadow = true;
            // geometry.scene.receiveShadow = true;
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
        // update shadow map

        spotLight.position.x = Math.cos(time) * 25;
        spotLight.position.z = Math.sin(time) * 25;
        renderer.render(scene, camera);

        if (model)
            model.rotation.y = - app.scrollTop * 0.002;
        renderer.shadowMap.needsUpdate = true;
    }
}

onMounted(() => {
    initScene();
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
    background-color: #000;
}
</style>