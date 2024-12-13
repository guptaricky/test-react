import React, { useState } from 'react';

function CurrencyConvertor() {
const [currency, setCurrency] = useState('')
const [convertedCurrency, setConvertedCurrency] = useState(0);
const exchangeRate = 84.44;


const handleChange = (e)=>{
    const input = e.target.value;
    if(isNaN(input) || input < 0){
        setCurrency('');
        setConvertedCurrency(0);
        return
    }
    setCurrency(input);
    setConvertedCurrency((input * exchangeRate).toFixed(2));
}

    return (
        <div>
            <h2>Currency Convertor</h2>
            <p>Amount in Dollar</p>
            <input type="number" value={currency} onChange={handleChange}/>
            <p>Equivalent Amount in INR : </p>
            <div>{convertedCurrency ? `₹${convertedCurrency}` : 'N/A'}</div>
        </div>
    )
}

export default CurrencyConvertor;