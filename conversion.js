function submitConversion(){
event.preventDefault();

var amount=document.getElementById('amount');
var currency=document.getElementById('currency');

var a=Number(amount.value);
var c=currency.value;

var fc=document.querySelector('#final-conversion');

if (c=='EUR'){
fc.textContent=a+' '+c+' '+'is'+' '+a*0.8+' '+'GBP';
fc.style.color='blue';
}

else if (c=='AUD'){
fc.textContent=a+' '+c+' '+'is'+' '+a*0.5+' '+'GBP';
fc.style.color='blue';
}


else if (c=='JPY'){
fc.textContent=a+' '+c+' '+'is'+' '+a*0.001+' '+'GBP';
fc.style.color='blue';
}

else {
fc.textContent='Unable to convert your request to GBP';
fc.style.color='red';
}
}
