
import { useState } from 'react'

function StudentForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log('Name:', name)
    console.log('Email:', email)
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h2 className="mb-4">
          Student Form
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="mb-3">

            <label className="form-label">
              Student Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>


          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default StudentForm
