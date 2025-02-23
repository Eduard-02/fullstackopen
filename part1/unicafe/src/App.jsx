import { useState } from 'react'

const Display = () => <h1>give feedback</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value} {props.text === "positive" ? "%" : ""}</td>
    </tr>
  )
}
const Statistics = (props) => {
  const allS = props.good + props.neutral + props.bad
  const positivePercentage = allS === 0 ? 0 : (props.good / allS) * 100
  if (allS === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={allS} />
        <StatisticsLine text="average" value={(props.good + props.neutral + props.bad) / 3} />
        <StatisticsLine text="positive" value={positivePercentage}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = 0
  const avg = 0
  const positive = 0

  const goodButton = () => {
    console.log("good feedback", good)
    setGood(good + 1)
  }

  const neutralButton = () => {
    console.log("neutral feedback", neutral)
    setNeutral(neutral + 1)
  }

  const badButton = () => {
    console.log("bad feedback", bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <Display Display={Display}/>
      <Button onClick={goodButton}text="good"/>
      <Button onClick={neutralButton}text="neutral"/>
      <Button onClick={badButton}text="bad"/>
      <h2>statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={avg}
        positive={positive}
      />
    </div>
  )
}

export default App