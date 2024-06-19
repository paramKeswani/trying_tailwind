import React from 'react'

function Item({name , children}) {
  return (
    <div>
    <div className='h-12 w-36  flex flex-row justify-start hover:bg-sky-400'>
<div className='flex flex-row justify-start  w-4/5'>
<div className='w-3'></div>
<div className='mt-3'>
        {children}
    </div>

    <div className='w-3'></div>
    

<div className='text-white mt-2 invisible  md:visible '> {name} </div>
</div>
    
    </div>
      
    </div>
  )
}

export default Item
