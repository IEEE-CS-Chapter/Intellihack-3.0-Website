<template>
    <div id="scroll-reminder">

    </div>
</template>

<script setup lang="ts"></script>


<style lang="scss" scoped>
$colorBg: #222a30;
$colorOutline: #ffffff;
$colorOutlineFade: #4e5559;

$widthMouse: 26px;
$heightMouse: 44px;
$borderMouse: 6px;

$posMouse: 4px;
$posText: 1px;

$sizeTrackball: 5px;
$posTrackball: 10px;
$shrinkTrackball: 0.4;

$animDuration: 5s;

@mixin bgGradient {
    // background:
    //     $colorOutlineFade linear-gradient(transparent 0%,
    //         transparent 50%,
    //         $colorOutline 50%,
    //         $colorOutline 100%);
    background-color: transparent;
}

#scroll-reminder {
    @include bgGradient;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: $widthMouse;
    height: $heightMouse;
    border-radius: 100px;
    background-size: 100% 200%;
    animation:
        colorSlide $animDuration linear infinite,
        nudgeMouse $animDuration linear infinite;

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }

    &:before {
        width: $widthMouse - $borderMouse;
        height: $heightMouse - $borderMouse;
        background-color: $colorBg;
        border-radius: 100px;
    }

    &:after {
        background-color: $colorOutline;
        width: $sizeTrackball;
        height: $sizeTrackball;
        border-radius: 100%;
        animation: trackBallSlide $animDuration linear infinite;
    }


    @include mq(lg) {
        bottom: 4rem;
    }
}



@keyframes colorSlide {
    0% {
        background-position: 0% 100%;
    }

    20% {
        background-position: 0% 0%;
    }

    21% {
        background-color: $colorOutlineFade;
    }

    29.99% {
        background-color: $colorOutline;
        background-position: 0% 0%;
    }

    30% {
        background-color: $colorOutlineFade;
        background-position: 0% 100%;
    }

    50% {
        background-position: 0% 0%;
    }

    51% {
        background-color: $colorOutlineFade;
    }

    59% {
        background-color: $colorOutline;
        background-position: 0% 0%;
    }

    60% {
        background-color: $colorOutlineFade;
        background-position: 0% 100%;
    }

    80% {
        background-position: 0% 0%;
    }

    81% {
        background-color: $colorOutlineFade;
    }

    90%,
    100% {
        background-color: $colorOutline;
    }
}

@keyframes trackBallSlide {
    0% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }

    6% {
        opacity: 1;
        transform: scale(0.9) translateY(math.div($posTrackball, 4));
    }

    14% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY($posTrackball*2);
    }

    15%,
    19% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }

    28%,
    29.99% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }

    30% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }

    36% {
        opacity: 1;
        transform: scale(0.9) translateY(math.div($posTrackball, 4));
    }

    44% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY($posTrackball*2);
    }

    45%,
    49% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }

    58%,
    59.99% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }

    60% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }

    66% {
        opacity: 1;
        transform: scale(0.9) translateY(math.div($posTrackball, 4));
    }

    74% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY($posTrackball*2);
    }

    75%,
    79% {
        opacity: 0;
        transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }

    88%,
    100% {
        opacity: 1;
        transform: scale(1) translateY(-$posTrackball);
    }
}

@keyframes nudgeMouse {
    0% {
        transform: translateY(0) translateX(-50%);
    }

    20% {
        transform: translateY($posMouse) translateX(-50%);
    }

    30% {
        transform: translateY(0) translateX(-50%);
    }

    50% {
        transform: translateY($posMouse) translateX(-50%);
    }

    60% {
        transform: translateY(0) translateX(-50%);
    }

    80% {
        transform: translateY($posMouse) translateX(-50%);
    }

    90% {
        transform: translateY(0) translateX(-50%);
    }

    100% {
        transform: translateY($posMouse) translateX(-50%);
    }
}

@keyframes nudgeText {
    0% {
        transform: translateY(0);
    }

    20% {
        transform: translateY($posText);
    }

    30% {
        transform: translateY(0);
    }

    50% {
        transform: translateY($posText);
    }

    60% {
        transform: translateY(0);
    }

    80% {
        transform: translateY($posText);
    }

    90% {
        transform: translateY(0);
    }
}

@keyframes colorText {
    21% {
        color: $colorOutlineFade;
    }

    30% {
        color: $colorOutline;
    }

    51% {
        color: $colorOutlineFade;
    }

    60% {
        color: $colorOutline;
    }

    81% {
        color: $colorOutlineFade;
    }

    90% {
        color: $colorOutline;
    }
}
</style>