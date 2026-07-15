// import './App.css'
import './index.css'
import Home from './components/Home'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp'

function App() {
  

  return (
    <>
      <Home/>

      <Routes>
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
      {/* <SignUp/> */}

      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
      
    </>
  )
}

export default App
