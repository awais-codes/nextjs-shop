import Header from '@components/Header'
import { HeroBanner } from '@components/HeroBanner'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <Header />
    <HeroBanner />
  </div>
)

export default Home
