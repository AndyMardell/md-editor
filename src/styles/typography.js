import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  h1 {
    font-size: 1.7em;
    font-weight: 600;
  }

  .tag {
    background-color: #0C0C0D;
    border: 1px solid #2F2E2E;
    color: #8C8C8C;
    letter-spacing: normal;
    border-radius: 100px;
    font-size: 0.9em;
    padding: 0 10px 0 15px;
    display: inline-block;
  }

  button {
    color: #CCCBCB;
  }
`

export default Typography
