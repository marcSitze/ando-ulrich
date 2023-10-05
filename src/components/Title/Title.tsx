import React, { ComponentProps } from 'react'

type hProps = ComponentProps<"h1" | "h2" | "h3">
interface TitleProps extends hProps {
  title: string
}

const Title = ({ title, ...rest }: TitleProps) => {
  return (
    <h3 className='text-primary ' {...rest}>{title}</h3>
  )
}

export default Title