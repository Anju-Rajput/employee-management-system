function Header(props) {

  const username = props.data ? props.data.firstName : "Admin";

  const logOut = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>
          Hello <br/>
          <span className='text-3xl font-semibold'>{username} 👋</span>
        </h1>

        <button 
        onClick={logOut}
        className='bg-red-500 text-white px-5 py-2 text-lg rounded font-medium'>
        Log Out
        </button>

    </div>
  )
}

export default Header