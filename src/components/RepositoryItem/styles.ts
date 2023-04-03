import styled from 'styled-components'

export const ItemContainer = styled.div`
  li {
    list-style: none;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    strong {
      font-size: 1.4rem;
      color: ${(props) => props.theme['gray-400']};
    }

    p {
      color: ${(props) => props.theme['gray-500']};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['green-300']};
    }

    a:hover {
      color: ${(props) => props.theme['green-500']};
    }

    @media (max-width: 540px) {
      strong {
        font-size: 1.2rem;
      }
    }
  }
`
