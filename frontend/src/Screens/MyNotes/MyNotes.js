import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import './MyNotes.css';
import axios from 'axios';


const MyNotes = () => {

  const [notes, setNotes] = useState([]);

  const fetchNotes = async ()=>{
    const reqData = await axios.get('/api/notes');
    const notes = reqData.data;
    console.log(notes);
    setNotes(notes);
  }

  useEffect(()=>{
    fetchNotes();
  }, []);

  function toggleDescription(e){
    const heading = e.target.parentNode;
    const description = heading.nextElementSibling;
    const bookLogo = heading.querySelector('.book-logo');
    console.log(heading);
    console.log(description);
  if (description.classList.contains("show-note-description")) {
    heading.classList.remove("add-border");
    description.classList.remove("show-note-description");
    bookLogo.innerHTML = "📘";
  } else {
    heading.classList.add("add-border");
    description.classList.add("show-note-description");
    bookLogo.innerHTML = "📖";
  }
  }

  //Function to delete a particular note with it's ID
  const deleteHandler = ()=>{
   console.log("OK");
  }

  return (
    <MainScreen title='Welcome'>
      <button className='create-note-btn h-12 w-fit bg-black text-white text-xl m-2 px-4 py-2 rounded-lg hover:underline' >
        <a href='/'>Create New Note</a>
      </button>

      {
        notes.map((note)=>(
            // Each note is being rendered with data from backend and Frontend
              //Card Component
              <div key={note._id} className='note w-11/12 border-black border-2 p-0 mx-auto my-4' >
                <div className='note-head h-12 flex items-center justify-between bg-neutral-300 px-8' >
                  <h1 className='note-heading w-full ' onClick={toggleDescription}><span className='book-logo'>📘</span>  {note.title}</h1>
                    <div className='modify-btns border-black border-l-2 flex'>
                      <button className='h-9 w-20 bg-black text-white text-xl rounded-md mx-16'>
                        <a href={`/note/${note._id}`}>Edit</a>
                      </button>
                      <button className='h-9 w-20 bg-red-500 text-white text-xl rounded-md' onClick={deleteHandler}>Delete</button>
                    </div>
                </div>
                <div className='note-description' id='note-description'>
                    <h1 className=' w-fit bg-green-500 text-white p-1 rounded-md'>Category - {note.category}</h1><br/>
                    <p>{note.content}</p>
                    <br/><hr/><br/>
                    <p className=' text-gray-400'>-- Created on -Date</p>
                </div>
            </div>
            // End of Card component
        ))
      }

      

    </MainScreen>
  )
}

export default MyNotes;
