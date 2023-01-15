import { Button } from './Button'
import { H1, SuperText } from './Typography'

export const HeroBanner: React.FC = () => (
  <div className='py-2'>
    <div className='bg-theme-main flex flex-col md:flex-row md:justify-center md:pl-8'>
      <div className='py-16 md:py-0'>
        <div className='flex flex-col text-center md:h-full md:justify-center md:text-left'>
          <div className='mb-2 md:mb-4'>
            <SuperText>Women</SuperText>
          </div>
          <div className='mb-4 md:mb-8'>
            <H1>Slick. Modern. Awesome.</H1>
          </div>
          <div className='flex justify-center md:justify-start'>
            <Button>Shop Collection</Button>
          </div>
        </div>
      </div>
      <div className='bg-hero-circle bg-contain bg-no-repeat bg-center pt-4 px-4 flex justify-center'>
        <img
          src='/assets/images/hero-model.png'
          className='w-[70%] h-auto align-middle'
          alt='hero banner model'
        />
      </div>
    </div>
  </div>
)
