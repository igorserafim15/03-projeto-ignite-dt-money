import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  )
}

