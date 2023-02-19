<template>
<button :class="props.flat ? '' : 'filled'">
    <slot />
    <IconSpinner v-if="loading" />
</button>
</template>

<script setup lang="ts">
import IconSpinner from "~icons/gg/spinner-alt"

const props = withDefaults(defineProps<{
    loading?: boolean
    flat?: boolean
}>(), {
    flat: true,
    loading: false
})

</script>


<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color:transparent;
    color: $brandBlue;
    padding: 0.75rem 2rem;
    font-weight: bold;


    &.filled {
        background-color: $brandBlue;
        color: #fff;
    }
}


svg {
    animation: rotate 1s linear infinite;
}
</style>