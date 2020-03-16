function submitBook(){

event.preventDefault();
var title=document.getElementById('title');
var author=document.getElementById('author');
var isbn=document.getElementById('isbn');

var tValue=title.value;
var tAuthor=author.value;
var tIsbn=isbn.value;

var btb=document.querySelector('#book-table-body');

var tr=document.createElement('tr');

var td1=document.createElement('td');
var td2=document.createElement('td');
var td3=document.createElement('td');

td1.textContent=tValue;
td2.textContent=tAuthor;
td3.textContent=tIsbn;

tr.appendChild(td3);
tr.appendChild(td2);
tr.appendChild(td1);

btb.appendChild(tr);


}
