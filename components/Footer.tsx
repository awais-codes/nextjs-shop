import Link from 'next/link'
import { FC } from 'types'

import { Button } from './Button'
import { Heading } from './Typography'

export const Footer: FC = () => (
  <footer>
    <section className='bg-theme-main px-5 py-10'>
      <section className='mb-8'>
        <div className='text-center'>
          <Heading level={3}>Subscribe To Get Offers In Your Inbox</Heading>
        </div>
      </section>
      <section className='mb-8'>
        <div className='text-center'>
          <p className='text-xs lg:text-sm text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </div>
      </section>
      <section className='mb-8 flex justify-center'>
        <form method='post'>
          <div className='flex'>
            <input
              type='email'
              name='email'
              placeholder='Your email address...'
              className='w-full max-w-xl text-xs px-2 lg:text-sm'
            />
            <Button>Subscribe</Button>
          </div>
        </form>
      </section>
      <section className='mb-8'>
        <div className='flex justify-center'>
          <ul className='flex flex-col gap-4 list-none text-center text-gray-600 text-xs lg:text-sm md:flex-row md:gap-11'>
            <li className='cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/about'>About</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/shop?category=men'>Men</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/shop?category=women'>Women</Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section className='bg-black px-5 py-7 text-white'>
      <p className='text-xs text-center lg:text-sm'>
        Copyright © 2023 T-Shirts Store | Powered by T-Shirts Store
      </p>
    </section>
  </footer>
)
