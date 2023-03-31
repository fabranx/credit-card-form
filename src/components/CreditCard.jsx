import chip from '../assets/img/chip.png'
import visa from '../assets/img/visa.png'
import mastercard from '../assets/img/mastercard.png'
import discover from '../assets/img/discover.png'
import americanexpress from '../assets/img/amex.png'

import './CreditCard.css'

import { useEffect, useState } from 'react'


function CreditCard({rotate, cardNumber, cardHolder, year, month, cvv}) {

  const [hiddenCardNumber, setHiddenCardNumber] = useState('')
  
  let cardCircuit = ''
  if(cardNumber.startsWith('4')){
    cardCircuit = visa
  }
  else if(cardNumber.startsWith('3')){
    cardCircuit=americanexpress
  }
  else if(cardNumber.startsWith('5')){
    cardCircuit=mastercard
  }
  else if(cardNumber.startsWith('6')){
    cardCircuit=discover
  }


  useEffect(() => {
    let hiddenCNArray = []
    cardNumber.split(' ').map((number, i) => {
      if(i==1 || i==2){
        hiddenCNArray.push('*'.repeat(number.length))
      }
      else{
        hiddenCNArray.push(number)
      }
    })
    setHiddenCardNumber(hiddenCNArray.join(' '))
  }, [cardNumber])

  return (
    <div className="flip-card">
    <div className={`credit-card-inner ${rotate ? 'rotate' : ''}`}>  {/*add rotate on focus cvv*/}    
      <div className="credit-card-front">
        <div className="credit-card-image"></div>
          <div className="credit-card-data">
            <div className="credit-card-circuit">
              <img className='chip' src={chip}></img>
              <img className='circuit' src={cardCircuit}></img>
            </div>
            <div className="credit-card-number">
              {hiddenCardNumber}
            </div>
            <div className="credit-card-info">
              <div className="credit-card-holder">
                <span>Card Holder</span>
                <span>{cardHolder ? cardHolder.toUpperCase() : 'FULL NAME'}</span>
              </div>
              <div className="credit-card-expires">
                <span>Expires</span>
                <span>{month ? ('0'+ month).slice(-2) : 'MM'}/{year ? year.toString().slice(-2): 'YY'}</span>
              </div>
            </div>
        </div>
      </div>

      <div className="credit-card-back">
        <div className="credit-card-image"></div>
        <div className="credit-card-data">
          <span className="cvv-text">CVV</span>
          <div className="credit-card-cvv">
            {'*'.repeat(cvv.length)}
          </div>
          <div className="credit-card-circuit">
            <img className='circuit' src={cardCircuit}></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreditCard