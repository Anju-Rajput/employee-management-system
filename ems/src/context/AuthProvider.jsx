import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext'

function AuthProvider({children}) {
    
    const [userData, setUserData] = useState(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        const list = Array.isArray(employees) ? employees : []

        // Normalize older localStorage shapes to prevent runtime crashes.
        // - Some versions used `taskCounts` instead of `taskNumbers`.
        // - Ensure `taskNumbers` always exists.
        return list.map((emp) => {
            if (!emp || typeof emp !== 'object') return emp
            const tasks = Array.isArray(emp.tasks) ? emp.tasks : []

            const taskNumbers = tasks.reduce(
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

            return { ...emp, taskNumbers, tasks }
        })
    })

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider