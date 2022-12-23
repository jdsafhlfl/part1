const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 17
  const part3 = 'State of a component'
  const exercises3 = 24

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
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
        <Part part_name={props.part1} exercise_num={props.exercises1} />
        <Part part_name={props.part2} exercise_num={props.exercises2} />
        <Part part_name={props.part3} exercise_num={props.exercises3} />        
      </div>
    )
}

const Part = (props) => {
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