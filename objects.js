const user={
    name: 'Raju',
    email:'raju@mail.com',
    password: 'abc123',
    age:34
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.address='lucknow';
user.age=22;
console.log(user);
user['roll-no']=27654; //to access special characte key
console.log(user['roll-no']);

const key='address';
console.log(user[key]); 
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

user.phone=[9415912797,7839118489];
console.log(user.phone);
console.log(user.phone[1]);

const smartphone={
    brand:'apple',
    model:'iphone16',
    price:79999,
    colors:['white','green','black']
};
//syntax to access second color of the smartphone
console.log(smartphone.colors[1]);
console.log(smartphone.colors[1][3]);
//replace green with 2 green color variants
smartphone.colors.splice(1,1,'forest green','sea green');
console.log(smartphone.colors);

const smartphonearray=[
    {
    brand:'apple',
    model:'iphone16',
    price:79999,
    colors:['white','green','black'],
    ram:['6gb','8gb']
},
    {
    brand:'MI',
    model:'poco X2',
    price:16000,
    colors:['black','gray'],
    ram:['16gb','4gb']
},
    {
    brand:'samsung',
    model:'s24 ultra',
    price:110000,
    colors:['silver','gold'],
    ram:['32gb','8gb']
},
    {
    brand:'oneplus',
    model:'12r',
    price:36000,
    colors:['blue','pink'],
    ram:['8gb','64gb']
},
    {
    brand:'motorola',
    model:'edge50',
    price:24000,
    colors:['white','black'],
    ram:['2gb','8gb']
},
]; 
//access price of second smartphone
console.log(smartphonearray[1].price);
//add new color in 3rd smartphone 
smartphonearray[2].colors.push('blue');
console.log(smartphonearray[2].colors);
//create an array containing all the brands
const brand=smartphonearray.map((a)=>{ return a.brand})
console.log(brand);
//filter all smartphones containing white color
const white=smartphonearray.filter((c)=>{ return c.colors.includes('white')});
console.log(white);
