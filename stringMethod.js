//String Methods

var message = "Hello World";
console.log(message)

var nama = "Nafis";
var peran = "prince";

if (!nama) {
    console.log('nama harus di isi')
}

else if (!peran) {
    console.log('hallo' + nama + ' pilih peranmu untuk memulai game')
}

else if (peran === 'prince') {
    console.log('hallo selamat datang di dunia ninja ' + nama 
    + ' selamat kamu telah menjadi seorang ' + peran)
}

else if (peran === penyihir) {
    console.log('hallo ' + nama + 'selamat kamu menjadi seorang ' + peran)
}

let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
console.log(txt)

txt = txt.toUpperCase()
console.log(txt)

txt = txt.toLowerCase()
console.log(txt)

let txt1 = "abcdefghijkl"
let position = txt1.indexOf("h")
let pos2 = txt.indexOf("o")

console.log(position)
console.log(pos2)

let txt2 = "I can eat bananas all day";
let go = txt2.slice(10, 17)
console.log(go)


