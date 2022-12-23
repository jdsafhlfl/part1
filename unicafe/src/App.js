import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
  }
  
  const handleNeutral = () =>{
    setNeutral(neutral+1)
  }

  const handleBad = () =>{
    setBad(bad+1)
  }

  const returnAll = () =>{
    return good+neutral+bad
  }

  const returnAvg = () =>{
    return (good - bad) / returnAll()
  }

  const returnPositive = () =>{
    return good / returnAll() * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleFunction={handleGood} />
      <Button text="neutral" handleFunction={handleNeutral} />
      <Button text="bad" handleFunction={handleBad} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={returnAll()} avg={returnAvg()} positive={returnPositive()}  /> 
    </div>
  )
}

const Button = (props) =>{
  return (
    <button onClick={props.handleFunction}>
      {props.text}
    </button>
  )
}

// const StatisticsLine = (props) =>{
//   if (props.name === "positive"){
//     return (
//       <p>
//         {props.name} {props.value} %
//       </p>
//     )
//   }
//   else{
//     return (
//       <p>
//         {props.name} {props.value}
//       </p>
//     )
//   }
// }

const Statistics = (props) => {
  if (props.all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      // <div>
      //   <StatisticsLine name="good" value={props.good} />
      //   <StatisticsLine name="neutral" value={props.neutral} />
      //   <StatisticsLine name="bad" value={props.bad} />
      //   <StatisticsLine name="all" value={props.all} />
      //   <StatisticsLine name="average" value={props.avg} />
      //   <StatisticsLine name="positive" value={props.positive} />
      // </div>
      <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.all}</td>
        </tr>
        <tr>
          <td>avg</td>
          <td>{props.avg}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.positive} %</td>
        </tr>
      </tbody>
    </table>
    )
  }
}

export default App