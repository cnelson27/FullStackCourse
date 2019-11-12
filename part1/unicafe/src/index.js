import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return (
        <h1>Give Us Your Feedback</h1>
    )
}

const FeedbackButton = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({good, neutral, bad}) => {
    if ((good + neutral + bad)===0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No Feedback Given</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                    <Statistic text='Good Responses' value={good} />
                    <Statistic text='Neutral Responses' value={neutral} />
                    <Statistic text='Bad Responses' value={bad} />
                    <Statistic text='All Responses' value={good + neutral + bad} />
                    <Statistic text='Pecentage Positive' value={(good/(good + neutral + bad)*100)} />
                    <Statistic text='Average of Responses' value={(good - bad)/(good + neutral + bad)} />
                </tbody>
            </table>
    </div>
    )
}

const Statistic = ({text, value, unit}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value) => () => {
    if (value==='good') {
        setGood(good + 1)
    }
    else if (value==='neutral') {
        setNeutral(neutral + 1)
    }
    else {
        setBad(bad + 1)
    }
  }

  return (
    <div>
        <Header />
        <FeedbackButton onClick={handleClick('good')} text='good' />
        <FeedbackButton onClick={handleClick('neutral')} text='neutral' />
        <FeedbackButton onClick={handleClick('bad')} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)