import React, { useContext, useMemo } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthContext'

function EmployeeDashboard(props) {
  const [employees] = useContext(AuthContext) ?? []

  const employee = useMemo(() => {
    const current = props.data
    if (!current || !Array.isArray(employees)) return current
    return (
      employees.find((e) => e?.id === current.id || e?.email === current.email) ?? current
    )
  }, [employees, props.data])

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={employee} changeUser={props.changeUser}/>
        <TaskListNumber data={employee}/>
        <TaskList data={employee}/>
    </div>
  )
}

export default EmployeeDashboard