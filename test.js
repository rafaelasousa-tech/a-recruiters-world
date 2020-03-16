function sum(a,b){
var c=a+b;
console.log(c);
}

function su(par){
    if(par%2 == 0){
    console.log('0');
    }else if (par%2 !== 0){
    console.log('!=0');
    } else {
    console.log ('dont know');

    }
}

function looper(){

    for(a=0;a<100;a=a+1){
    if(a%2!==0){
    console.log(a);
    }

    }
}

function inputs(a,ca,cb){

if (ca=='GBP' && cb=='EUR'){
console.log(a*1.2);
}

else if (ca=='GBP' && cb=='USD'){
console.log(a*1.4);
}

else if (ca=='GBP' && cb=='AUD'){
console.log(a*1.3);
}

else {
console.log(a);
}

}

function bmi(w,h){

if ((w/(h*h))<=19.9){
console.log('underweight');
}

else if ((w/(h*h))>=20 && (w/(h*h)) <= 23.4){
       console.log('healthy');
       }

else if ((w/(h*h))>=23.5 && (w/(h*h)) <= 26){
       console.log('overweight');
       }

else if ((w/(h*h))>26){
console.log('obese');
       }

       else {
       console.log ('ghost')
       }

}

