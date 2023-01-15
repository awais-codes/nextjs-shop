import { classNames } from 'common/utilities/ui-helpers'

import { FC } from '../types'

export const Backdrop: FC<{ display: boolean }> = ({ display }) => (
  <div
    className={classNames(
      'fixed top-0 left-0 right-0 h-screen bg-black opacity-75 transition duration-500',
      display ? '' : 'hidden'
    )}
  />
)
