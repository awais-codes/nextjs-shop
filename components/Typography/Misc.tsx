import { FC } from 'types'

export const SuperText: FC = ({ children }) => (
  <p className='text-xs text-gray-600 uppercase lg:text-sm'>{children}</p>
)
