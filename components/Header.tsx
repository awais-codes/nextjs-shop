import { BarsIcon } from 'components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FC } from 'types'

import Sidebar from './Sidebar'

const Header: FC = () => {
  const [sebardOpen, setSidebarOpen] = useState(false)

  return (
    <header>
      <div className='flex justify-between items-center'>
        <div>
          <Link href={'/'}>
            <Image
              className='cursor-pointer'
              src='/assets/images/logo.png'
              alt='Logo'
              width={119}
              height={54}
            />
          </Link>
        </div>
        <div>
          <BarsIcon
            onClick={() => setSidebarOpen(true)}
            width={20}
            height={20}
            className='cursor-pointer text-lg'
          />
        </div>
      </div>
      <Sidebar
        open={sebardOpen}
        onClose={() => setSidebarOpen(false)}
        routes={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Contact', path: '/contact' },
        ]}
      />
    </header>
  )
}

export default Header
