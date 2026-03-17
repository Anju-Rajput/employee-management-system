import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function AllTask() {
    const [userData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            
        </div>
        <div className=''>
            {(userData ?? []).map(function(elem,idx){
            return (
            
        <div key={idx} className='bg-emerald-500 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='text-lg font-medium w-1/5 bg-white-600'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
            
        </div>)
        })}
        </div>
        
    </div>
  )
}

export default AllTask