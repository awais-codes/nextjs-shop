import { FC } from '../types'
import { Footer } from './Footer'
import Header from './Header'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
