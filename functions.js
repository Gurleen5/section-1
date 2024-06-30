function addnums(a,b){
    var c=a+b;
    console.log(c);
}
addnums(34,12);
//console.log(c);
const getavg=function(m1,m2,m3,m4=70){
    console.log(m1,m2,m3,m4);
    const avg=(m1,m2,m3,m4)/4;
    //console.log(avg);
    return avg;
}
const res=getavg(34,56,45);
console.log(res);

const factorial= (n)=>{
    let f=1;
    for (let i=2; i<=n; i++){
        f*=i;
    }
    return f;
}
const ans=factorial(5);
console.log(ans);
//array destructuring
let[a,b,c]=[7,3,28];
console.log(a);
[b,c]=[c,b];
console.log(b,c);
const[name1,name2,,,name5]=['ramu', 'sham', 'raju','pinki','neha']
console.log(name5);

const getreport=(m1,m2,m3,m4, max=100)=>{
    const avg=getavg(m1,m2,m3,m4);
    const percentage=avg/max*100;
    return[avg,percentage];
}
const[v1,v2]=getreport(134,156,78,90,200);
console.log(v1,v2);
//wap to take start and end as parameters 
//and print all numbers divisible by 7 in that range
//and also print the sum of all such numbers
 const divide=(start,end)=>{
    sum=0;
    for(let i=start; i<end;i++){
        if(i%7===0){
            console.log(i);
            sum+=i;
        }
    }
    return sum;
 }
 const s=divide(10,100);
 console.log(s);