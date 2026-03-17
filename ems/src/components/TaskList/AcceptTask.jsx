import React from 'react'

function AcceptTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between item-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className=' text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='flex justify-content mt-4 '>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-rose-600 hover:bg-rose-700 text-white py-1 px-2 text-sm rounded'>Mark as Failed</button>
        </div>

       </div>
  )
}

export default AcceptTask