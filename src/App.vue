<template>
  <Teleport to="#app">
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
  <BgCanvas />
</template>

<style lang="scss">
#app {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}

#app::-webkit-scrollbar-track {
  background-color: $brandBlack;
}

#app::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

#app::-webkit-scrollbar-thumb {
  background-color: $brandBlue;
  border-radius: 100px;
}

#app {
  scrollbar-color: $brandBlue transparent;
  scrollbar-width: thin;
  scrollbar-gutter: auto;
}
</style>