import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['green-500']};   
        border-radius: 0.4rem;
        padding: 0.4rem;        
    }

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};

        width: 75%;
        margin: auto;

        @media (max-width: 540px) {
            width: 85%;
        }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
