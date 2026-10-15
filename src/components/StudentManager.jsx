
import { useState } from 'react'

function StudentManager() {

  const [students, setStudents] = useState([
    {
      name: 'Ali',
      department: 'Computer Science',
      semester: '5'
    },
    {
      name: 'Sara',
      department: 'Software Engineering',
      semester: '6'
    },
    {
      name: 'Ahmed',
      department: 'Information Technology',
      semester: '4'
    }
  ])

  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [semester, setSemester] = useState('')

  function handleAddStudent(event) {

    event.preventDefault()

    if (!name || !department || !semester) {
      return
    }

    const newStudent = {
      name: name,
      department: department,
      semester: semester
    }

    setStudents([
      ...students,
      newStudent
    ])

    setName('')
    setDepartment('')
    setSemester('')
  }

  function handleRemoveStudent(indexToRemove) {

    const updatedStudents = students.filter(
      (student, index) => index !== indexToRemove
    )

    setStudents(updatedStudents)
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body p-4">

        <h2 className="mb-4">
          Student Manager
        </h2>


        {/* Add Student Form */}

        <form onSubmit={handleAddStudent}>

          {/* Name */}

          <div className="mb-3">

            <label className="form-label">
              Student Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter student name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

          </div>


          {/* Department */}

          <div className="mb-3">

            <label className="form-label">
              Department
            </label>

            <select
              className="form-select"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >

              <option value="">
                Select Department
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Software Engineering">
                Software Engineering
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

            </select>

          </div>


          {/* Semester */}

          <div className="mb-3">

            <label className="form-label">
              Semester
            </label>

            <select
              className="form-select"
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
            >

              <option value="">
                Select Semester
              </option>

              <option value="1">
                Semester 1
              </option>

              <option value="2">
                Semester 2
              </option>

              <option value="3">
                Semester 3
              </option>

              <option value="4">
                Semester 4
              </option>

              <option value="5">
                Semester 5
              </option>

              <option value="6">
                Semester 6
              </option>

              <option value="7">
                Semester 7
              </option>

              <option value="8">
                Semester 8
              </option>

            </select>

          </div>


          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Student
          </button>

        </form>


        {/* Student List */}

        <h4 className="mt-5 mb-3">
          Students
        </h4>


        {students.length === 0 ? (

          <div className="alert alert-warning">
            No students available.
          </div>

        ) : (

          <div className="row">

            {students.map((student, index) => (

              <div
                className="col-md-6 mb-3"
                key={index}
              >

                <div className="card h-100">

                  <div className="card-body">

                    <h5 className="card-title">
                      {student.name}
                    </h5>

                    <p className="card-text mb-1">
                      <strong>Department:</strong>{' '}
                      {student.department}
                    </p>

                    <p className="card-text">
                      <strong>Semester:</strong>{' '}
                      {student.semester}
                    </p>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveStudent(index)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default StudentManager
