<script setup lang="ts">
import { useThemeStore } from '@/shared/lib/theme-store/theme'
import NavHeader from '@/widgets/NavHeader.vue'

const themeStore = useThemeStore()
</script>

<template>
    <main :class="['app', themeStore.theme]">
        <NavHeader />
        <router-view></router-view>
    </main>
</template>

<style scoped></style>
