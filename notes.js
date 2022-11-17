// comment
// command ? 

/*
* multi line comment
*
*/

// Datatype 
// String 
// "" ''
// Integer
// 12 -123 0
// Float
// 1.123 -123.123 0.0
// Boolean
// true false
// Arrays
// ['bob', 12, true]
// Hashes
// { key: value }
// { first: 'bob'}
// NAN
// Undefined
// // Nil -> null

// + - * / PEMAS ()
// % < > <= >= == !== === !=
// && ||

// console.log(2 ** 2)

// console.log(3/2) // will give you a float
// string Concatenation
// console.log("Hello " + "World")

// String interpolation
// let name = 'bob'
// console.log(`Hello ${name}`)

// ++
// --
// += -=

// Variables
// keyword namevar = obj
// Name is going camelCase 
// // can't name it any keyword class type, string 
// var - old way, we don't use any more, hoisting, global file wide
// let - new way, reassign
// const - new way, constant, read only
// scope, where we are defining them

// var num = 5
// let num = 5
//   num = 5
// const num2 = 5
// num2 = 5

// const - var, modules / components, functions, 

// let arr = [1, 2, "adf"]
// arr[2]

// let colors = ["red", "green", "pink"]
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
 // console.log(colors.indexOf("black"))
 // console.log(colors.indexOf("pink"))

 // console.log(colors.join(","))
 // console.log(colors.includes("blue"))

// modify
// colors.push("orange")
// console.log(colors)
// colors.unshift("blue")
// console.log(colors)

// colors.pop()

// console.log(colors.slice(1))

// console.log(colors.length)
// console.log(colors.reverse())

// let colors = ["red", "green", "pink"]
// for
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// colors.forEach( function(color) {
//   console.log(color)
// } )

// for (let color of colors) {
//   console.log(color)
// }

// colors.map( color => {
//   console.log(color)
// })

// let newArr = colors.filter( color => color !== 'pink')

// console.log(newArr)

// let person = { name: 'bob', age: 33 }
// console.log(person.name)
// console.log(person.age)
// console.log(person['name'])
// console.log(person['age'])
// person.hair = 'Blonde'

// console.log(person)

// let cars = [
//   { make: 'Toyota', model: 'Prius', year: 1999},
//   { make: 'Tesla', model: 'X', year: 2009},
//   { make: 'Ford', model: 'Focus', year: 2017 },
// ]

// console.log(cars[2].year)
// console.log(cars[1].model)

// Function / methods
// ruby - methods
// js - function 

// function nameofFunction(arg, arg) {
//   return 
// }

// const
// () =>
// nameof the function

// displayName(names) {
//   ...
// }
  
// displayName = (names) => {
//   ...
// }

// functions and modules / components
// const displayName = (names) => {
//   ...
// }

// ann fx
// () => 

// html
// <button onClick={() => delete(id)}>Trash</button>

const cl = (msg) => {
  console.log(msg)
}

// cl(1+1)

// const countColors = (colors) => {
//   cl(colors.length)
// }

// countColors(['red', 'green', 'pink'])
// countColors(['red'])
// countColors()

// const countColors = (colors = []) => {
//   cl(colors.length)
// }

// countColors(['red', 'green', 'pink'])
// countColors(['red'])
// countColors()

// const userInfo = (name, options = {}) => {
//   let likes = options.likes
//   let followers = options.followers
//   let following = options.following
// }

// const userInfo = (name, { likes, followers, following }) => {
  
// }

// userInfo('boofoo', { 12, 34, 340 })

// Rest params
// accept infinite amt of arg, ... name to ref to the args within function and args

// const displayColors = (firstColor, ...colors) => {
//   cl(firstColor)
//   colors.map( c => cl(c))
// }

// displayColors('red')

// displayColors('red', 'white')

// displayColors('red', 'white', 'blue')

// spread operator
// works with objects
// ...
// spread out the content of a set
// array spread of the content of the arr
// let colors = ["red", "green", "pink"]

// cl(...colors)

// function getMovies("/movies", function(data) {
//   let movies = data.movies;
//   displayMovies(...movies);
// });

// let person = { first: 'goog', age: 33 }

// let person2 = {...person}

// cl(person2)