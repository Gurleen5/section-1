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
    brand:'apple',
    model:'iphone15',
    price:59999,
    colors:['blue','green','red'],
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
    brand:'samsung',
    model:'a50',
    price:21499,
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
const brandss=smartphonearray.map((a)=>{ return a.brand})
console.log(brandss);
//filter all smartphones containing white color
const white=smartphonearray.filter((c)=>{ return c.colors.includes('white')});
console.log(white);

//filter all apple smartphones
const keyword='s';
const applephone=smartphonearray.filter((phone)=>{ return phone.brand.toLowerCase()===keyword.toLowerCase()})

const applephone2=smartphonearray.filter((phone)=>{ return phone.brand.toLowerCase().includes(keyword.toLowerCase())})
console.log(applephone2);

const brands=smartphonearray.map((a)=>{ return a.brand})
console.log(new Set(brands));
//to reduce duplication 
console.log(Array.from(new Set(brands)));
console.log(Array.from('apple'));

//sring interpolation

let [ brand, model ,price ]=['apple','iphone16',79999];
console.log(brand +' '+ model +'-'+ price);
console.log(`${brand} ${model} ${price}`);

const phonenames=smartphonearray.map((phone,index)=>{ return `${index+1}. ${phone.brand} ${phone.model} ${phone.price}`})
console.log(phonenames);

[
    'apple iphone 16- white',
    'apple iphone 16- green',
    'apple iphone 16- black',
    'apple iphone 15- red',
]
const allcolorphones= smartphonearray.map((phones)=>{return phones.colors.map((c)=>{return `${phones.brand} ${phones.model} (${c})`})})
console.log(allcolorphones.flat());
//spread (...) operator is used to avoid nested arrays in the output
//flat used to convert multidimensional arrays to single dimensional array

