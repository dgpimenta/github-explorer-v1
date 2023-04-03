import Logo from '../../assets/githubLogo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <h1>
        GitHub <span>Explorer</span>
      </h1>
    </HeaderContainer>
  )
}
