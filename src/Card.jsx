import React from 'react'

function Card({text , amount}) {
  return (

    <div className='flex flex-row'>
    <div className='  h-28 w-64 rounded-md flex-col mr-2   m-2 bg-white'>
    <div className='w-4 h-5'>

    </div>
    
    <div className='flex justify-center pl-4 font-medium ' >{text}</div>
    <div className='flex justify-center pr-1 font-bold'>{amount}</div>

    </div>
      
    </div>
  )
}

export default Card
