const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 15
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total num={part1.exercises+part2.exercises+part3.exercises} />
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