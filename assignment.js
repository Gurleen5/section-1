// if else loop 1st question
let a=48;
if(a>=70 && a<=120){
    console.log('exists');
}
else{
    console.log('does not exists');
}
// 2nd question
let age=23;
if (age>=18){
    console.log('eleigible for dl');
}
// 3rd question
let p=12;
let q=33;
let r=90;
if(p>q && p>r){
    console.log(p);
}
else if(q>r && q>p){
    console.log(q);
}
else {
    console.log(r);
}
//4th question
let x=14;
square=Math.sqrt(x);
if((square%1)===0){
    console.log('perfect square');
}
else{
    console.log('not a perfect square');
}
// 5th question
a=12;
if((a%7 && a%11)===0){
    console.log('divisible');
}
else{
    console.log('not divisible');
}
//functions 1st question
const prime=(n)=>{
    let count=0;
    for(i=1; i<=n;i++){
        if(n%i===0){
            count++;
        }
    }
    if (count>2){
        return('not prime number');
    }
    else{
        return('prime number');
    }
}
const res=prime(3);
console.log(res);
//2nd question
const palindrome=(a)=>{
    rev=0;
    while(a>0){
        dig=a%10;
        rev=rev*10+dig;
        n=parseInt(a/10);
    }
    if (rev===a){
        return ('palindome')
    }
    else{
        return ('not palindrome')
    }
}
const result=palindrome(453);
console.log(result);
//3rd question
const reverse=(b)=>{
    let org=b;
    let rev=0;
    while(b>0){
        let dig=a%10;
        rev=rev*10+dig;
        b=parseInt(b/10);
    }
    return rev;
}
const r1=reverse(345);
console.log(r1);
console.log(reverse===org);
//question 4
0