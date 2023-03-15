import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../lib/globalStyles'

const theme = {
  colors: {
    primary: '#4F4F4F',
    secondary: '#F4F4F4',
    grayed: '#808080', 
    light: '#ffffff',
  },
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    roboto: "'Roboto' , sans-serif",
  }
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App