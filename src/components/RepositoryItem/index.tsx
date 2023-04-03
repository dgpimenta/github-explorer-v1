import { ItemContainer } from './styles'

interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <ItemContainer>
      <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url} target="_blank" rel="noreferrer">
          Acessar repositório
        </a>
      </li>
    </ItemContainer>
  )
}
