import { useState } from 'react'

const Button = props => (
  <button onClick = {props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = props => (
    <>{props.text} {props.val}</>
    )  

const Statistics = (props) => (
    <table>
      <tbody>
      <tr><td>good</td><td>{props.good}</td></tr>
      <tr><td>neutral</td><td>{props.neutral}</td></tr>
      <tr><td>bad</td><td>{props.bad}</td></tr>
      <tr><td>all</td><td>{props.all}</td></tr>
      <tr><td>average</td><td>{props.avg.toFixed(2)}</td></tr>
      <tr><td>positive</td><td>{props.positive.toFixed(2)} %</td></tr>
      </tbody>
    </table>
  )

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)
  
  const all = good + neutral + bad
  const avg = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  let statistics
  
  if (all === 0) {
    statistics = <>no feedback given</>
  } else {
    statistics = 
    <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive}/>
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text = "good"/>
      <Button onClick={handleNeutral} text = "neutral"/>
      <Button onClick={handleBad} text = "bad"/>

      <h2>statistics</h2>
      {statistics}
    </>
  )
}

export default App