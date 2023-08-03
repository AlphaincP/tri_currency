//currency api
const api = 'https://api.exchangerate-api.com/v4/latest/USD';

//variables
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const from  = document.getElementById('from');
const to = document.getElementById('to');
const convert = document.querySelector('.convert');
let resultFrom;
let resultTo;
let updateValue;

//get value of amount to convert
fromAmount.addEventListener('input',(event)=>{
    updateValue  = event.target.value;
})

//get currency from
from.addEventListener('change',(event) =>{
    resultFrom = `${event.target.value}`;
})

to.addEventListener('change',(event) =>{
    resultTo = `${event.target.value}`;
})

convert.addEventListener('click',() =>{
    fetch(`${api}`).then(res => res.json())
    .then((currency) =>{
        let fromRate = currency.rates[resultFrom];
        let toRate = currency.rates[resultTo];
        toAmount.innerHTML = ((toRate/fromRate) * updateValue).toFixed(2);
        toAmount.style.display = 'block';
        console.log(currency.rates)
    })
})