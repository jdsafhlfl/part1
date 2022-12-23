const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 13
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total num={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
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