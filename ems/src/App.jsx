import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'

function App() {
 const [user, setUser] = useState(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (!loggedInUser) return null
  try {
    const parsed = JSON.parse(loggedInUser)
    return parsed?.role ?? null
  } catch {
    return null
  }
 })

 const [loggedInUserData, setLoggedInUserData] = useState(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (!loggedInUser) return null
  try {
    const parsed = JSON.parse(loggedInUser)
    const data = parsed?.data ?? null
    return data && typeof data === 'object' ? data : null
  } catch {
    return null
  }
 })

 const [userData] = useContext(AuthContext)
 
 
 const handleLogin=(email,password)=>{
  if(email === 'admin@gmail.com' && password === '123'){
    setUser('admin')
    setLoggedInUserData(null)
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: null }))
  }
  else if(Array.isArray(userData)){
    const employee = userData.find((e) => email === e.email && e.password === password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    } else {
      alert('Invalid Credentials')
    }
    
  }
  else{
    alert('Invalid Credentials')
  }

 }
   
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={(loggedInUserData)}/>:null)}
    </>
  )
}

export default App