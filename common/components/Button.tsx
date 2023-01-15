import { FC } from '../types'

export const Button: FC = ({ children }) => (
  <button className='px-6 py-4 bg-black text-white w-fit text-xs font-light lg:text-sm'>
    <span>{children}</span>
  </button>
)
