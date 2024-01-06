import React from 'react'
import './MainScreen.css'
const MainScreen = ({title, children}) => {
  return (
    <div className='mainback'>
      <div className='page w-full'>
        {
            title && (
            <>
                <h1 className='heading text-8xl m-2'>{title}</h1>
                <hr className='m-2'/>
            </>

        )}
        {children}
      </div>
    </div>
  )
}

export default MainScreen
