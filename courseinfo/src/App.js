const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 24

  return (
    <div>
      <Header course={course} />
      <Content part_name={part1} exercise_num={exercises1} />
      <Content part_name={part2} exercise_num={exercises2} />
      <Content part_name={part3} exercise_num={exercises3} />
      <Total num={exercises1+exercises2+exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part_name} {props.exercise_num}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of Exercises {props.num}</p>
    </div>
  )
}

export default App