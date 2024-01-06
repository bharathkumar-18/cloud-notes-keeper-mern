import React from 'react';
const Header = () => {
  return (
    <header>
      <div className=' h-12 bg-black w-full flex items-center justify-between text-white p-8 text-xl'>
        <a href='/' className=' w-1/4'>NoteZipper</a>
        <form className=' w-1/2'>
          <input type='text' placeholder='Search your notes' name='search' id='search' className=' w-full rounded-md px-4 py-2 text-black' />
        </form>
        <div className=' w-1/4 flex justify-end'>
          <a href='/mynotes' className='mr-8'>My notes</a>
          <select name='profile' id='profile' className='bg-inherit hover:cursor-pointer'>
              <option value="My Profile">My Profile</option>
              <option value="logout">Logout</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
