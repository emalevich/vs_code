
//1. Написать скриптик, который сосчитает и выведет 
//результат от возведения 2 в степень 10, начиная со степени 1

/*for(let step = 1; step < 11; step++) {
       console.log(2 ** step);     
}*/      
              //ИЛИ

/*for(let step = 1; step < 11; step++) {
    console.log(Math.pow(2,step))     
         }*/


/*1*  Преобразовать 1 задачу в функцию, принимающую на вход степень, 
в которую будет возводиться число 2 */

/*function stepen(n, x){
    let num = n ** x
    console.log(num)
}
stepen(2, 2)
stepen(2,6)
stepen(2, 10)*/

             //ИЛИ РЕШЕНИЕ

/*function pow(counter){
    for( let i=1; i <= counter; i++){
        console.log(2 ** i)
    }
}
pow(10)*/

/* 2.Написать скрипт, который выведет 5 строк в консоль таким образом, 
чтобы в первой строчке выводилось :), во второй :):) и так далее */

/*let result = '';
let smile = ":)"
for (let a = 1; a < 6; a++){
        console.log(result += smile)
}*/

// ИЛИ ЧТОБЫ НЕ СОЗДАВАТЬ ЛИШНИЕ ПЕРЕМЕННЫЕ ЕСТЬ КЛЮЧЕВОЕ СЛОВО REPEAT
    /*let smile = ":)"
for (let a = 1; a < 6; a++){
    console.log(smile.repeat(a))
} */

function smilik(str, numberofRows){
    for (let a = 1; a <= numberofRows; a++){
        console.log(str.repeat(a))
}
}
smilik(":(", 10)
