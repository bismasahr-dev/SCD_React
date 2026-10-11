import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import StudentProfile from './pages/StudentProfile'

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
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/students/:id"
          element={<StudentProfile />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App