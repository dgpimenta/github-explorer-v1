import { PlusCircle } from 'phosphor-react'
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  // useEffect,
  useState,
} from 'react'
import { EmptyList } from '../../components/EmptyList'
import { RepositoryItem } from '../../components/RepositoryItem'

import {
  ButtonContainer,
  FormContainer,
  HomeContainer,
  InputContainer,
} from './styles'
import { UserWithoutRepository } from '../../components/UserWithoutRepository'
import { UserNotFound } from '../../components/UserNotFound'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  const [user, setUser] = useState('')
  const [newUser, setNewUser] = useState('')
  const [error, setError] = useState(null)

  const hasNoUser = user.length === 0

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}/repos`)
  //     .then((response) => response.json())
  //     .then((data) => setRepositories(data))
  // }, [user])

  // console.log(repositories)

  const handleCreateNewUser = (event: FormEvent) => {
    event.preventDefault()

    console.log(user)

    fetch(`https://api.github.com/users/${newUser}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw Error('O usuário não existe!')
        }
        return response.json()
      })
      .then((data) => {
        setRepositories(data)
        setError(null)
      })
      .catch((error) => setError(error.message))

    setUser(newUser)
    setNewUser('')
  }

  const handleNewUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewUser(event.target.value)
  }

  const handleNewUserInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Preencher este campo!')
  }

  return (
    <HomeContainer>
      <h1>Projetos postados no GitHub</h1>
      <FormContainer onSubmit={handleCreateNewUser}>
        <InputContainer
          type="text"
          name="user"
          placeholder="Digite o usuário"
          value={newUser}
          onChange={handleNewUserChange}
          onInvalid={handleNewUserInvalid}
          required
          autoComplete="off"
        />
        <ButtonContainer type="submit">
          <PlusCircle size={18} />
        </ButtonContainer>
      </FormContainer>
      <h2>
        Usuário: <span> {`${user}`}</span>
      </h2>

      {hasNoUser ? (
        <EmptyList />
      ) : (
        <ul>
          {!error ? (
            repositories.length === 0 ? (
              <UserWithoutRepository />
            ) : (
              repositories.map((repository) => (
                <RepositoryItem key={repository.name} repository={repository} />
              ))
            )
          ) : (
            <UserNotFound />
          )}
        </ul>
      )}
    </HomeContainer>
  )
}
