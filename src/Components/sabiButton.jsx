import React from 'react'

const sabiButton = () => {
  return (
    <button className='bg-[#451253] relative w-[250px] rounded-sm p-2'>
        <div className='absolute top-0 right-3 bg-[#E47C57] w-[2px] h-10 rounded-[100%] -rotate-45 border-t-2 border-r-2 border-[#E47C57] transform'></div>
        <div className='text-white'>Create Bank Account</div>
    </button>
  )
}

export default sabiButton