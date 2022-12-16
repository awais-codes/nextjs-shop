import { BarsIcon } from '@components/Icons'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => (
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
        <BarsIcon width={20} height={20} className='cursor-pointer text-lg' />
      </div>
    </div>
  </header>
)

export default Header
