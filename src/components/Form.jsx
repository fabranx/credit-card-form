import './Form.css'
import { DateTime } from 'luxon'


const MONTHS = Array.from({length:12}, (_,i)=> i+1);
const currentYear = DateTime.now().year
const YEARS = Array.from({length:12}, (_,i) => currentYear + i)



function Form({setRotate, year, setYear,
    month, setMonth,
    cardNumber, setCardNumber,
    cardHolder, setCardHolder,
    cvv, setCvv
  }){

  const currentDate = DateTime.now().c

  function onYearChange(e){
    setYear(parseInt(e.target.value))
  }

  function onMonthChange(e){
    setMonth(parseInt(e.target.value))
  }

  function onCardNumberChange(e){

    if(e.target.value.match(/^[0-9\s]*$/))
    {
      const inputVal = e.target.value.replace(/\s+/g, '');
      const formattedInputVal = inputVal.replace(/(\d{4})/g, '$1 ').trim();
  
      setCardNumber(formattedInputVal)
    }
  }

  function onCVVChange(e){
    if(e.target.value.match(/^[0-9]*$/)){
      setCvv(e.target.value)
    }
  }

  function onFormSubmit(){
    console.log("submitted")
  }
  
  return(
      <form className='form' onSubmit={onFormSubmit}>
        <label className='form-label'>Card Number: 
          <input 
            maxLength={19}
            value={cardNumber}
            onChange={onCardNumberChange}
            type='text'
            name="card number"
            inputMode="numeric"
            required
            ></input>
        </label>

        <label className='form-label'>Card Holders: 
          <input 
            required
            type='text' 
            name="card holders" 
            value={cardHolder} 
            maxLength={25}
            onChange={(e) => setCardHolder(e.target.value)}>  
          </input>
        </label>

        <div className='flex'>
          <div className='expiration-date'>
            <label className='form-label'>Expiration Date: </label> 
            <div className='select-expiration-date'>

                <select  onChange={onMonthChange} required>
                  <option value={''}>Month</option>
                  {MONTHS.map(m => {
                    let disabled = false
                    if(year === currentDate.year && m < currentDate.month){ 
                      disabled = true
                    }
                    return <option key={m} value={m} disabled={disabled}>{m}</option>
                    })}
                </select>

                <select onChange={onYearChange} required>
                  <option value={''}>Year</option>
                  {YEARS.map(y => {
                    let disabled = false
                    if(month < currentDate.month && y <= currentDate.year) {
                      disabled = true
                    }
                    return <option key={y} value={y} disabled={disabled}>{y}</option>})}
                </select>

              </div>
          </div>
          <div className='ccv-input'>
            <label className='form-label'>CVV
              <input 
                value={cvv}
                onChange={onCVVChange}
                onFocus={() => setRotate(true)} 
                onBlur={() => setRotate(false)} 
                type='text' 
                name="CVV"
                maxLength={3}
                inputMode="numeric"
                required
              ></input>
            </label>  
          </div>
        </div>

        <button type='submit' className='form-submit-button'>Submit</button>
      </form>
  )
}

export default Form