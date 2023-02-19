<template>
  <Teleport to="body">
    <!-- <Cursor /> -->
    <NavigationToggle />
  </Teleport>
  <Hero />
  <WhyIntellihack />
  <HowItWorks />
  <Submissions />
  <Prizes />
  <Sponsors />
  <WhatTheySay />
  <ContactUs />
  <Footer />
  <canvas id="bg-canvas" ref="bgCanvas"></canvas>
</template>


<script setup lang="ts">
const bgCanvas = ref<HTMLCanvasElement>()


onMounted(() => {
})
</script>


<style lang="scss">
body::-webkit-scrollbar-track {
  background-color: $brandBlack;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: $brandBlack;
}

body::-webkit-scrollbar-thumb {
  background-color: $brandBlue;
  border-radius: 100px;
}
</style>