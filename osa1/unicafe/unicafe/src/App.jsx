import { useState } from 'react'

//button komponentti, joka saa propsina tekstin ja tapahtuman, joka tapahtuu klikkauksesta
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
//statisticsLine-komponentti, joka saa propsina tekstin ja arvon, ja näyttää ne muodossa "teksti arvo"
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}
//statistics-komponentti, joka saa propsina good, neutral ja bad, ja laskee niistä tilastot
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

//jos palautteita ei ole annettu palautetaan tämä teksti
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
// kun palautteita on annettu, lasketaan keskiarvo ja positiivisten osuus
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </div>
  )
}

//App-komponentti, joka pitää tilan good, neutral ja bad, ja renderöi napit ja tilastot
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


//renderöidään napit button komponentilla
  return (
    <div>
      <h1>give feedback</h1>

      {/* Napit, jotka muuttavat tilaa klikkaamalla */}
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
     

      {/*kutsutaan statistics-komponentti, jolle annetaan propsit*/}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
