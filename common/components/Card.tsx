import { H5 } from './Typography'

export const Card: React.FC<{
  imageSrc: string
  title: string
  superText: string
  priceRange: {
    from: number
    to: number
  }
}> = ({ imageSrc, priceRange, superText, title }) => (
  <div className='inline-block w-32 border border-red-700 border-solid'>
    <img src={imageSrc} alt='alt text here' className='h-auto w-full mb-2' />
    <div className='px-4 leading-none'>
      <p className='text-[10.5px] text-gray-400 uppercase lg:text-sm'>{superText}</p>
      <H5>{title}</H5>
      <span className='text-[11px] text-gray-600 font-bold md:text-xs lg:text-sm'>
        ${priceRange.from}-${priceRange.to}
      </span>
    </div>
  </div>
)
