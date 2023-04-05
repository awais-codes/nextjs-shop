import { FC } from 'types'

const baseHeadingStyles = 'font-semibold'

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const sizeMap = {
  1: 'text-3xl md:text-4xl lg:text-5xl',
  2: 'text-2xl md:text-3xl lg:text-4xl',
  3: 'text-xl md:text-2xl lg:text-3xl',
  4: 'text-lg md:text-xl lg:text-2xl',
  5: 'text-base md:text-lg lg:text-xl',
  6: 'text-sm md:text-base lg:text-lg',
}

export const Heading: FC<HeadingProps> = ({ level, children }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements

  const sizeClassName = sizeMap[level]

  return <TagName className={`${sizeClassName} ${baseHeadingStyles}`}>{children}</TagName>
}
