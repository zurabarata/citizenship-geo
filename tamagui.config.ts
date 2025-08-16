import { config } from '@tamagui/config/v2'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui({
    ...config,
    defaultTheme: 'light',
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends AppConfig { }
}

export default tamaguiConfig
