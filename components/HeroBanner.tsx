import { Button } from './Button'

export const HeroBanner: React.FC = () => (
  <div className='py-2'>
    <div className='bg-theme-main flex flex-col md:flex-row md:justify-center md:pl-8'>
      <div className='py-16 md:py-0'>
        <div className='flex flex-col text-center md:h-full md:justify-center md:text-left'>
          <div className='mb-2 md:mb-4'>
            <h6 className='uppercase text-xs text-gray-600 lg:text-sm'>Women</h6>
          </div>
          <div className='mb-4 md:mb-8'>
            <h1 className='text-3xl font-semibold md:text-[42px]'>Slick. Modern. Awesome.</h1>
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
