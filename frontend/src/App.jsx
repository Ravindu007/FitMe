import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
