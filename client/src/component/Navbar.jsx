import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-500 m-0 h-14'>
    <nav className='flex justify-center items-center h-full'>
        <div className='flex justify-between items-center w-full max-w-4xl'>
            <div className='text-white font-bold text-3xl'>
                Crud App
            </div>
            <ul className='flex gap-4 items-center'>
                <li>
                    <Link to={"/"} className='linkcus' >Home</Link>
                </li>
                <li>
                    <Link to={"/add"} className='linkcus'>Add User</Link>
                </li>
                <li>
                    {/* <Link to={"/edit"} className='linkcus'>Edit User</Link> */}
                </li>
            </ul>
        </div>
    </nav>
</div>


  )
}

export default Navbar
