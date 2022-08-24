// 2 Урок типы данных

console.log("I so happy")
console.log("Let it be")
console.log(1990)

alert("16.08.2022")

//number

let number = 1.5;
console.log(number)


console.log (1 / 0);
console.log(Infinity)
console.log("hello" / 123);
console.log(NaN);
console.log(NaN ** 0);


//bigint
let bigi = 121325436576634647676547673567563756863583568
console.log(bigi);


//string

let str1 ="добро пожаловать"
let str2 ='на курс'
let str3 =`Антон ${str1 + str2}`
console.log(str1)
console.log(str2)
console.log(str3)

//logic

let dotCheck = true
console.log(dotCheck)

let notDotCheck = false;
console.log(notDotCheck)

let one = 5
let two = 10
console.log(one < two)

// Null

let nuller = null
console.log(nuller)

// undefined
let text

console.log(text)


//typeof

typeof x 
typeof (x)
let firrstnum = 15
firrstnum = "YES! YES! YES!"
console.log(typeof (nuller))

console.log(typeof dotCheck)

console.log(typeof "Если бы")

// 3 лекция Функции

 document.getElementById("one").innerHTML = 123456
 document.getElementById("one").innerHTML = "Hello"
 document.getElementById("one").innerHTML = 
 document.getElementById("one").innerHTML = '<h1>Anime</h1>'

document.getElementsByClassName('two').innerHTML ="123"
 document.querySelector(".JoJo").innerHTML = '<b>JOJO</b>'
document.querySelectorAll('p').innerHTML = "Jotaro"

let inputIN = document.querySelector(".text-in")
let button = document.querySelector(".check-in")
let div = document.querySelector(".result")


 
button.onclick = function() {
    
    console.log("ДИО БРАНДО!!!")
 // console.log(inputIN.value)


let e = +inputIN.value
console.log(e)

let h = e + 15
console.log(h)

div.innerHTML =h
}