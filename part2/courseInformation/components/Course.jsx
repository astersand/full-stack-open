const Course = (props) => {

  return (
    <div>
      <MainTitle title='Web development curriculum' />
      <Content courses={props.courses} />
    </div>
  )
}

const MainTitle = (props) => <h1>{props.title}</h1>

const CourseHeader = (props) => {
  return (
    <h2 key={props.courses.id}>
      {props.courses.name}
    </h2>
  )
}

const Content = (props) => {
  return (
    props.courses.map((course, index) =>
      <div key={index}>
        <CourseHeader courses={course} />
        <Part courses={course} />
        <Total courses={course} />
      </div>
    )
  )
}

const Part = (props) => {
  return (
    props.courses.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
  )
}

const Total = (props) => {
  return (
    <p style={{ 'fontWeight': 'bold' }}>total of {props.courses.parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</p>
  )
}

export default Course;