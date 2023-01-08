import { Footer } from '@components/Footer'
import Header from '@components/Header'
import { HeroBanner } from '@components/HeroBanner'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <Header />
    <HeroBanner />
    <Footer />
  </div>
)

export default Home
