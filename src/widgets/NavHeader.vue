<script setup lang="ts">
import AppLink from '@/shared/ui/AppLink.vue'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher.vue'
import { routesPaths } from '@/app/lib/router'
</script>

<template>
    <header class="header-wrapper">
        <nav aria-label="Main navigation" class="nav-wrapper">
            <ul class="nav-links">
                <AppLink :to="routesPaths.home">
                    <li>Home</li>
                </AppLink>
                <AppLink :to="routesPaths.playground">
                    <li>Playground</li>
                </AppLink>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
.header-wrapper {
    width: 100%;
    height: var(--navbar-height);
    background: var(--navbar-bg-color);
    display: flex;
    align-items: center;
    padding: var(--spacing-small) var(--spacing-medium);
    justify-content: flex-end;
}

.nav-wrapper {
    width: auto;
}

.nav-links {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-medium);
    align-items: center;
}
</style>
