import { useState } from 'react'

function StudentCard({ name, program, semester }) {

  const [views, setViews] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  function handleView() {
    setViews(views + 1)
  }

  return (
    <div className="student-card">

      <h2>{name}</h2>

      <p>{program}</p>

      <p>Semester {semester}</p>

      <p>Profile Views: {views}</p>

      <button onClick={handleView}>
        View Profile
      </button>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          <p>Email: student@example.com</p>
          <p>Phone: 0300-1234567</p>
        </div>
      )}

    </div>
  )
}

export default StudentCard