import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

function CreateTask() {

    const [userData,setUserData]=useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault();
        // Handle form submission logic here

        const task = {
            taskTitle,
            taskDate,
            taskDescription,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        }

        const data = Array.isArray(userData) ? [...userData] : []

        const updated = data.map((elem) => {
            if (asignTo === elem.firstName) {
                const nextTasks = Array.isArray(elem.tasks) ? [...elem.tasks, task] : [task]
                const taskNumbers = elem.taskNumbers ?? { newTask: 0, active: 0, completed: 0, failed: 0 }
                return {
                    ...elem,
                    tasks: nextTasks,
                    taskNumbers: { ...taskNumbers, newTask: (taskNumbers.newTask ?? 0) + 1 },
                }
            }
            return elem
        })

        setUserData(updated)
        setTaskTitle('')
        setAsignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        
    };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex w-full flex-wrap items-start justify-between'>
                <div className='w-1/2'>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    type="text" placeholder='Make a UI design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>

                    <div>
                     <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                     <input
                     value={taskDate}
                     onChange={(e)=>{
                     setTaskDate(e.target.value)
                     }} 
                     type="date" name="" id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
               
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                    <input 
                    value={asignTo}
                    onChange={(e)=>{
                        setAsignTo(e.target.value)
                    }}
                    type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
                
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }} 
                    type="text" placeholder='design, dev, etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>

                </div>

                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    name="" id="" cols={30} rows={10} className='w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
        
            </form>
        </div>
  )
}

export default CreateTask