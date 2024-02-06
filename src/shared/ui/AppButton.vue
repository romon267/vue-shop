<script setup lang="ts">
import { type ButtonHTMLAttributes, computed } from 'vue'

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
    loading?: boolean
    size?: 's' | 'm' | 'l'
    theme?: 'primary' | 'outline' | 'clear'
    className?: string
    onClick?: () => void
}

const props = defineProps<Props>()

const classes = computed(() => {
    const baseClasses = ['btn', props.className || '']
    const themeClass = props.theme || 'primary'
    const sizeClass = props.size || 'm'

    return [...baseClasses, themeClass, sizeClass]
})

const handleClick = () => {
    if (props.onClick && !props.disabled && !props.loading) {
        props.onClick()
    }
}
</script>

<template>
    <button
        @click="handleClick"
        :class="classes"
        :disabled="props.disabled || props.loading"
        :form="props.form"
        :type="props.type"
        aria-label="Button"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    border-radius: var(--border-8);
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}

.btn:disabled {
    cursor: not-allowed;
}

.btn.primary:hover {
    background-color: var(--button-hover-color);
    box-shadow: var(--shadow-medium);
}

.btn.primary:active {
    background-color: var(--button-active-color);
}

.primary {
    background-color: var(--button-color);
    color: var(--bg-color);
}

.clear {
    background: none;
    outline: none;
    border: none;
}

.s {
    padding: 4px 8px;
    font: var(--font-s);
}

.m {
    padding: 6px 10px;
    font: var(--font-m);
}

.l {
    padding: 8px 12px;
    font: var(--font-l);
}
</style>
