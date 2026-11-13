import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistics = (props) => {
  if (props.optionsCollection.length === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>neutral {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.optionsCollection.reduce((acc, value) => acc + value, 0) / props.total}</p>
      <p>positive {props.optionsCollection.filter(x => x === 1).length / props.total * 100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [optionsCollection, setOptionsCollection] = useState([]);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
    setOptionsCollection(optionsCollection.concat(1));
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + bad + updatedNeutral);
    setOptionsCollection(optionsCollection.concat(0));
  }
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + updatedBad + neutral);
    setOptionsCollection(optionsCollection.concat(-1));
  }

  return (
    <div>
      <Title text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Title text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} optionsCollection={optionsCollection} total={total} />
    </div>
  )
}

export default App