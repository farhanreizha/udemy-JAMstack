import Logo from '@components/logo'
import { container, title, postTitle } from './styles'

type headerProps = {
  pageTitle?: string
}

const InternalTitle = ({ pageTitle }: { pageTitle: string }) => (
  <h1 css={postTitle}>{pageTitle}</h1>
)

const Header = ({ pageTitle }: headerProps) => (
  <header css={container}>
    {typeof pageTitle !== 'undefined' ? (
      <InternalTitle pageTitle={pageTitle} />
    ) : (
      <>
        <Logo />
        <h1 css={title}>devlog</h1>
      </>
    )}
  </header>
)
export default Header
