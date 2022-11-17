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

// Obj

// const userInfo = (first, last, middle, age) => {
//   let fullName = first + ' ' + last
//   // return { fullName: fullName, middle: middle, age: age }
//   return { fullName, middle, age }
// }

// obj destructuring
// person = { first: 'bob', last: 'smith', email: 'bob@lucky.com', age: 22 }

// let first = person.first
// let last = person.last
// let email = person.email
// let age = person.age
// const { first, last, email, age } = person

// grab the keys and then have them be variables to use

// cl(`${first} ${last} email: ${email} and is ${age} years old`)

// `
//   multi
//   line 
//   string
// `

// to have your console open when using
// debug your code
// debugger

// JSON 
// Javascript Object Notation 
// ruby and js understand json

// {
//   "firstName": "John",
//   "age": 45
// }

// { contacts: [
//   {"name": 'bob', "phone": "123-123-1231", "email": "bob@email.com"},
//   {"name": 'bob', "phone": "123-123-1231", "email": "bob@email.com"},
//   {"name": 'bob', "phone": "123-123-1231", "email": "bob@email.com"},
// ]}

// contacts.map( c => 
//   console.log(c)
// )

// old way 
// let App = require('app')

// new way would be two parts 
// import export
// export - if you want to use the file in other places it would be an export 
// to bring over files it would be a import 

// import files, packages, things from packages
// import stuff in a package
// import React from 'react';
// import { Component } from 'react';
or 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// from where is the file from this file 
// ../ out a folder 
// ./
// / in a folder 
// /filename
// files within the same folder 
// export default 
import Navbar from './app.js'

// regular export 
import { Navbar, whoisAdmin, numberOfUsers } from './app.js'


cl(whoisAdmin)