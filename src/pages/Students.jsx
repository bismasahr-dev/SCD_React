import StudentCard from '../components/StudentCard'

function Students() {
  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Students</h1>

        <button className="btn btn-primary">
          Add New Student
        </button>
      </div>

      <div className="row">

        {/* Student 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={101}
            name="Jane Doe"
            program="Computer Science"
            semester={2}
          />
        </div>

        {/* Student 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={102}
            name="Mary Doe"
            program="Software Engineering"
            semester={4}
          />
        </div>

        {/* Student 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={103}
            name="Gant Doe"
            program="Computer Science"
            semester={3}
          />
        </div>

        {/* Student 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={104}
            name="Amm Doe"
            program="Information Technology"
            semester={2}
          />
        </div>

      </div>

    </div>
  )
}

export default Students