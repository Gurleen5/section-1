const fruits=['mango','banana','apple','orange','pineapple','grapes','guava','papaya']
console.log(fruits.slice(3,8));
console.log(fruits.splice(2,3));
console.log(fruits);
console.log(fruits.splice(-2,0,'tomato','jackfruit'));
console.log(fruits);
n=(fruits.indexOf('mango'));
console.log(fruits.splice(n,1));
console.log(fruits);
//traversing
const nums=[36, 19, 10,2,6,13,49];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log('--------');
for (let n of nums){
    console.log(n);
}

console.log('--------using for each function--------');

nums.forEach((a,i)=>{ console.log(a,i);} );//first element will give element and the next element will give the index of the array and the third element will give the array and forth will give undefined
 console.log('-------square--------');
nums.forEach(a=> {console.log(a*a);});

//create a new array containing only even numbers 
console.log('---------');
const even=[]
for (let n of nums){
    if(n%2===0){
        even.push(n);
    }
}
console.log(even);
