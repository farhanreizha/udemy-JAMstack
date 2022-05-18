import Logo from '@components/logo'
import { container, title } from './header'

const Header = () => (
  <header css={container}>
    <Logo />
    <h1 css={title}>devlog</h1>
  </header>
)
export default Header
