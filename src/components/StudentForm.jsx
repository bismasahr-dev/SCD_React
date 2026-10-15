import { useState } from 'react'

function StudentForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [semester, setSemester] = useState('')

  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name || !email || !program || !semester) {
      setMessage('Please fill all fields.')
      return
    }

    setMessage('Student added successfully!')

    console.log('Student Name:', name)
    console.log('Email:', email)
    console.log('Program:', program)
    console.log('Semester:', semester)
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h3 className="card-title mb-4">
          Add New Student
        </h3>

        <form onSubmit={handleSubmit}>

          {/* Student Name */}
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

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter student email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          {/* Program */}
          <div className="mb-3">
            <label className="form-label">
              Program
            </label>

            <select
              className="form-select"
              value={program}
              onChange={(event) => setProgram(event.target.value)}
            >
              <option value="">
                Select Program
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

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Student
          </button>

        </form>

        {/* Message */}
        {message && (
          <div className="alert alert-info mt-4">
            {message}
          </div>
        )}

      </div>

    </div>
  )
}

export default StudentForm