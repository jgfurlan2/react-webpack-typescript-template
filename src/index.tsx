import React from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Greetings } from './components/Greetings'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

const ProviderWrapper: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Greetings />
        </ErrorBoundary>

        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<ProviderWrapper />)
