const nums=[36, 19, 10,2,6,13,49];

//map function

const squares= nums.map(( a )=>{ return a*a })
console.log(squares);
//convert decimal into integer
const prices=[23.88,274.50,888.9,274.2121,99.99];

const numbers= prices.map(( a )=>{ return parseInt(a) })
console.log(numbers);

//filter

const evennums=nums.filter(( n )=>{ return n%2===0});
console.log(evennums);

//filter prices greater than 50 and less than 300

const greater=prices.filter(( b )=>{ return b>50 && b<300})
console.log(greater);