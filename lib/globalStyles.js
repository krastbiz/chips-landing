import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Vela Sans Med';
    src: url('/static/fonts/VelaSans-Medium.woff2') format('woff2'),
         url('/static/fonts/VelaSans-Medium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Vela Sans';
    src: url('/static/fonts/VelaSans-Regular.woff2') format('woff2'),
         url('/static/fonts/VelaSans-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Vela Sans Light';
    src: url('/static/fonts/VelaSans-Light.woff2') format('woff2'),
         url('/static/fonts/VelaSans-Light.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  html {
    scrollbar-width: none; /* Для Firefox */
    -ms-overflow-style: none; /* Для IE и Edge */
}

body::-webkit-scrollbar {
    display: none; /* Для Chrome, Safari и Opera */
}

  body {
    font-family: 'Vela Sans', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.base};
    text-decoration: none;
    &:hover {
      color: #6cb929;
      text-decoration: none;
  }
  }
`

export { GlobalStyle }
