import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import StudentManager from './components/StudentManager'

import Home from './pages/Home'
import Students from './pages/Students'


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/StudentsManager"
          element={<StudentManager/>}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App