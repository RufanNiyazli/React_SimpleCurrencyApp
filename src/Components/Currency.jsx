import React, { useEffect, useState } from 'react'
import './Style.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';



let key = 'cur_live_PnNzTPQsuqHNQlhrQviEemhUAeJV5BjFNz4pPQW2'
let BASE_URL = 'https://api.currencyapi.com/v3/latest?apikey='


function Currency() {
    const [amount, setAmount] = useState(0)
    const[fromCurrency,setfromCurrency]=useState('USD')
    const [toCurrency, settoCurrency] = useState('EUR')
    const [result, setResult] = useState(0)
 
    const getCurrency = async () => {
        const response = await axios.get(`${BASE_URL}${key}&base_currency=${fromCurrency}`);
        let final_result=(amount*response.data.data[toCurrency].value).toFixed(3)
        setResult(final_result)
    }

  return (
      <>
          <div className='big-box'>
            <div className='container'>
            <input type="number" value={amount} onChange={(e)=>setAmount((e.target.value))}/>
                  <select value={fromCurrency} onChange={(e) => setfromCurrency((e.target.value))}>
                <option>USD</option>
                <option>AZN</option>
                <option>EUR</option>
            </select>
                <FaArrowAltCircleRight style={{ fontSize: '25px',margin:'0 10px'}}/>
            <select value={toCurrency} onChange={(e) => settoCurrency((e.target.value))}>
                <option>USD</option>
                <option>AZN</option>
                <option>EUR</option>
            </select>
                  <input type="number" value={result} onChange={(e) => setResult((e.target.value))} />
            
              </div>
            <button onClick={getCurrency}>Change</button>
         </div>
    </>
  )
}

export default Currency
