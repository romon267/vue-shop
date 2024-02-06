<script lang="ts" setup>
import { computed, defineProps } from 'vue'

interface Props {
    size?: number
}

const { size } = defineProps<Props>()

const spinnerStyle = computed(() => ({
    width: size ? size + 'px' : '100%',
    height: size ? size + 'px' : '100%'
}))
</script>

<template>
    <div class="spinner" :style="spinnerStyle">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
</template>

<style scoped>
.spinner {
    position: relative;
}

.double-bounce1,
.double-bounce2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 50%;
    opacity: 0.6;
    animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
    animation-delay: -1s;
}

@keyframes sk-bounce {
    0%,
    100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
}
</style>
