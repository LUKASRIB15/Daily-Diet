import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/theme/defaultTheme'
import { Routes } from './src/routes'

export default function App() {
  const [hasLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      {hasLoaded ? <Routes /> : <ActivityIndicator />}
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
