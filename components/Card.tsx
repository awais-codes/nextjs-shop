import { Heading, SuperText } from 'components/Typography'

export const Card: React.FC<{
  imageSrc: string
  title: string
  superText: string
  priceRange: {
    from: number
    to: number
  }
}> = ({ imageSrc, priceRange, superText, title }) => (
  <div className='inline-block border border-red-700 border-solid'>
    <img src={imageSrc} alt='alt text here' className='object-cover' />
    <div className='px-4 mt-2 flex flex-col gap-y-1'>
      <SuperText>{superText}</SuperText>
      <Heading level={5}>
        <div className='leading-[1.1rem]'>{title}</div>
      </Heading>
      <span className='text-[11px] text-gray-600 font-bold md:text-xs w-fit'>
        <span className='text-[10px] md:text-[11px]'>$</span>
        {priceRange.from} - <span className='text-[10px] md:text-[11px]'>$</span>
        {priceRange.to}
      </span>
    </div>
  </div>
)
