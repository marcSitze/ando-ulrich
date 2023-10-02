import React from 'react'

const Title = ({ title, ...rest }: { title: string }) => {
  return (
    <h3 className='text-primary' {...rest}>{title}</h3>
  )
}

export default Title