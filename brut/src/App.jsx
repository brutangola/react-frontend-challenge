import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import Perfil from './pages/Perfil'
import NewVideo from './pages/NewVideo';
import Search from './pages/Search';
import View from './pages/View';



export default function App() {
  return (

    <div>

      <Router>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/HomePage' element={<HomePage />}></Route>
          <Route path='/Perfil' element={<Perfil/>}></Route>
          <Route path='/UploadVideo' element={<NewVideo/>}></Route>
          <Route path='/Search' element={<Search/>}></Route>
          <Route path='/View' element={<View/>}></Route>
        </Routes>

      </Router>

    </div>

  )
}


