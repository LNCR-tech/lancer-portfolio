import useTheme from './useTheme'

export default function useThreeTheme() {
  const { isDark } = useTheme()

  if (isDark) {
    return {
      accentColor: '#00d4ff',
      particleColor: '#00d4ff',
      emissiveColor: '#00d4ff',
      bgOpacity: 0.0
    }
  }

  return {
    accentColor: '#0066cc',
    particleColor: '#0066cc',
    emissiveColor: '#003d99',
    bgOpacity: 0.0
  }
}
