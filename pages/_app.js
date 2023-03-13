import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App