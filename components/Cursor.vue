<template>
  <div id="cursor" ref="cursor" :style="{
    top: `${y}px`,
    left: `${x}px`
  }">
  </div>
  <div id="cursor__inner" ref="cursorInner1" class="cursor__inner" :style="{
    top: `${positions.y0}px`,
    left: `${positions.x0}px`
  }">

  </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouse()


const positions = computed(() => {
  const x0 = x.value + 9
  const y0 = y.value + 9

  return {
   x0, y0
  }
}
)

</script>



<style lang="scss">
#cursor {
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid #eee;
  border-radius: 50%;
  position: absolute;
  z-index: 999999;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  mix-blend-mode: difference;
}

.cursor__inner {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999999;
  background-color: #eee;
  transition: all 0.05s linear;
  mix-blend-mode: difference;
}
</style>