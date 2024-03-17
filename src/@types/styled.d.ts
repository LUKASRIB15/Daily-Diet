import 'styled-components/native'
import { defaultTheme } from '../theme/defaultTheme'

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme

  export interface DefaultTheme extends ThemeType {}
}
