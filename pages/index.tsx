import { Card } from 'common/components/Card'
import { HeroBanner } from 'common/components/HeroBanner'
import { H2, SuperText } from 'common/components/Typography'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <HeroBanner />
    {/* featured section */}
    <section className='my-8'>
      <div className='text-center'>
        <SuperText>Summer Collection</SuperText>
        <H2>Popular T-Shirts</H2>
      </div>
      <ul className='grid grid-cols-2 justify-items-center gap-y-4'>
        <li className='w-fit'>
          <Card
            imageSrc='/assets/images/hero-model.png'
            priceRange={{
              from: 1,
              to: 2,
            }}
            superText='women'
            title='Randi for sale'
          />
        </li>
        <li className='w-fit'>
          <Card
            imageSrc='/assets/images/hero-model.png'
            priceRange={{
              from: 1,
              to: 2,
            }}
            superText='women'
            title='Randi for sale'
          />
        </li>
        <li className='w-fit'>
          <Card
            imageSrc='/assets/images/hero-model.png'
            priceRange={{
              from: 1,
              to: 2,
            }}
            superText='women'
            title='Randi for sale'
          />
        </li>
      </ul>
    </section>
  </div>
)

export default Home
