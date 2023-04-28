import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    &:hover {
      color #77DDE7;
      text-decoration: none;
  }
  }
`

export { GlobalStyle }