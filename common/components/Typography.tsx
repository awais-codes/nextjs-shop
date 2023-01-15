import { FC } from '../types'

export const H1: FC = ({ children }) => (
  <h1 className='text-3xl md:text-[42px] lg:text-[55px] font-semibold'>{children}</h1>
)

export const H2: FC = ({ children }) => (
  <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>{children}</h2>
)

export const H3: FC = ({ children }) => (
  <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>{children}</h3>
)

export const H4: FC = ({ children }) => (
  <h4 className='text-lg md:text-xl lg:text-2xl font-semibold'>{children}</h4>
)

export const H5: FC = ({ children }) => (
  <h5 className='text-base md:text-lg lg:text-xl font-semibold'>{children}</h5>
)

export const H6: FC = ({ children }) => (
  <h6 className='text-sm md:text-base lg:text-lg font-semibold'>{children}</h6>
)

export const SuperText: FC = ({ children }) => (
  <p className='text-xs text-gray-600 uppercase lg:text-sm'>{children}</p>
)
