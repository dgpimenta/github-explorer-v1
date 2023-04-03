import styled from 'styled-components'

export const EmptyListContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme['gray-500']};
    margin-top: 0.3rem;
  }
`
