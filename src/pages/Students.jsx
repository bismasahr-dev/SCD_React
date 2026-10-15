import StudentCard from '../components/StudentCard'
// import StudentForm from '../components/StudentForm'

import StudentForm from '../components/BasicStudentForm'

function Students() {
  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Students
      </h1>

      {/* Student Form */}
      <div className="mb-5">
        <StudentForm/>
   

      </div>

      {/* Existing Students */}
      <h2 className="mb-4">
        Student List
      </h2>

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