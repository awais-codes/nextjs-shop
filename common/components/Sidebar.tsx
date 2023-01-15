import { Backdrop } from 'common/components/Backdrop'
import { CloseIcon } from 'common/components/Icons'
import { classNames } from 'common/utilities/ui-helpers'
import Link from 'next/link'

import { FC } from '../types'

interface ISidebar {
  routes: {
    label: string
    path: string
  }[]
  open: boolean
  onClose: () => void
}

const Sidebar: FC<ISidebar> = ({ routes, open, onClose }) => (
  <div className='lg:hidden'>
    <Backdrop display={open} />
    <div
      className={classNames(
        'fixed w-[90%] right-0 top-0 bottom-0 border border-solid border-theme-border h-full bg-white transition-transform duration-300 ease-in-out',
        !open ? 'translate-x-full' : '',
        'md:w-full'
      )}>
      <div className='flex justify-between items-center px-4 py-6'>
        <div>Menu</div>
        <div className='cursor-pointer' onClick={onClose}>
          <CloseIcon width={18} height={18} />
        </div>
      </div>
      <ul className='mt-4 list-none bg-theme-main'>
        {routes.map(({ label, path }) => (
          <li
            key={path}
            className='px-4 py-4 border border-solid border-theme-border hover:bg-theme-main-strong cursor-pointer'>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Sidebar
