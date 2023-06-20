import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { HeroBanner } from 'components/HeroBanner'
import { Heading, SuperText } from 'components/Typography'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <div>
    <HeroBanner />
    {/* featured section */}
    <section className='my-8 mx-auto max-w-6xl'>
      <div className='text-center my-4'>
        <SuperText>Summer Collection</SuperText>
        <Heading level={2}>Popular T-Shirts</Heading>
      </div>
      <div className='lg:my-0 lg:mx-auto'>
        <ul className='grid grid-cols-2 justify-items-center gap-x-3 gap-y-8 md:grid-cols-3 md:gap-y-10 md:gap-x-4 lg:grid-cols-4 '>
          {new Array(8).fill(0).map((_, index) => (
            <li key={index}>
              <Card
                imageSrc='/assets/images/hero-model.png'
                priceRange={{
                  from: 1,
                  to: 2,
                }}
                superText='women'
                title='T-Shirt Name 10'
              />
            </li>
          ))}
        </ul>
      </div>
      <section className='my-8 mx-auto max-w-6xl'>
        <div className='my-0 mx-auto flex flex-col md:flex-row md:gap-x-4'>
          <div className='flex flex-col'>
            <div className='pb-6'>
              <img
                src='/assets/images/collection.jpg'
                className='object-cover'
                alt='boy looking down pose'
              />
            </div>
            <div className='flex flex-col text-center items-center px-6'>
              <div className='mb-1'>
                <SuperText>Men</SuperText>
              </div>
              <div className='mb-2'>
                <Heading level={2}>
                  <span className='leading-none'>The base collection - Ideal every day.</span>
                </Heading>
              </div>
              <Button>Shop Now</Button>
            </div>
          </div>

          <div>
            <img
              src='/assets/images/collection.jpg'
              className='object-cover'
              alt='boy looking down pose'
            />
          </div>
        </div>
        <div></div>
      </section>
    </section>
  </div>
)

export default Home
