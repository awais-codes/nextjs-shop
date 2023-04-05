import { Card } from 'components/Card'
import { HeroBanner } from 'components/HeroBanner'
import { Heading, SuperText } from 'components/Typography'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <HeroBanner />
    {/* featured section */}
    <section className='my-8'>
      <div className='text-center my-4'>
        <SuperText>Summer Collection</SuperText>
        <Heading level={2}>Popular T-Shirts</Heading>
      </div>
      <ul className='grid grid-cols-2 justify-items-center gap-y-4 md:grid-cols-3 md:gap-y-10 lg:grid-cols-4'>
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
