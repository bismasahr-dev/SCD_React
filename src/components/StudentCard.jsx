function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>{props.program}</p>
      <p>Semester {props.semester}</p>
    </div>
  )
}

export default StudentCard





// function StudentCard({ name, program, semester }) {
//   return (
//     <div className="student-card">
//       <h2>{name}</h2>
//       <p>{program}</p>
//       <p>Semester {semester}</p>
//     </div>
//   )
// }

// export default StudentCard