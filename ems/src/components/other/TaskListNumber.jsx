import React from 'react'

function TaskListNumber({data}) {
  const tasks = Array.isArray(data?.tasks) ? data.tasks : []

  const counts = tasks.reduce(
    (acc, t) => {
      // Count tasks in exactly one bucket (status should be mutually exclusive)
      if (t?.failed) acc.failed += 1
      else if (t?.completed) acc.completed += 1
      else if (t?.active) acc.active += 1
      else if (t?.newTask) acc.newTask += 1
      return acc
    },
    { newTask: 0, active: 0, completed: 0, failed: 0 },
  )

  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='w-[45%] bg-red-400 py-6 rounded-xl px-9'>
          <h2 className='text-3xl font-samibold'>{counts.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-6 rounded-xl px-9'>
          <h2 className='text-3xl font-samibold'>{counts.active}</h2>
          <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-6 rounded-xl px-9'>
          <h2 className='text-3xl font-samibold'>{counts.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-6 rounded-xl px-9'>
          <h2 className='text-3xl font-samibold'>{counts.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber