import { ref } from 'vue'
import { defineStore } from 'pinia'

export type AppTheme = 'light' | 'dark'
export const LOCAL_STORAGE_THEME_KEY = 'app_theme'

export const useThemeStore = defineStore('theme', () => {
  const defaultTheme =
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme || 'dark'
  const theme = ref<AppTheme>(defaultTheme)

  function switchTheme() {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, switchTheme }
})
