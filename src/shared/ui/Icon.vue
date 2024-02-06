<script lang="ts" setup>
import { computed } from 'vue'
import { type IconNames, ICONS } from '@/shared/config/icon-paths'

interface Props {
    name: IconNames
    size: number
    color?: string
}

const props = defineProps<Props>()

const iconComponent = computed(() => ICONS[props.name])
</script>

<template>
    <component
        :is="iconComponent"
        :style="{ width: `${size}px`, height: `${size}px`, fill: color }"
        :key="name"
    />
</template>
