const arr= [ 65, 'nice', true, console.log, undefined ];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.length); //also works with string


const movies=['300','MI','deadpool','expendables','3 idiots','inception'];
//indexing
console.log( movies[3]); //also works with string
console.log(movies.indexOf('inception')); //also works with string
console.log(movies.at(-2)); //also works with string
movies[2]='deadpool & wolverine';
console.log(movies);
console.log(movies[7]);

//slicing
console.log(movies.slice(2,5)); //also works with string
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
console.log(movies.slice(7));
console.log(movies);
console.log('something'.length);
console.log(movies[2].slice(-9));

//adding and removing elements
movies.push('kanchana');//adds element at the end
console.log(movies);

movies.unshift('gangs of wasseypur')//adds element at the beginning
console.log(movies);

console.log(movies.pop());// removes element from the end
console.log(movies.shift());//removes element from the beginning
console.log(movies);

//movies.splice(3,2);// remove 2 element starting from 3
//movies.splice(3,2,'john wick','the boys','invincible')//remove 2 elements starting from 3 and add arrays after that 
movies.splice(3,0,'john wick','the boys','invincible')//no element is removed but elements are added in it after 3 index
console.log(movies);