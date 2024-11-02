import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Questions from './components/Questions';
import Firstpage from './components/Firstpage'
import Results from './components/Results'


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/results" element={<Results/>}/>
    </Routes>
   </Router>
  )
}

export default App



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//         <Route path='' element={<Home/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='contact' element={<Contact/>}/>
//         <Route path='user/:userid' element={<User/>}/>
//         <Route path='github' element={<Github/>}/>

//       </Route>
//   )
// )

