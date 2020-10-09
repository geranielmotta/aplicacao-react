import React from 'react'
import StoreProvider from 'store'
import { ThemeProvider } from '@material-ui/styles'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './assets/scss/index.scss'
import materialTheme from 'styles/materialTheme'
import ViewsRouter from './views/ViewsRouter'

const theme = materialTheme()

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <ViewsRouter />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
