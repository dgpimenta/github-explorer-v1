import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 0.4rem;
  padding: 1rem 0.2rem;

  h2 span {
    color: ${(props) => props.theme['green-500']};
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const InputContainer = styled.input`
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: none;

  background: ${(props) => props.theme['gray-100']};
`

export const ButtonContainer = styled.button`
  display: flex;

  padding: 0.5rem;
  border-radius: 0.4rem;
  border: none;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};
`
