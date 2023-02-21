import { ViteSSG } from "vite-ssg/single-page";
import VueLazyLoad from "vue3-lazyload";
import { defineComponent, ref, onMounted, mergeProps, useSSRContext, openBlock, createElementBlock, createStaticVNode, createElementVNode, resolveDirective, unref, watch, withCtx, createTextVNode, createVNode, createBlock, Fragment, renderList, toRefs, computed, onBeforeMount, onUnmounted, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderTeleport } from "vue/server-renderer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap$1, { gsap } from "gsap";
import { useElementBounding } from "@vueuse/core";
import { Carousel, Slide } from "vue3-carousel";
import imagesLoaded from "imagesloaded";
const __uno = "";
const tailwind = "";
const main = "";
const modelUrl = new URL("/assets/thinker.1132e724.glb", location.href).href;
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BgCanvas",
  __ssrInlineRender: true,
  setup(__props) {
    const bgCanvas = ref();
    onMounted(() => {
      const app = document.getElementById("app");
      let renderer, scene, camera;
      let spotLight, model;
      init();
      function init() {
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: bgCanvas.value });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.setAnimationLoop(render2);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1e3);
        camera.position.set(70, 50, 10);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 20;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set(0, 18, 0);
        controls.update();
        controls.enabled = false;
        controls.enableZoom = false;
        const ambient = new THREE.HemisphereLight(16777215, 4473924, 0.05);
        scene.add(ambient);
        const loader = new THREE.TextureLoader().setPath("/textures/");
        const filenames = ["disturb.jpg", "colors.png", "uv_grid_opengl.jpg"];
        const textures = { none: null };
        for (let i = 0; i < filenames.length; i++) {
          const filename = filenames[i];
          const texture = loader.load(filename);
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.encoding = THREE.sRGBEncoding;
          textures[filename] = texture;
        }
        spotLight = new THREE.SpotLight(16777215, 5);
        spotLight.position.set(25, 75, 25);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 1;
        spotLight.decay = 2;
        spotLight.distance = 100;
        spotLight.map = textures["disturb.jpg"];
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 2e3;
        spotLight.shadow.focus = 1;
        scene.add(spotLight);
        const geometry = new THREE.PlaneGeometry(1e3, 1e3);
        const material = new THREE.MeshLambertMaterial({ color: 8421504 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, -1, 0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);
        new GLTFLoader().load(modelUrl, function(geometry2) {
          model = geometry2.scene;
          geometry2.scene.scale.set(20, 20, 20);
          geometry2.scene.rotation.y = -Math.PI / 2;
          geometry2.scene.position.y = 0;
          geometry2.scene.castShadow = true;
          geometry2.scene.receiveShadow = true;
          scene.add(geometry2.scene);
        });
        window.addEventListener("resize", onWindowResize);
      }
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      function render2() {
        const time = performance.now() / 3e3;
        spotLight.position.x = Math.cos(time) * 25;
        spotLight.position.z = Math.sin(time) * 25;
        renderer.render(scene, camera);
      }
      app.addEventListener("scroll", (e) => {
        let scrollTop = app.scrollTop;
        if (model)
          model.rotation.y = scrollTop * 1e-3;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "bgCanvas",
        ref: bgCanvas,
        id: "bg-canvas"
      }, _attrs))}></canvas>`);
    };
  }
});
const BgCanvas_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BgCanvas.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/BgCanvas.vue"]]);
const Footer_vue_vue_type_style_index_0_scoped_4896eafd_lang = "";
const _sfc_main$d = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))} data-v-4896eafd><p data-v-4896eafd>© Copyright 2023 IEEECS. All Rights Reserved </p></footer>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4896eafd"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/Footer.vue"]]);
const _imports_0$3 = "/logos/cs-logo.webp";
const _hoisted_1$4 = {
  viewBox: "0 0 256 193",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"></path><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"></path><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"></path><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"></path><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"></path>', 5);
const _hoisted_7 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_7);
}
const IconGmail = { name: "logos-google-gmail", render: render$4 };
const _hoisted_1$3 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "#1877F2",
    d: "M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "#FFF",
    d: "m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$1 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$1);
}
const IconFacebook = { name: "logos-facebook", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 256 180",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "red",
    d: "M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "#FFF",
    d: "m102.421 128.06l66.328-38.418l-66.328-38.418z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const IconYoutube = { name: "logos-youtube-icon", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode(
  "g",
  { fill: "none" },
  [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "256",
      height: "256",
      fill: "#fff",
      rx: "60"
    }),
    /* @__PURE__ */ createElementVNode("rect", {
      width: "256",
      height: "256",
      fill: "#0A66C2",
      rx: "60"
    }),
    /* @__PURE__ */ createElementVNode("path", {
      fill: "#fff",
      d: "M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const IconLinkedin = { name: "skill-icons-linkedin", render: render$1 };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    let kawishka;
    let surani;
    let contactUs = document.getElementById("contact-us");
    onMounted(() => {
      contactUs = document.getElementById("contact-us");
      kawishka = document.getElementById("kawishka");
      surani = document.getElementById("surani");
      gsap.set(kawishka, { autoAlpha: 0, x: -50 });
      gsap.set(surani, { autoAlpha: 0, x: 50 });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([kawishka, surani], {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              delay: 0.5
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px"
      });
      observer.observe(contactUs);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "contact-us" }, _attrs))} data-v-cc2016cc><h2 data-v-cc2016cc>Contact Us</h2><div data-v-cc2016cc><div class="contact-card" id="kawishka" data-v-cc2016cc><img${ssrRenderAttrs(mergeProps({ alt: "Event Chair's Photo" }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: "/contacts/Kawishka.webp" })))} data-v-cc2016cc><div data-v-cc2016cc><h3 data-v-cc2016cc>Mr. Kavishka Fernando</h3><p data-v-cc2016cc>Event Chair</p><span data-v-cc2016cc><a href="mailto:kavishkafernando64@gmail.com" data-v-cc2016cc>kavishkafernando64@gmail.com</a></span><span data-v-cc2016cc><a href="tel:+94 77 209 4501" data-v-cc2016cc>077 209 4501</a></span></div></div><div class="contact-info" data-v-cc2016cc><a href="mailto:ieeecsucsc@gmail.com" class="email" data-v-cc2016cc>`);
      _push(ssrRenderComponent(unref(IconGmail), null, null, _parent));
      _push(` ieeecsucsc@gmail.com </a><div class="social-links" data-v-cc2016cc><a href="https://www.facebook.com/IEEECSUCSC?mibextid=ZbWKwL" data-v-cc2016cc>`);
      _push(ssrRenderComponent(unref(IconFacebook), null, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/company/ieee-computer-society-student-branch-chapter-of-ucsc/" data-v-cc2016cc>`);
      _push(ssrRenderComponent(unref(IconLinkedin), null, null, _parent));
      _push(`</a><a href="https://youtube.com/@ieeecschapter8130" data-v-cc2016cc>`);
      _push(ssrRenderComponent(unref(IconYoutube), null, null, _parent));
      _push(`</a><a href="https://instagram.com/ieee.cs.ucsc?igshid=OTJlNzQ0NWM=" data-v-cc2016cc><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" data-v-cc2016cc><g fill="none" data-v-cc2016cc><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" data-v-cc2016cc></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" data-v-cc2016cc></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" data-v-cc2016cc></path><defs data-v-cc2016cc><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse" data-v-cc2016cc><stop stop-color="#FD5" data-v-cc2016cc></stop><stop offset=".1" stop-color="#FD5" data-v-cc2016cc></stop><stop offset=".5" stop-color="#FF543E" data-v-cc2016cc></stop><stop offset="1" stop-color="#C837AB" data-v-cc2016cc></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse" data-v-cc2016cc><stop stop-color="#3771C8" data-v-cc2016cc></stop><stop offset=".128" stop-color="#3771C8" data-v-cc2016cc></stop><stop offset="1" stop-color="#60F" stop-opacity="0" data-v-cc2016cc></stop></radialGradient></defs></g></svg></a></div><img${ssrRenderAttr("src", _imports_0$3)} alt="IEEE CS Chapter Logo" class="ieee-cs-logo" data-v-cc2016cc></div><div class="contact-card" id="surani" data-v-cc2016cc><img${ssrRenderAttrs(mergeProps({ alt: "Event Treasurer's Photo" }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: "/contacts/Surani.webp" })))} data-v-cc2016cc><div data-v-cc2016cc><h3 data-v-cc2016cc>Ms. Surani Sooriyarachchi</h3><p data-v-cc2016cc>Event Secretary</p><span data-v-cc2016cc><a href="mailto:suranidevithri29@gmail.com" data-v-cc2016cc>suranidevithri29@gmail.com</a></span><span data-v-cc2016cc><a href="tel:+94 77 587 4759" data-v-cc2016cc>077 587 4759</a></span></div></div></div></section>`);
    };
  }
});
const ContactUs_vue_vue_type_style_index_0_scoped_cc2016cc_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactUs.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-cc2016cc"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/ContactUs.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "WhatTheySay",
  __ssrInlineRender: true,
  setup(__props) {
    function randomFunctionFactory(value) {
      return () => {
        return value * Math.random() - value / 2;
      };
    }
    const whatTheySay = ref();
    const slideImages = ref();
    const { y } = useElementBounding(whatTheySay);
    const loadedOnce = ref(false);
    watch(y, () => {
      if (y.value < 200 && !loadedOnce.value) {
        if (slideImages.value) {
          const timeline = gsap$1.timeline();
          timeline.set(slideImages.value, {
            x: randomFunctionFactory(500),
            y: "500%",
            rotation: randomFunctionFactory(90),
            opacity: 1
          }).to(slideImages.value, { x: 0, y: 0, z: 1, stagger: -0.25 }).to(slideImages.value, {
            rotation: randomFunctionFactory(16)
          });
        }
        loadedOnce.value = true;
      }
    });
    const sayings = [
      {
        name: "Sathsarani",
        quote: "The moments we share are the moments we keep forever.",
        position: "Finalist - Intellihack 2019",
        profession: "Neuro Nerds from SLIIT",
        url: "/posts/Instagram post - 1.webp"
      },
      {
        name: "Sasindu",
        quote: "Every moment past is a learning experience to grow on.",
        position: "Winning team - IntelliHack 2019",
        profession: "Secret agents from SLIIT",
        url: "/posts/Instagram post - 2.webp"
      },
      {
        name: "Chathura",
        quote: "Memories fade but experience holds our hand forever.",
        position: "Finalist - IntelliHack 2019",
        profession: "RUnners Up - IntelliHack 2.0",
        url: "/posts/Instagram post - 3.webp"
      },
      {
        name: "Sahan",
        quote: "A tour to the past, to capture the best moments that last.",
        position: "Finalist - IntelliHack 2019",
        profession: "IntelliHack Master from UCSC",
        url: "/posts/Instagram post - 4.webp"
      }
    ];
    onMounted(() => {
      const slides = document.querySelectorAll(".showcase-pictures");
      slides.forEach((slide) => {
        let current2 = -1;
        let zIndex2 = 1e9;
        let direction2 = "125%";
        if (slideImages.value) {
          slideImages.value.forEach((image) => {
            image.style.zIndex = `${--zIndex2}`;
          });
          gsap$1.set(slideImages.value, { opacity: 0 });
          slide.addEventListener("click", () => {
            --zIndex2;
            current2 = (current2 + 1) % slideImages.value.length;
            let midAngle = 15;
            if (direction2 === "-125%") {
              midAngle = -15;
            }
            const currentImage = slideImages.value[current2];
            const flipTimeline = gsap$1.timeline();
            flipTimeline.set(currentImage, { x: 0 }).to(currentImage, {
              x: direction2,
              rotation: midAngle,
              scale: 1.05
            }).set(currentImage, { zIndex: zIndex2 }).to(currentImage, {
              x: 0,
              rotation: randomFunctionFactory(16),
              scale: 1
            });
            if (direction2 === "125%") {
              direction2 = "-125%";
            } else {
              direction2 = "125%";
            }
          });
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "what-they-say",
        ref_key: "whatTheySay",
        ref: whatTheySay
      }, _attrs))} data-v-400aa655><h2 data-v-400aa655>What They Say</h2><div class="showcase-pictures" data-v-400aa655><div class="showcase-pictures--slides" data-v-400aa655><!--[-->`);
      ssrRenderList(sayings, ({ name, position, profession, quote, url }) => {
        _push(`<div class="slide-image" data-v-400aa655><img${ssrRenderAttrs(mergeProps({ alt: profession }, ssrGetDirectiveProps(_ctx, _directive_lazy, { src: url })))} data-v-400aa655><div data-v-400aa655><h3 data-v-400aa655>${ssrInterpolate(name)}</h3><p data-v-400aa655>${ssrInterpolate(quote)}</p><span data-v-400aa655>${ssrInterpolate(position)}</span><span data-v-400aa655>${ssrInterpolate(profession)}</span></div></div>`);
      });
      _push(`<!--]--></div><!-- <Icon name="uil:angle-left"  /> --><!-- <Icon name="uil:angle-right"  /> --></div></section>`);
    };
  }
});
const WhatTheySay_vue_vue_type_style_index_0_scoped_400aa655_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WhatTheySay.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-400aa655"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/WhatTheySay.vue"]]);
const _imports_0$2 = "/assets/dialogLogo-793ca7c5.webp";
const _imports_1$2 = "/assets/lsegLogo-ede92908.webp";
const _imports_2$1 = "/assets/ifsLogo-e9bc482a.webp";
const _imports_3 = "/assets/GDG_Logo-df636510.webp";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Sponsors",
  __ssrInlineRender: true,
  setup(__props) {
    let sponsors;
    let platinum;
    let gold;
    let silver;
    let knowledge;
    onMounted(() => {
      sponsors = document.getElementById("sponsors");
      platinum = document.getElementById("platinum");
      gold = document.getElementById("gold");
      silver = document.getElementById("silver");
      knowledge = document.getElementById("knowledge");
      gsap.set([platinum, silver], { autoAlpha: 0, x: -100 });
      gsap.set([gold, knowledge], { autoAlpha: 0, x: 100 });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([platinum, gold, silver, knowledge], {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.25,
              delay: 0.5
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px"
      });
      observer.observe(sponsors);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "sponsors" }, _attrs))} data-v-ac73dcd2><h2 data-v-ac73dcd2>Sponsors</h2><div id="platinum" data-v-ac73dcd2><div class="sponsor-card" data-v-ac73dcd2><h3 data-v-ac73dcd2>Offcial Platinum Sponsor</h3><img${ssrRenderAttr("src", _imports_0$2)} alt="Dialog Logo" data-v-ac73dcd2></div></div><div id="gold" data-v-ac73dcd2><div class="sponsor-card" data-v-ac73dcd2><h3 data-v-ac73dcd2>Official Gold Sponsor</h3><img${ssrRenderAttr("src", _imports_1$2)} alt="LSEG Logo" data-v-ac73dcd2></div></div><div id="silver" data-v-ac73dcd2><div class="sponsor-card" data-v-ac73dcd2><h3 data-v-ac73dcd2>Official Silver Sponsor</h3><img${ssrRenderAttr("src", _imports_2$1)} alt="IFS Logo" data-v-ac73dcd2></div></div><div id="knowledge" data-v-ac73dcd2><div class="sponsor-card" data-v-ac73dcd2><h3 data-v-ac73dcd2>Official Knowledge Partner</h3><img${ssrRenderAttr("src", _imports_3)} alt="GDG Logo" data-v-ac73dcd2></div></div></section>`);
    };
  }
});
const Sponsors_vue_vue_type_style_index_0_scoped_ac73dcd2_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Sponsors.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ac73dcd2"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/Sponsors.vue"]]);
const _imports_0$1 = "/prizes/third_place.webp";
const _imports_1$1 = "/prizes/first_place.webp";
const _imports_2 = "/prizes/second_place.webp";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Prizes",
  __ssrInlineRender: true,
  setup(__props) {
    let prizes;
    let prizeCard3;
    let prizeCard2;
    let prizeCard1;
    onMounted(() => {
      prizes = document.getElementById("prizes");
      prizeCard3 = document.getElementById("price-card-3");
      prizeCard2 = document.getElementById("price-card-2");
      prizeCard1 = document.getElementById("price-card-1");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([prizeCard1, prizeCard2, prizeCard3], {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.25,
              delay: 0.5
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px"
      });
      observer.observe(prizes);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "prizes" }, _attrs))} data-v-fa4af0d0><h2 data-v-fa4af0d0>Prizes</h2><div data-v-fa4af0d0><div class="prize-card" id="price-card-1" data-v-fa4af0d0><div class="prize-card__details" data-v-fa4af0d0><h3 data-v-fa4af0d0>Third Place</h3><img${ssrRenderAttr("src", _imports_0$1)} alt="Bronze Laurel" data-v-fa4af0d0><p data-v-fa4af0d0>Rs. 50 000</p></div></div><div class="prize-card" id="price-card-2" data-v-fa4af0d0><div class="prize-card__details" data-v-fa4af0d0><h3 data-v-fa4af0d0>First Place</h3><img${ssrRenderAttr("src", _imports_1$1)} alt="Gold Laurel" data-v-fa4af0d0><p data-v-fa4af0d0>Rs. 100 000</p></div></div><div class="prize-card" id="price-card-3" data-v-fa4af0d0><div class="prize-card__details" data-v-fa4af0d0><h3 data-v-fa4af0d0>Second Place</h3><img${ssrRenderAttr("src", _imports_2)} alt="Silver Laurel" data-v-fa4af0d0><p data-v-fa4af0d0>Rs. 75 000</p></div></div></div></section>`);
    };
  }
});
const Prizes_vue_vue_type_style_index_0_scoped_fa4af0d0_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Prizes.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-fa4af0d0"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/Prizes.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    isLink: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (!props.isLink) {
        _push(`<button${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "button" }, _attrs))} data-v-19765ba3><span class="button_lg" data-v-19765ba3><span class="button_sl" data-v-19765ba3></span><span class="button_text" data-v-19765ba3>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span></span></button>`);
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "button" }, _attrs))} data-v-19765ba3><span class="button_lg" data-v-19765ba3><span class="button_sl" data-v-19765ba3></span><span class="button_text" data-v-19765ba3>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span></span></a>`);
      }
    };
  }
});
const AppButton_vue_vue_type_style_index_0_scoped_19765ba3_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-19765ba3"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/AppButton.vue"]]);
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3h9z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const IconExternalLinkFill = { name: "ri-external-link-fill", render };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Submissions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = AppButton;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "submissions" }, _attrs))} data-v-25eb1658><h2 data-v-25eb1658>Proposal Submissions</h2><p class="text-center text-2xl font-bold" data-v-25eb1658>You can download</p><a class="text-lg text-[var(--color-brand-blue)]" href="https://docs.google.com/document/d/1mrExAJwIrDrr4O2Uj9i0kvtFLac4Dwkh/edit?usp=sharing&amp;ouid=116367104644039849362&amp;rtpof=true&amp;sd=true" target="_blank" data-v-25eb1658> Proposal template here `);
      _push(ssrRenderComponent(unref(IconExternalLinkFill), null, null, _parent));
      _push(`</a><a class="text-lg text-[var(--color-brand-blue)]" href="https://drive.google.com/drive/folders/1nVO9421uGZjR5Ep6OIpRIO2gfqotY70n?usp=sharing" target="_blank" data-v-25eb1658> Booklet here `);
      _push(ssrRenderComponent(unref(IconExternalLinkFill), null, null, _parent));
      _push(`</a><a class="text-lg text-[var(--color-brand-blue)]" href="https://drive.google.com/drive/folders/1drfWDhF2UbtIQaNknDaERVyjsxEyKI0l?usp=share_link" target="_blank" data-v-25eb1658> Rules &amp; Regulations `);
      _push(ssrRenderComponent(unref(IconExternalLinkFill), null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "submission-link",
        "is-link": true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Submit your application `);
          } else {
            return [
              createTextVNode(" Submit your application ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</section>`);
    };
  }
});
const Submissions_vue_vue_type_style_index_0_scoped_25eb1658_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Submissions.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-25eb1658"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/Submissions.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const indicators = ref();
    const timelineItems = [
      {
        key: 1,
        title: "Workshop 1",
        description: `First workshop, which will be held online on Deployment of ML models using Cloud based Applications.
An Experienced individual from Google Developers Group Sri Lanka will be the speaker of the workshop 1.`,
        date: `12-02-2023`
      },
      {
        key: 2,
        title: "Proposal Submissions Open",
        description: `The first round of InteliHack is an Ideathon where participants can pitch their ideas and form teams. During this round, 
participants must submit a proposal describing the machine learning solution to the problem within the selected area according to the given proposal template.`,
        date: `19-02-2023`
      },
      {
        key: 3,
        title: "Workshop 2",
        description: `Second workshop, which also is an online event will cover the topic Deploy and orchestrate machine learning pipelines with Azure.
Speaker is the Gold Microsoft Learn Student Ambassador of Microsoft Sri Lanka..`,
        date: `26-02-2023`
      },
      {
        key: 4,
        title: "Proposal Submissions Close",
        description: `The submissions for the ideathon will be closed. Top 10 teams will be selected based on the potential of their ideas and the feasibility of their implementation
by the evaluation panel will be selected for the final round.`,
        date: `11-03-2023`
      },
      {
        key: 5,
        title: "Proposal Evaluation Stage",
        description: `The proposals submitted during the initial phase will be evaluated by the experienced panel of expertise during this period and the finalists will be announced.`,
        date: `18-03-2023`
      },
      {
        key: 6,
        title: "Final Round Start",
        description: `The submitted proposals will be shortlisted into best ten proposals.
The top ten contestants need to implement the idea that they had proposed in the initial phase. 
The solution must meet the conditions specified in the submitted proposal.`,
        date: `25-03-2023`
      },
      {
        key: 7,
        title: "Final Hackathon",
        description: `The final touches of the solution and the deployment process is implemented in this 24 hour long hackathon.`,
        date: `06-05-2023`
      },
      {
        key: 8,
        title: "Final Presentation And Close Event",
        description: `Participants will present their projects in final presentations, and an award ceremony will be organized to honor the top projects.`,
        date: `07-05-2023`
      }
    ];
    const pipe = ref();
    const pipeProgress = ref();
    const { y } = useElementBounding(pipe);
    let previousProgressPercentage = 0;
    watch(y, () => {
      if (pipe && pipe.value && pipeProgress && pipeProgress.value) {
        const rawHeightOfPipe = window.innerHeight - y.value - 100;
        const pipeTotalHeight = pipe.value.getBoundingClientRect().height;
        const percentageOfPipeShown = Math.min(rawHeightOfPipe / pipeTotalHeight * 100, 100);
        if (percentageOfPipeShown > 0 && percentageOfPipeShown > previousProgressPercentage) {
          pipeProgress.value.style.height = `${percentageOfPipeShown}%`;
          previousProgressPercentage = percentageOfPipeShown;
        }
      }
    });
    onMounted(() => {
      var _a;
      const indicatorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indicator = entry.target;
            const key = indicator.dataset.indicator;
            const event = document.querySelector(`[data-event="${key}"]`);
            if (event) {
              event.classList.add("active");
              setTimeout(() => {
                indicator.classList.add("active");
              }, 300);
            }
          }
        });
      }, {
        rootMargin: "0px 0px -128px"
      });
      (_a = indicators.value) == null ? void 0 : _a.forEach((i) => {
        indicatorObserver.observe(i);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "how-it-works" }, _attrs))} data-v-579661b7><h2 data-v-579661b7>How It Works</h2><div id="timeline" data-v-579661b7><div id="pipe" data-v-579661b7><div id="pipe-progress" data-v-579661b7></div></div><!--[-->`);
      ssrRenderList(timelineItems, (event) => {
        _push(`<div class="timeline-event"${ssrRenderAttr("data-event", event.key)} data-v-579661b7><h3 data-v-579661b7>${ssrInterpolate(event.title)}</h3><p data-v-579661b7>${ssrInterpolate(event.description)}</p><div class="timeline-indicator"${ssrRenderAttr("data-indicator", event.key)} data-v-579661b7><!-- <img src="@/assets/images/logo-blue.png" alt="Intellihack Logo" class="hero-logo"> --></div><div class="timeline-event__date" data-v-579661b7>${ssrInterpolate(event.date)}</div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const HowItWorks_vue_vue_type_style_index_0_scoped_579661b7_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HowItWorks.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-579661b7"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/HowItWorks.vue"]]);
const carousel = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WhyIntellihack",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/memories/intelli1.webp",
      "/memories/intelli2.webp",
      "/memories/intelli3.webp",
      "/memories/intelli4.webp",
      "/memories/intelli5.webp"
    ];
    const whyIntellihack = ref();
    const infoDiv = ref();
    onMounted(() => {
      gsap.set([infoDiv.value], {
        opacity: 0
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([infoDiv.value], {
              opacity: 1,
              duration: 1,
              ease: "power4.out"
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px"
      });
      observer.observe(whyIntellihack.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <ClientOnly> --><section${ssrRenderAttrs(mergeProps({
        id: "why-intellihack",
        ref_key: "whyIntellihack",
        ref: whyIntellihack
      }, _attrs))} data-v-1fd820b4>`);
      _push(ssrRenderComponent(unref(Carousel), {
        "items-to-show": 1,
        "wrap-around": true,
        autoplay: 2e3,
        transition: 500
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(images, (image, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: image }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `Carousel Image #${index + 1}`)} data-v-1fd820b4${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: image,
                        alt: `Carousel Image #${index + 1}`
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
                /* DYNAMIC */
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(
                Fragment,
                null,
                renderList(images, (image, index) => {
                  return createVNode(
                    unref(Slide),
                    { key: image },
                    {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: image,
                          alt: `Carousel Image #${index + 1}`
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<div class="info" data-v-1fd820b4><h2 data-v-1fd820b4>Why IntelliHack ?</h2><p data-v-1fd820b4> IntelliHack is the first-ever Machine Learning hackathon in Sri Lanka. This is one of the year’s most anticipated, exciting, and electrifying events that innovative minds look forward to. The contestants get the privilege to network with some of the topmost experts in the industry and expose themselves to this attractive technology that would benefit them immensely in their future activities. IntelliHack is a great platform for curious minds interested in machine learning to meet and collaborate with each other. It also encourages the youth to participate and be a part of this revolutionary technology and sciences which are the upcoming breakthroughs in the technical world. Moreover, among many more benefits, IntelliHack aims to raise awareness among society about machine learning and artificial intelligence. </p></div></section><!-- </ClientOnly> --><!--]-->`);
    };
  }
});
const WhyIntellihack_vue_vue_type_style_index_0_scoped_1fd820b4_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WhyIntellihack.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1fd820b4"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/WhyIntellihack.vue"]]);
const _imports_0 = "/assets/logo-43401d33.webp";
const _imports_1 = "/assets/robot-0f616e5b.webp";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppCountdown",
  __ssrInlineRender: true,
  props: {
    flipCardId: { type: String, required: true },
    deadline: { type: String, required: false, default: "32d,0h,0m,0s" },
    deadlineISO: { type: String, required: false, default: "" },
    stop: { type: Boolean, required: false, default: false },
    showLabels: { type: Boolean, required: false, default: true },
    showDays: { type: Boolean, required: false, default: true },
    showHours: { type: Boolean, required: false, default: true },
    showMinutes: { type: Boolean, required: false, default: true },
    showSeconds: { type: Boolean, required: false, default: true },
    labels: { type: Object, required: true },
    deadlineDate: { type: Date, required: false },
    countdownSize: { type: String, required: false, default: "3rem" },
    labelSize: { type: String, required: false, default: "1.2rem" },
    flipAnimation: { type: Boolean, required: false, default: true },
    mainColor: { type: String, required: false, default: "var(--color-brand-blue)" },
    secondFlipColor: { type: String, required: false, default: "var(--color-brand-blue)" },
    mainFlipBackgroundColor: { type: String, required: false, default: "#222222" },
    secondFlipBackgroundColor: { type: String, required: false, default: "#393939" },
    labelColor: { type: String, required: false, default: "#222222" }
  },
  emits: ["timeElapsed"],
  setup(__props, { emit }) {
    const props = __props;
    const {
      deadline,
      stop,
      showDays,
      showHours,
      showMinutes,
      showSeconds,
      labels,
      deadlineDate,
      deadlineISO,
      flipCardId
    } = toRefs(props);
    const now = ref(Math.trunc(new Date().getTime() / 1e3));
    const date = ref(null);
    const interval = ref(null);
    const diff = ref(0);
    const show = ref(false);
    const timeData = ref([
      {
        current: 0,
        previous: 0,
        label: labels.value.days,
        elementId: "flip-card-days-" + flipCardId.value,
        show: showDays.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.hours,
        elementId: "flip-card-hours-" + flipCardId.value,
        show: showHours.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.minutes,
        elementId: "flip-card-minutes-" + flipCardId.value,
        show: showMinutes.value
      },
      {
        current: 0,
        previous: 0,
        label: labels.value.seconds,
        elementId: "flip-card-seconds-" + flipCardId.value,
        show: showSeconds.value
      }
    ]);
    const seconds = computed(() => {
      return Math.trunc(diff.value) % 60;
    });
    const minutes = computed(() => {
      return Math.trunc(diff.value / 60) % 60;
    });
    const hours = computed(() => {
      return Math.trunc(diff.value / 60 / 60) % 24;
    });
    const days = computed(() => {
      return Math.trunc(diff.value / 60 / 60 / 24);
    });
    function updateTime(idx, newValue) {
      if (idx >= timeData.value.length || newValue === void 0) {
        return;
      }
      const d = timeData.value[idx];
      const val = newValue.value < 0 ? 0 : newValue.value;
      const el = document.querySelector(`#${d.elementId}`);
      if (val !== d.current && el) {
        d.previous = d.current;
        d.current = val;
        if (el) {
          el.classList.remove("flip");
          void el.offsetWidth;
          el.classList.add("flip");
        }
        if (idx === 0) {
          const els = el.querySelectorAll("span b");
          if (els) {
            els.forEach((e) => {
              const cls = e.classList[0];
              if (newValue.value / 1e3 >= 1) {
                if (!cls.includes("-4digits")) {
                  const newCls = cls + "-4digits";
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              } else {
                if (cls.includes("-4digits")) {
                  const newCls = cls.replace("-4digits", "");
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              }
            });
          }
        }
      }
    }
    function updateAllCards() {
      updateTime(0, days);
      updateTime(1, hours);
      updateTime(2, minutes);
      updateTime(3, seconds);
    }
    function twoDigits(value) {
      if (value != void 0) {
        if (value.toString().length <= 1) {
          return "0" + value.toString();
        }
        return value.toString();
      } else {
        return "00";
      }
    }
    watch(deadline, (newVal) => {
      const endTime = newVal;
      date.value = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1e3);
      if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
      }
    });
    watch(now, () => {
      if (date.value)
        diff.value = date.value - now.value;
      if (diff.value <= 0 || stop.value) {
        diff.value = 0;
        updateTime(3, ref(0));
      } else {
        updateAllCards();
      }
    });
    watch(diff, (newVal) => {
      if (newVal == 0) {
        emit("timeElapsed", 0);
        updateAllCards();
      }
    });
    onMounted(() => {
      if (diff.value !== 0) {
        show.value = true;
      }
    });
    onBeforeMount(() => {
      if (!deadline.value) {
        throw new Error("Missing props 'deadline'");
      }
      const endTime = deadline.value;
      let epoch = Date.parse(endTime.replace(/-/g, "/"));
      if (deadlineDate && deadlineDate.value != null) {
        epoch = Date.parse(deadlineDate.value.toString());
      } else if (deadlineISO.value) {
        epoch = Date.parse(deadlineISO.value);
      }
      date.value = Math.trunc(epoch / 1e3);
      if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
      }
      interval.value = setInterval(() => {
        now.value = Math.trunc(new Date().getTime() / 1e3);
      }, 1e3);
    });
    onUnmounted(() => {
      if (interval.value)
        clearInterval(interval.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--037a1c30-mainColor": __props.mainColor,
        "--037a1c30-labelColor": __props.labelColor,
        "--037a1c30-mainFlipBackgroundColor": __props.mainFlipBackgroundColor,
        "--037a1c30-secondFlipColor": __props.secondFlipColor,
        "--037a1c30-secondFlipBackgroundColor": __props.secondFlipBackgroundColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flip-clock" }, _attrs, _cssVars))} data-v-037a1c30><!--[-->`);
      ssrRenderList(unref(timeData), (data) => {
        _push(`<span class="flip-clock__piece"${ssrRenderAttr("id", data.elementId)} style="${ssrRenderStyle(data.show ? null : { display: "none" })}" data-v-037a1c30>`);
        if (__props.flipAnimation) {
          _push(`<div data-v-037a1c30><span class="flip-clock__card flip-card" style="${ssrRenderStyle(__props.countdownSize ? `font-size:${__props.countdownSize}` : "")}" data-v-037a1c30><b class="flip-card__top" data-v-037a1c30>${ssrInterpolate(twoDigits(data.current))}</b><b class="flip-card__bottom"${ssrRenderAttr("data-value", twoDigits(data.current))} data-v-037a1c30></b><b class="flip-card__back"${ssrRenderAttr("data-value", twoDigits(data.previous))} data-v-037a1c30></b><b class="flip-card__back-bottom"${ssrRenderAttr("data-value", twoDigits(data.previous))} data-v-037a1c30></b></span></div>`);
        } else {
          _push(`<div data-v-037a1c30><span class="no-animation__card" data-v-037a1c30>${ssrInterpolate(twoDigits(data.current))}</span></div>`);
        }
        if (__props.showLabels) {
          _push(`<span class="flip-clock__slot" style="${ssrRenderStyle(__props.labelSize ? `font-size:${__props.labelSize}` : "")}" data-v-037a1c30>${ssrInterpolate(data.label)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const AppCountdown_vue_vue_type_style_index_0_scoped_037a1c30_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppCountdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppCountdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-037a1c30"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/AppCountdown.vue"]]);
const ScrollReminder_vue_vue_type_style_index_0_scoped_2c964127_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "scroll-reminder" }, _attrs))} data-v-2c964127></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ScrollReminder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ScrollReminder = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2c964127"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/ScrollReminder.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    let heading;
    let submissionReminder;
    let countdown;
    let scrollReminder;
    let cta;
    let robo;
    onMounted(() => {
      heading = document.getElementById("heading");
      submissionReminder = document.getElementById("submission-reminder");
      countdown = document.getElementById("countdown");
      scrollReminder = document.getElementById("scroll-reminder");
      cta = document.getElementById("cta");
      robo = document.getElementById("robo");
      gsap.set([heading, submissionReminder, countdown, cta], { autoAlpha: 0, y: 50 });
      gsap.set([robo], { autoAlpha: 0, x: 100 });
      gsap.set(scrollReminder, { autoAlpha: 0 });
      gsap.to([heading, submissionReminder, countdown, cta], { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.25 });
      imagesLoaded(robo, () => {
        gsap.to(robo, { autoAlpha: 1, x: 0, duration: 1 });
      });
      imagesLoaded(scrollReminder, () => {
        gsap.to(scrollReminder, { autoAlpha: 1, duration: 0.5 });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-edb47f11><h1 class="mb-16" id="heading" data-v-edb47f11> IntelliHack 3.0 </h1><p id="submission-reminder" data-v-edb47f11> Proposal submissions deadline in </p>`);
      _push(ssrRenderComponent(AppCountdown, {
        "flip-card-id": "Intellihach3",
        labels: {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds"
        },
        "deadline-date": new Date("2023-03-11 00:00:00"),
        "label-color": "#bbb",
        class: "z-2",
        id: "countdown"
      }, null, _parent));
      _push(ssrRenderComponent(AppButton, {
        class: "mt-8 z-2 cta",
        href: "#submissions",
        "is-link": true,
        id: "cta"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="Intellihack Logo" class="hero-logo" id="logo" data-v-edb47f11><img${ssrRenderAttr("src", _imports_1)} alt="Robo Human Hybrid Woman" class="hero-img" id="robo" data-v-edb47f11>`);
      _push(ssrRenderComponent(ScrollReminder, { id: "scroll-reminder" }, null, _parent));
      _push(`</main>`);
    };
  }
});
const Hero_vue_vue_type_style_index_0_scoped_edb47f11_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-edb47f11"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/Hero.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigationToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    watch(isActive, () => {
      if (isActive.value) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
    ref();
    const linkMapList = [{
      link: "",
      text: "Intellihack"
    }, {
      link: "#timeline",
      text: "Timeline"
    }, {
      link: "#submissions",
      text: "Submissions"
    }, {
      link: "#prizes",
      text: "Prizes"
    }, {
      link: "#sponsors",
      text: "Sponsors"
    }, {
      link: "#what-they-say",
      text: "What They Say"
    }, {
      link: "#contact-us",
      text: "Contact Us"
    }];
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([unref(isActive) ? "is-active" : "", "nav-toggle"])}" id="nav-toggle" data-v-adc7c789><span class="line" data-v-adc7c789></span><span class="line" data-v-adc7c789></span><span class="line" data-v-adc7c789></span></div><div id="nav-menu" class="${ssrRenderClass([unref(isActive) ? "active" : "", "flex items-center justify-center"])}" data-v-adc7c789><div class="Menu" data-v-adc7c789><ul class="Menu-list" data-offset="10" data-v-adc7c789><!--[-->`);
      ssrRenderList(linkMapList, (linkMap) => {
        _push(`<li data-v-adc7c789><a class="Menu-list-item"${ssrRenderAttr("href", linkMap.link)} data-v-adc7c789>${ssrInterpolate(linkMap.text)} <span class="Mask" data-v-adc7c789><span data-v-adc7c789>${ssrInterpolate(linkMap.text)}</span></span><span class="Mask" data-v-adc7c789><span data-v-adc7c789>${ssrInterpolate(linkMap.text)}</span></span></a></li>`);
      });
      _push(`<!--]--></ul></div></div><!--]-->`);
    };
  }
});
const NavigationToggle_vue_vue_type_style_index_0_scoped_adc7c789_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavigationToggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-adc7c789"], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/components/NavigationToggle.vue"]]);
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavigationToggle = __unplugin_components_0;
  const _component_Hero = __unplugin_components_1;
  const _component_WhyIntellihack = __unplugin_components_2;
  const _component_HowItWorks = __unplugin_components_3;
  const _component_Submissions = __unplugin_components_4;
  const _component_Prizes = __unplugin_components_5;
  const _component_Sponsors = __unplugin_components_6;
  const _component_WhatTheySay = __unplugin_components_7;
  const _component_ContactUs = __unplugin_components_8;
  const _component_Footer = __unplugin_components_9;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_BgCanvas = __unplugin_components_10;
  _push(`<!--[-->`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<!-- <Cursor /> -->`);
    _push2(ssrRenderComponent(_component_NavigationToggle, null, null, _parent));
  }, "#app", false, _parent);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_WhyIntellihack, null, null, _parent));
  _push(ssrRenderComponent(_component_HowItWorks, null, null, _parent));
  _push(ssrRenderComponent(_component_Submissions, null, null, _parent));
  _push(ssrRenderComponent(_component_Prizes, null, null, _parent));
  _push(ssrRenderComponent(_component_Sponsors, null, null, _parent));
  _push(ssrRenderComponent(_component_WhatTheySay, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BgCanvas, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BgCanvas)
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/nethr/Desktop/IEEE/intellihack3/src/App.vue"]]);
const createApp = ViteSSG(App, ({ app }) => {
  app.use(VueLazyLoad, {});
});
export {
  createApp
};
