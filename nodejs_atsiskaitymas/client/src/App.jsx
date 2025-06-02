import { Routes, Route } from 'react-router';
import MainOutlet from './components/outlets/MainOutlet';
import Home from './pages/Home'
import AllBooks from './pages/AllBooks';
import SpecificBook from './pages/SpecificBook'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='' element={<MainOutlet/>}>
          <Route index element={<Home />}/>
          <Route path='/books' element={<AllBooks/>}/>
          <Route path='/books/:_id' element={<SpecificBook/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
