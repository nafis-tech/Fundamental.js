const cars = ["naruto", "hinata", "lee"]
let x = cars[1]
console.log(x)

cars[0] = "sazuke"
console.log(cars)
//Change the first item of cars to "sazuke"

console.log(cars.length)
 
//array method
const fruits = ["apple", "strawberry", "lecy", "orange", "mango"]
let flen = fruits.length

for (let i = 0; i < flen; i++) {
    console.log(fruits[i])
}

//Use the correct Array method to remove the last item of the fruits array.
console.log(fruits.pop())  //mango

//add 
fruits.push("banana", "manggis")
console.log(fruits) // [ 'apple', 'strawberry', 'lecy', 'orange', 'banana', 'manggis ]

//splice, remove mulai dari index ke - sebanyak brp index
fruits.splice(1, 2)
console.log(fruits)  //index ke 1, sebanyak 2x --> strawbery, lecy remove

var motors = ["mio", "soul", "ninja", "nmax", "honda"]
let splice3 = motors.splice(1, 2 , "nangka", "duren")
console.log(splice3)
console.log(motors) //[ 'mio', 'nangka', 'duren', 'nmax', 'honda' ]

console.log(typeof(fruits))
console.log(typeof(cars))
console.log(Array.isArray(fruits)) //true

console.log(fruits instanceof Array) // true

console.log(fruits.toString()) //apple,orange,banana,manggis

console.log(fruits.sort()) // [ 'apple', 'banana', 'manggis', 'orange' ]

console.log(fruits.join()) //apple,banana,manggis,orange

console.log(fruits.join('-')) //apple-banana-manggis-orange

console.log(fruits.shift()) //apple --> remove index pertama kali

let be = fruits.unshift("apple");
console.log(be)

console.log(fruits.unshift("apple2"))
console.log(fruits) //[ 'apple2', 'apple', 'banana', 'manggis', 'orange' ]


//concat

const myBoy = ["dava", "aryo", "bio", "zian"]
const myGirl = ["ayu", "wulan", "diya", "puja"]

const myChildren = myBoy.concat(myGirl)
console.log(myChildren)
//hasil :
// [
//     'dava', 'aryo',
//     'bio',  'zian',
//     'ayu',  'wulan',
//     'diya', 'puja'
// ]

//SORT
const points = [40, 50, 42, 77, 2, 8, 90, 65]
points.sort(function(a, b) {
    return b-a
})

console.log(points) // a-b : [ 2,  8, 40, 42, 50, 65, 77, 90]
console.log(points) // b-a : [90, 77, 65, 50, 42, 40,  8,  2]

points.sort(function(a,b) {
    return 0.5 - Math.random()
})
console.log(points) // [40, 2, 90, 42, 65, 8, 50, 77]

const point = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b) {
    return 0.5 - Math.random()
})
console.log(point) // [ 40, 100, 1, 5, 25, 10 ]
  
