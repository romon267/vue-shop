<script setup lang="ts">
import AppButton from '@/shared/ui/AppButton.vue'
import { useThemeStore } from '@/shared/lib/theme-store/theme'
import Icon from '@/shared/ui/Icon.vue'

const themeStore = useThemeStore()
</script>

<template>
    <AppButton
        id="theme-toggle"
        :class="`theme-toggle`"
        @click="themeStore.switchTheme"
        theme="clear"
    >
        <Icon :size="24" :name="themeStore.theme === 'light' ? 'moon' : 'sun'" />
    </AppButton>
</template>

<style scoped lang="scss"></style>
