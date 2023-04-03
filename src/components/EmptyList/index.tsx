import { Clipboard } from 'phosphor-react'
import { EmptyListContainer } from './styles'

export function EmptyList() {
  return (
    <EmptyListContainer>
      <Clipboard size={56} />
      <strong>Você ainda não pesquisou nenhum usuário</strong>
      <p>Digite no campo de pesquisa</p>
    </EmptyListContainer>
  )
}
