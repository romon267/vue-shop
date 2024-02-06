<script setup lang="ts">
import AppButton from '@/shared/ui/AppButton.vue'
import Icon from '@/shared/ui/Icon.vue'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher.vue'
</script>
<template>
    <div><h1>Playground</h1></div>
    <AppButton @click="() => console.log('sun!!')" theme="primary" size="m">
        <Icon :style="{ 'margin-right': '10px' }" :size="24" name="sun" />
        <div>Sunny Button :)</div>
    </AppButton>
    <ThemeSwitcher />
</template>
<style></style>
