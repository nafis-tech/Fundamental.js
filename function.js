function myFunction( p1, p2) {
    return p1 * p2
}
console.log(myFunction())

myCount = () => {
    return 4 * 6
}
console.log(myCount()) //24

function myCount2 (){
    return 4* 6
}
console.log(myCount2()) //24

let a = myCount3(4, 5);
function myCount3(a, b) {
    return a * b;
}
console.log(myCount3()) //NaN

//function declaration
function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;
    return total
}
console.log(jumlahDuaBilangan(2, 5))   //7
console.log(jumlahDuaBilangan())       //Nan
console.log(jumlahDuaBilangan(5, 7))   //12

//function expression
var jumlahDuaBilangan2 = function(a, b) {
    var total2 ;
    total2 = a + b;
    return total2
}

var kubus1 = 2*2
var kubus2 = 8*8
var kubus = kubus1 + kubus2
console.log(kubus) //68

// var y = 3;
// var z = 5;
// var volumeA;
// var volumeB;
// var total;

// volumeB = z * z * z
// volumeA = y * y * y

// total = volumeA + volumeB;

// console.log(total) //152

function jumlahVolumeDuaKubus(y, z) { //y,z parameter
    var volumeA;
    var volumeB;
    var total;

    volumeA = y * y * y;
    volumeB = z * z * z;

    total = volumeB + volumeA;

    return total;
}

//buat lebih reusable, lbih ringkas kode nya
function jumlahVolumeDuaKubus2 (y, z) { //y,z parameter
    total2 = (y * y * y) + (z * z * z);

    return total2;
}

jumlahVolumeDuaKubus((8, 3))
//argument
console.log(jumlahVolumeDuaKubus(8, 3)) //539
console.log(jumlahVolumeDuaKubus2(5, 16)) //4221


function tambah (k, l) {
    // return k + l
    return arguments
}

function kali (m, n) {
    return m * n
}

let p = 3
let q = 8
let res = kali(tambah(p*2,p), kali(q*3, p))
//kali (p*2 + p), (q*3 x p) --> kali((3*2) + 3) * ((8*3) x 3) -->  kali (9 * 72)

console.log(res) //648

var hasil = tambah(5,9); //14
console.log(hasil) //14

let h = 72* 9
console.log(h)

//ARGUMENTS : array berisi nilai dikrimkan saat fungsi di panggil
var hasil2 = tambah(5,9, 8, "hi", 90)
console.log(hasil2)  // [Arguments] { '0': 5, '1': 9, '2': 8, '3': 'hi', '4': 90 }

function tambah2() {
    var hasil2 = 0
    for(var i = 0; i<arguments.length; i++){
        hasil2 += arguments[i];
    }
    return hasil2;
}
var coba = tambah2(1,2,3,4,5,6); 
console.log(coba) //21

//SCOPE 
/*
    1. didalam function bisa mengakses variabel di luar funct
    2. funct tidak bisa diakses di luar funct


*/