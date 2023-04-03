import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  span {
    color: ${(props) => props.theme['green-300']};
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    font-size: 0.8rem;
    margin-bottom: 2rem;
  }
`
