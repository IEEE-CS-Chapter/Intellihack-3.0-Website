<template>
        <div>
                <Teleport to="body">
                        <Cursor />
                        <NavigationToggle />
                </Teleport>
                <!-- <ClientOnly>
                        <Tetikus />
                </ClientOnly> -->
                <slot />
        </div>
</template>
<!-- 
<script setup lang="ts">
import { Tetikus } from '@namchee/tetikus'
import '@namchee/tetikus/dist/tetikus.css';
</script> -->