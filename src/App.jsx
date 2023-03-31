import { useState, useEffect, useRef } from 'react'
import './App.css'
import CreditCard from './components/CreditCard'
import Form from './components/Form'

function App() {
  const [rotate, setRotate] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <div className="App">
      <CreditCard 
        rotate={rotate} 
        cardNumber={cardNumber} 
        cardHolder={cardHolder}
        year={year}
        month={month}
        cvv={cvv}
      />
      <Form setRotate={setRotate} 
        year={year} setYear={setYear}
        month={month} setMonth={setMonth}
        cardNumber={cardNumber} setCardNumber={setCardNumber}
        cardHolder={cardHolder} setCardHolder={setCardHolder}
        cvv={cvv} setCvv={setCvv}
      />
    </div>
  )
}

export default App
