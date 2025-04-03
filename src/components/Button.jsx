import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-4 py-1 font-medium border whitespace-nowrap text-sm border-transparent rounded-md shadow-md bg-gray-200'>{name}</div>
  )
}

export default Button