import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const Global = createGlobalStyle`
  ${normalize()}

  html, body {
    background: #191A1A;
    color: #CCCBCB;
    font-size: 20px;
    font-family: 'IBM Plex Mono', monospace;
    tab-size: 1.2em;
    line-height: 1.85;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: rgba(255, 255, 255, 0.1);
    padding: 50px;
  }
`

export default Global
