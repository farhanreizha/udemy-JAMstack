import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'

const Page = () => (
  <>
    <Head>
      <title>All about NextJS✨</title>
    </Head>

    <main>
      <Header />
      <Navigation />
    </main>
  </>
)

export default Page
