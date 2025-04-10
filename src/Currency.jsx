import React, { useState } from 'react'
import '../src/css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "*****************************************";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async()=>
    {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult((amount*(response.data.data[toCurrency])).toFixed(4)); 
    }
  return (
    <div className='currency'>
        <div>
            <h3>Currency Application</h3>
        </div>
        <div className='content'>
        <input value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        type="number"/>

            <select onChange={(e)=> setFromCurrency(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>
            <FaLongArrowAltRight />
            <select onChange={(e)=> setToCurrency(e.target.value)}>
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
            <input value={result} onChange={(e)=> setResult(e.target.value)} type="number"/>
        </div>
        <div>
            <button onClick={exchange}> CONVERT </button>
        </div>        
    </div>
  )
}

export default Currency