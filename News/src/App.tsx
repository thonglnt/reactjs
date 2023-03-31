// lib
import { ThemeProvider } from 'styled-components'

// themes
import { theme } from '@themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App' />
    </ThemeProvider>
  )
}

export default App
