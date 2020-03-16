
for(var a=0; a<11; a=a+1) {

var tr=document.createElement('tr');
var td1=document.createElement('td');
var td2=document.createElement('td');
var td3=document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

var tbody=document.querySelector('#book-table-body');
tbody.appendChild(tr);


td1.textContent='1245';
td2.textContent='Love Story';
td3.textContent='Rafaela & Susana';

}



