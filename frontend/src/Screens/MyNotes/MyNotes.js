import React from 'react'
import MainScreen from '../../components/MainScreen'
import './MyNotes.css';
import notesData from '../../data/notesData.js';


const MyNotes = () => {

  function toggleDescription(event){
    const heading = event.target;
    const description = event.target.nextElementSibling;
    console.log(heading);
    console.log(description);
  if (description.classList.contains("show-note-description")) {
    heading.classList.remove("add-border");
    description.classList.remove("show-note-description");
  } else {
    heading.classList.add("add-border");
    description.classList.add("show-note-description");
  }
  }

  return (
    <MainScreen title='Welcome'>
      <button className='create-note-btn h-12 w-fit bg-black text-white text-xl m-2 px-4 py-2 rounded-lg hover:underline' >
        <a href='/'>Create New Note</a>
      </button>

      {
        notesData.map((note)=>(
            // Each note is being rendered with data from backend and Frontend
              //Card Component
              <div key={note._id} className='note w-full border-black border-2 p-0 m-4' onClick={toggleDescription}>
                <div className='note-head h-12 flex items-center justify-between bg-neutral-300 px-8'>
                  <h1 className='note-heading'>{note.title}</h1>
                    <div className='modify-btns'>
                      <button className='h-9 w-20 bg-black text-white text-xl rounded-md mx-16'>Edit</button>
                      <button className='h-9 w-20 bg-red-500 text-white text-xl rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='note-description' id='note-description'>
                    <p>{note.content}</p>
                </div>
            </div>
            // End of Card component
        ))
      }

      

    </MainScreen>
  )
}

export default MyNotes;
