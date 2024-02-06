import Sun from '@/shared/assets/icons/sun.svg'
import Moon from '@/shared/assets/icons/moon.svg'

export const ICON_PATHS = {
    moon: '/src/shared/assets/icons/moon.svg',
    sun: '/src/shared/assets/icons/sun.svg'
}

export const ICONS = {
    moon: Moon,
    sun: Sun
}

export type IconNames = keyof typeof ICON_PATHS
