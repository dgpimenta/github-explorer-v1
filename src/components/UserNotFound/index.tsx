import { FolderSimpleUser } from 'phosphor-react'
import { UserNotFoundContainer } from './styles'

export function UserNotFound() {
  return (
    <UserNotFoundContainer>
      <FolderSimpleUser size={56} />
      <strong>O usuário digitado não existe!</strong>
      <p>Digite outro usuário no campo de pesquisa</p>
    </UserNotFoundContainer>
  )
}
