const fruits=['mango','banana','apple','orange','pineapple','grapes','guava','papaya']
console.log(fruits.slice(3,8));
console.log(fruits.splice(2,3));
console.log(fruits);
console.log(fruits.splice(-2,0,'tomato','jackfruit'));
console.log(fruits);
n=(fruits.indexOf('mango'));
console.log(fruits.splice(n,1));
console.log(fruits);
