import LandingPage from './Screens/LandingPage/LandingPage';
import MyNotes from './Screens/MyNotes/MyNotes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Header/>
        <main className=' w-full'>
          <Routes>
            <Route path='/' Component={LandingPage} />
            <Route path='/mynotes' Component={MyNotes} />
          </Routes>
        </main>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
