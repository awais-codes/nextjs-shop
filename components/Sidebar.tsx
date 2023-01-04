import { Backdrop } from '@components/Backdrop'
import { CloseIcon } from '@components/Icons'
import Link from 'next/link'
import { classNames } from 'utilities/ui-helpers'

interface ISidebar {
  routes: {
    label: string
    path: string
  }[]
  open: boolean
  onClose: () => void
}

const Sidebar: React.FC<ISidebar> = ({ routes, open, onClose }) => (
  <>
    <Backdrop display={open} />
    <div
      className={classNames(
        'fixed w-[90%] right-0 top-0 bottom-0 border border-solid border-red-700 h-full bg-white transition-transform duration-300 ease-in-out',
        !open ? 'translate-x-full' : '',
        'md:w-full'
      )}>
      <div className='flex justify-between items-center px-4 py-6'>
        <div>Menu</div>
        <div className='cursor-pointer' onClick={onClose}>
          <CloseIcon width={18} height={18} />
        </div>
      </div>
      <ul className='mt-4 list-none'>
        {routes.map(({ label, path }) => (
          <li key={path} className='px-4 py-4 border border-solid border-theme-border'>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export default Sidebar
