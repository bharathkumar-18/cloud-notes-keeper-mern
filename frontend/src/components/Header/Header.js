import React from 'react';
const Header = () => {
  return (
    <div className=' h-12 bg-black w-full flex items-center justify-between text-white p-8 text-xl'>
      <a href='/' className=' w-1/4'>NoteZipper</a>
      <form className=' w-1/2'>
        <input type='text' placeholder='Search your notes' name='search' id='search' className=' w-full rounded-md px-4 py-2' />
      </form>
      <div className=' w-1/4 flex justify-end'>
        <a href='/' className='mr-8'>My notes</a>
        <select name='profile' id='profile' className='bg-inherit hover:cursor-pointer'>
            <option value="Bharath Kumar">Bharath Kumar</option>
            <option value="logout">Logout</option>
        </select>
      </div>
    </div>
  )
}

export default Header
