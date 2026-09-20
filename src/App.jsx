
import './App.css'
import Welcome from './components/welcome'
import StudentCard from './components/StudentCard'

function App() {


  return (
    <>


      {/* <main className="container">

        <section className="welcome">
          <h2>Welcome to SCD Lab</h2>
          <p>We are learning React Components.</p>
        </section>

        <section>
          <h2 className="section-title">Students</h2>

          <div className="cards">

          
            <div className="student-card">
              <h2>Ali Khan</h2>
              <p>Computer Science</p>
              <p>Semester 6</p>
            </div>

            <div className="student-card">
              <h2>Sara Ahmed</h2>
              <p>Data Science</p>
              <p>Semester 8</p>
            </div>

          </div>
        </section>

      </main> */}
      



    {/* Component and Props */}
       <Welcome/>
       <StudentCard
       name="Ali"
       program="BSSE"
       semester="5"
       />
    </>
  )
}

export default App



