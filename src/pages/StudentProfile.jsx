import { useParams, Link } from 'react-router-dom'

function StudentProfile() {

  const { id } = useParams()

  return (

    <div className="container mt-5">

      <div className="card">

        <div className="card-body">

          <h1>Student Profile</h1>

          <hr />

          <p>
            <strong>Student ID:</strong> {id}
          </p>

          <p>
            <strong>Name:</strong> Jane Doe
          </p>

          <p>
            <strong>Program:</strong> Computer Science
          </p>

          <p>
            <strong>Semester:</strong> 2
          </p>

          <p>
            <strong>Email:</strong> student@example.com
          </p>

          <Link
            to="/students"
            className="btn btn-secondary"
          >
            Back to Students
          </Link>

        </div>

      </div>

    </div>

  )
}

export default StudentProfile