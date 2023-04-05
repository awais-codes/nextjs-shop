import { FC } from 'types'
import { classNames } from 'utilities/ui-helpers'

export const Backdrop: FC<{ display: boolean }> = ({ display }) => (
  <div
    className={classNames(
      'fixed top-0 left-0 right-0 h-screen bg-black opacity-75 transition duration-500',
      display ? '' : 'hidden'
    )}
  />
)
