/*let userEyesColor
let user
let userName
userName = 'Вася'
user = userName
console.log(user)*/

//Objects
/*let userInfo ={
    name : 'Freelancer',
    age: 27
}
console.log(userInfo)
console.log(typeof userInfo)*/


//преобразование типов
//Строковое преобразование
/*let userAge = 27
console.log(userAge)
console.log(typeof userAge)
userAge = String(userAge);
console.log(userAge + typeof userAge)*/


/*let userTrue = true;
console.log(userTrue + typeof userTrue);
userTrue = String(userTrue)
console.log(userTrue + typeof userTrue)*/

//Числовое преобразование  
/*let userAge = "58";
console.log(userAge + typeof userAge);
userAge = Number(userAge);
console.log(userAge + typeof userAge);

let user = "72" / "2";
console.log(user + typeof user);*/


/*let age = " ";
console.log(age+ typeof age);
age = Boolean(age)
console.log(age + typeof age)
//0 будет false*/
//а строка со значением "0" или с пробелом " " будет true

//let k = 5 ** 3;
//console.log(`result : ${k}`) 


//Операторы сравнения
//СРАВНЕНИЕ СТРОК
//console,log('Б' > 'А' )  true
//console,log('Скрипт' > 'Скрипка' )  true
//console,log('Слайдер' > 'Слайд' )  true
//console,log('Фрилансер' > 'фрилансер' )  false


/*let num = 1;
while (num <6){
    console.log(num);
    num++;
}

let numm = 1;
for (;numm < 6; numm++) {
    console.log(numm)
}*/
/*let num = 0;
while (num < 3){
    console.log(`число: ${num}`);
    num++;
}*/
/*firstfor: for (let num = 0; num <2; num++){
    for (let size =0; size < 3; size++){
        console.log(size);
        if (size = 1) break firstfor
    }
}*/


/*function pow(x, n){
    let result = 1;
    for (let i =0; i < n; i++){
        result *= x;}
        return result;
}
console.log(pow(2, 3))

function ror(x, n){
    if(n == 1){
        return x;
    } else {
        return x * ror(x, n -1);
    }
    }
console.log(ror(2, 4))

const result = Math.pow(2, 3)
    console.log(result)

    const resul = Math.round(10.25)
    console.log(resul)


const text = 'Never forget what you are, for surely the world will not';
const out = text[0]+ text[text.length -1]

console.log(`First: ${out[0]}\nLast: ${out[1]}`)
console.log(Math.round(Math.random())*10)*/


/*const name_1 = "Robbb";
console.log(name_1[name_1.length-1])*/


/*let firstName = '  Grigor   \n';
firstName = firstName.trim()

console.log(firstName)*/

/*const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text.slice(5, 15).trim())*/

/*const showGreeting = () => {
    const text = 'Hello, Hexlet';
    console.log(text)
    };
    showGreeting()*/

    /*const greeting = () =>{
        return 'Hello hexlet'
    };
    const message = greeting()
console.log(message)


function square(x) {
   
    return x*x;
    }
console.log(square(4))*/

//И напечатает текс консоль лог и вернет значение от ретурн
/*const greetingWithReturnAndPrinting = () => {
    console.log('Я появлюсь в консоли');
    return 'Hello, Hexlet!';
  };
  const message = greetingWithReturnAndPrinting ();

console.log(message)*/
/*const doubleFive = () => {
    // или return 5 + 5
    const result = 5 + 5;
    return result;
  };
console.log(doubleFive())


function sayHurrayThreeTimes(){
    return 'hurray! hurray! hurray!'
  }
  
  console.log(sayHurrayThreeTimes())

  console.log("hello".slice(0, 3))*/



/*const truncate = (text, length) => {
let word = text.slice(0, length)+'...';
console.log(word);
} 
truncate('helloooooo', 6)*/

// СОКРАТИТЬ длинный текст и подставить многоточие
/*function truncate(text, length){
    let word = text.slice(0, length)+'...';
    console.log(word);   
}
truncate('babyyy', 3)*/


//Скрыть часть текста, подставив повторяющиеся символы
/*function getHiddenCard(cardnum, x = 4){
    let hide = '*'.repeat(x);
    let num = hide + (cardnum.slice(12, 16));
    console.log(num)
}
getHiddenCard('1234567891234567')

const getHiddenCard = (cardNumber, x = 4) => {
    let hideSymbols = '*'.repeat(x);
    return (hideSymbols + cardNumber.slice(12, cardNumber.length))
    }
    console.log(getHiddenCard('1234123412341234'))*/




// Преобразовать первую букву в заглавную
    /*const capitalize = (text) => text[0].toUpperCase()+ text.slice(1, text.length)
    console.log(capitalize('kdjfello'))*/

    const isInternationalPhone = (phoneNumber) => phoneNumber[0] === '+'
    console.log(isInternationalPhone('+241354'))