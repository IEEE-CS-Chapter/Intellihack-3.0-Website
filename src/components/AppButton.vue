<template>
    <button v-if="!props.isLink" v-bind="$attrs" class="button">
        <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">
                <slot />
            </span>
        </span>
    </button>
    <a v-bind="$attrs" class="button" v-else>
        <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">
                <slot />
            </span>
        </span>
    </a>
</template>

<script setup lang="ts">
const props = defineProps<{
    isLink?: boolean;
}>()
</script>

<style scoped lang="scss">
.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 0.5rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
}

.button::before,
.button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 2px solid $brandBlue;
    transition: all .15s ease;
}

.button::before {
    top: 0;
    border-bottom-width: 0;
}

.button::after {
    bottom: 0;
    border-top-width: 0;
}

.button:active,
.button:focus {
    outline: none;
}

.button:active::before,
.button:active::after {
    right: 3px;
    left: 3px;
}

.button:active::before {
    top: 3px;
}

.button:active::after {
    bottom: 3px;
}

.button_lg {
    position: relative;
    display: block;
    padding: 0.5rem 2rem;
    color: $brandBlue;
    background-color: transparent;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;


    @include mq(md) {
        padding: 0.6rem 2.4rem;
    }

    @include mq(lg) {
        padding: 0.7rem 2.6rem;
    }

    @include mq(xl) {
        padding: 0.75rem 3rem;
    }
}

.button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
}

.button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
}

.button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: $brandBlue;
    transform: skew(-15deg);
    transition: all .2s ease;
}

.button_text {
    position: relative;
}

.button:hover {
    color: #0f1923;
}

.button:hover .button_sl {
    width: calc(100% + 15px);
}



.button:hover .button_lg::after {
    background-color: #fff;
}


.button:hover .button_lg {
    color: #fff;
}
</style>