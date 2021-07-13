const a = new Date();
console.log(a) //2021-07-13T09:27:41.014Z

const b = new Date().toString();
console.log(b) // Tue Jul 13 2021 16:28:25 GMT+0700 (Western Indonesia Time)


//6 numbers specify year, month, day, hour, minute, second:
const c = new Date(2019, 11, 24, 10, 44, 40).toString()
console.log(c) // Tue Dec 24 2019 10:44:40 GMT+0700 (Western Indonesia Time)


//5 numbers specify year, month, day, hour, and minute:
const d = new Date(2018, 11, 23, 50, 4).toString()
console.log(d) // Tue Dec 25 2018 02:04:00 GMT+0700 (Western Indonesia Time)


//4 numbers specify year, month, day, and hour:
const e = new Date(2020, 20, 22, 40).toString()
console.log(e) // Thu Sep 23 2021 16:00:00 GMT+0700 (Western Indonesia Time)


//3 numbers specify year, month, and day:
const f = new Date(2020, 9, 11).toString()
console.log(f) //Sun Oct 11 2020 00:00:00 GMT+0700 (Western Indonesia Time)


//2 numbers specify year and month:
const g = new Date(2021, 6).toISOString()
console.log(g) //2021-06-30T17:00:00.000Z

const yei = new Date(2022, 1, 2).toUTCString()
console.log(yei) //Tue, 01 Feb 2022 17:00:00 GMT


//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const year = new Date(2020).toString()
console.log(year) //Thu Jan 01 1970 07:00:02 

//new Date(dateString)
const me = new Date("october 06, 1993 20:00").toDateString()
console.log(me) //Wed Oct 06 1993


const hi = new Date().toDateString()
console.log(hi) //Tue Jul 13 2021
const h = new Date(0).toDateString()
console.log(h) //Thu Jan 01 1970

const years = new Date().getFullYear()
console.log(years) //2021

const month = new Date().getMonth()
console.log(month) //6

const day = new Date().setFullYear(2020)
console.log(day) //1594634377637

const j = new Date().setHours()
console.log(j) //Nan
 
