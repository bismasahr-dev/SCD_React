import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Student Portal
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/students">
            Students
          </Link>

          <Link className="nav-link" to="/StudentsManager">
            StudentsManager
          </Link>

        </div>

      </div>

    </nav>

  )
}

export default Navbar