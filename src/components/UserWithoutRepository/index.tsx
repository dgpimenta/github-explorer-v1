import { FolderMinus } from 'phosphor-react'
import { UserWithoutRepositoryContainer } from './styles'

export function UserWithoutRepository() {
  return (
    <UserWithoutRepositoryContainer>
      <FolderMinus size={56} />
      <strong>Este usuário não tem repositórios</strong>
      <p>Digite outro usuário no campo de pesquisa</p>
    </UserWithoutRepositoryContainer>
  )
}
