<script setup lang="ts">
import { computed } from 'vue'
import { type RouterLinkProps } from 'vue-router'

interface AppLinkProps extends RouterLinkProps {
    activeClass?: string
    exactActiveClass?: string
}

const props = defineProps<AppLinkProps>()

const computedActiveClass = computed(() => props.activeClass || 'router-link-active')
const computedExactActiveClass = computed(
    () => props.exactActiveClass || 'router-link-exact-active'
)
</script>

<template>
    <router-link
        :to="to"
        :active-class="computedActiveClass"
        :exact-active-class="computedExactActiveClass"
        class="app-link"
    >
        <slot></slot>
    </router-link>
</template>

/* AppLink.vue */
<style scoped lang="scss">
.app-link {
    position: relative;
    font-family: var(--font-family-main);
    font-size: var(--font-size-m);
    text-decoration: none;
    color: var(--primary-color);
    padding: var(--spacing-small) var(--spacing-medium);
    overflow: hidden; /* Hide the pseudo-element overflow */
    transition:
        color 0.3s ease,
        transform 0.3s ease;
}

.app-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
}

.app-link:hover {
    color: var(--secondary-color);
    transform: translateY(-2px);
}

.app-link:active::after {
    width: 100%;
}

.app-link.router-link-active::after,
.app-link.router-link-exact-active::after {
    width: 100%;
}

/* Responsive styling */
@media (max-width: 768px) {
    .app-link {
        font-size: var(--font-size-s);
        padding: var(--spacing-small);
    }
}
</style>
