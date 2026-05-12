import { useState } from 'react'

//uusi komponentti statistics, johon siirretään laskutoimitukset
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
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      {/* Napit, jotka muuttavat tilaa klikkaamalla */}
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      {/*kutsutaan statistics-komponentti, jolle annetaan propsit*/}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
