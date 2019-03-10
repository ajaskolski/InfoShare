
/* closures to stan funkcji*/


/*
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem*/
//
// function sum(a,b) {
//     return a+b
// }
//
// console.log('suma to ', sum(5,6));

/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */

//
// function zwrotka(firstName, lastName) {
//     return console.log('Hello my dear', firstName)

// }

// var zwrotka = function(firstName, lastName) {
//     return console.log('Hello my dear', firstName)
//
// };

// var greeting = zwrotka('Tomek', 'Wesoly');


/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */

// function nowazwrotka(firstName, lastName) {
//      return console.log('Hello my dear',firstName,lastName, 'I love You');
// }
// nowazwrotka('Tomek', 'Wesoly');
//
//
//
//
// // TODO: 4. Opakuj kod z tego pliku w IIFE.
//
// (function () {
//     function nowazwrotka(firstName, lastName) {
//         return console.log('Hello my dear',firstName,lastName, 'I love You');
//     }
//     nowazwrotka('Tomek', 'Wesoly');
// })();


/*
 =====================================================
 EXTRA TASKS
 =====================================================
/*
1. Napisz funkcje, która zwraca losową całkowitą liczbę, w zadanym zasięgu (zasięg to dwa parametry - min i max):
 e.g getRandomValue(1, 10) - zwraca losową, całkowita liczbę w zasięgu od 1 do 10
 e.g getRandomValue(100, 1023) - zwraca losową, całkowita liczbę w zasięgu od 100 do 1023

 -----------------------------------------------------
 CODE GOES BELOW */
// var min;
// var max;
//
// function getRandomValue(min,max) {
//     return parseInt(Math.random() * ((max + 1) - min) + min);
// }
// console.log(getRandomValue(1,5));
/*
 -----------------------------------------------------
2. Napisz funkcję, która jako parametr przyjmuje Twoje imię i nazwisko,
 i zwraca Twoje inicjały rozdzielone kropką.
 e.g getInitials("John Doe") - zwraca "J.D."

 -----------------------------------------------------
 CODE GOES BELOW */
// var name = 'Adrian';
// var surname = 'Jaskolski';
//
// function initials(name, surname) {
//     var nameSplit = name.split('');
//     var surnameSplit = surname.split('');
//
//     var firstLetterName = nameSplit[0];
//     var firstLetterSurname = surnameSplit[0];
//
//     return console.log(firstLetterName + '.' + firstLetterSurname);
// }
//
// initials(name, surname);

/*
 -----------------------------------------------------

3. Napisz funkcję, która jako parametry przyjmuje dwa stringi.
    - Pierwszy parametr to zdanie.
    - Drugi parametr to słowo, które ma w tym zdaniu zostać zastąpione trzema gwiazdkami.
    - funkcja finalnie ma zwracać poprawione zdanie, tzn:

   e.g validateSentence("kurde co za dzień", "kurde"); // OUTPUT: "*** co za dzień";

   ** zadanie z gwiazdką - zrób tak, aby powyższa funkcja podmieniała każde wystąpienie przekazanego słowa
   e.g validateSentence("kurde co za dzień, kurde", "kurde"); // OUTPUT: "*** co za dzień, ***";

 -----------------------------------------------------
 CODE GOES BELOW */

// var sentence = 'Fajne zdanie kurde ale kurde nie bedzie \n ' +
//     'tak zle kuRde';
// var word = /kurde/gi;
//
// function validateSentence(sentence, word) {
//     return console.log(sentence.replace(word, '***'));
// }
//
// validateSentence(sentence, word);

/*
 -----------------------------------------------------
 */

// //Create an empty constructor function
// function Person(){
//
// }
// //Add property name, age to the prototype property of the Person constructor function
// Person.prototype.name = "Ashwin" ;
// Person.prototype.age = 26;
// Person.prototype.sayName = function(){
//     console.log(this.name);
// };
//
// //Create an object using the Person constructor function
// var person1 = new Person();
// var person2 = new Person();
//
// person2.prototype = 'Noweimie';
//
// //Access the name property using the person object
// console.log(person1);// Output" Ashwin
// //console.log(person2.name);// Output" Ashwin

/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków

// function stringLenght(string){
//     console.log(string.length)
// }

// stringLenght('1234567');

// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.

// var str = '       1234567     ';
//
// function stringTrim(x){
//     console.log(x.trim());
// }
//
// stringTrim(str);


// cleanText('foobar');
/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o';
*/

// var nameOne = 'Rambo';
//
// function rozbite(x){
//     console.log(x.split(''));
// }
// rozbite(nameOne);


/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/
//
// var text = 'EXPIRED';
//
// function substr(x) {
//     console.log(x.substr(text.length - 3, 3))
// }
//
// substr(text);

// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"


var text = 'sdfsdfsdfsdfaasdfs';

function capitalize(x) {
    console.log(x.charAt(0).toUpperCase());
}

capitalize(text);

// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej
// var urlToReplace = 'users/{id}';
//
// var regexp = /{id}/gi;
//
// function replace(x) {
//     console.log(x.replace(regexp,'3'));
// }
//
// replace(urlToReplace);

/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki
*/

// var text1 = '           malelitery          ';
//
// function allIn(x) {
//     console.log(x.trim().toUpperCase().substring(0,2));
// }
//
// allIn(text1);


/*
 =====================================================
 DATE: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
 =====================================================
 Wskazówki do zadań:
- Date.now() - zwraca aktualną datę
- Obiekty typu date można odejmować - różnica jest czasem podanym w milisekundach
*/

/*1. Napisz funkcję, która obliczy ile mineło godzin pomiędzy dwoma datami.
    przykład: getHours("1995,12,01", "2000,03,04") - 37320
 -----------------------------------------------------
*/

// var datetime1 = new Date('1995,12,01');
// var datetime2 = new Date('2000,03,04');
//
//
// function getHours(d1, d2) {
//     console.log((d2-d1)/3600000);
// }
//
// getHours(datetime1,datetime2);


/*
 -----------------------------------------------------

 2. Napisz funkcję, której podasz datę swoich urodzin, a ona zwróci Twój wiek w z dokładnością
    do dwóch liczb po przecinku

 -----------------------------------------------------
*/
//
// var datetime1 = new Date('1989, 05, 11');
//
// function getHours(d1) {
//     console.log(((Date.now() - d1)/3.154e+10).toFixed(2));
//
// }
// getHours(datetime1);

//
//  var data = [
//     {
//         name: 'Butters',
//         age: 3,
//         type: 'dog'
//     },
//     {
//         name: 'Lizzy',
//         age: 6,
//         type: 'dog'
//     },
//     {
//         name: 'Red',
//         age: 1,
//         type: 'cat'
//     },
//     {
//         name: 'Joey',
//         age: 3,
//         type: 'dog'
//     },
// ];
//
// function getAges(data) {
//     var sum = 0;
//     for (var i = 0; i < data.length; i++){
//         if (data[i].type === 'dog'){
//             var tempAge = data[i].age;
//             sum += (tempAge * 7);
//         }
//     }
//     return sum;
// }
// console.log(getAges(data));

/*
 =====================================================
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 =====================================================

 /*
  1. a:Napisz metode która zapisuje cars do localStorage
     b:Napisz metode ktora pobiera cars z localStorage

// 2. Dodaj metode która przed zapisywaniem będzie usuwała samochody z cena < 60000
*/


var cars = [{
    manufacturer: 'Porsche',
    model: '911',
    price: 666,
    currency: 'USD',
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
},{
    manufacturer: 'Nissan',
    model: 'GT-R',
    price: 80000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
},{
    manufacturer: 'BMW',
    model: 'M3',
    price: 60500,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
},{
    manufacturer: 'Audi',
    model: 'S5',
    price: 53000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
},{
    manufacturer: 'Audi',
    model: 'TT',
    price: 40000,
    currency: 'USD',
    wiki:'http://en.wikipedia.org/wiki/Audi_TT',
}];

//2 zadanie
// let filteredPrice = cars.filter((car) => {
//     return car.price < 60000;
// });
//
// console.log(filteredPrice);

// 3. Dodaj metode która po pobraniu zamieni cene na złotowki
// let toPLN = cars.map((car) => {
//     let exchangeRateUSDPLN = 3.7;
//     car.currency = 'PLN';
//     car.price *= exchangeRateUSDPLN;
//     return car
// });
//
// console.log(toPLN);

// 4. Dodaj metode która po pobraniu sprawdzi czy znajduje sie samochod o wartosci 666
//  jesli tak to usunie dane z localStorage
localStorage.setItem('cars', JSON.stringify(cars));
cars = localStorage.getItem('cars');
console.log(cars = JSON.parse(cars));

// let filteredCars = cars.filter((car) => {
//     if(car.price !== 666) {
//         return car
//     }
// });


localStorage.setItem('cars', JSON.stringify(filteredCars));
cars = localStorage.getItem('cars');
console.log(cars = JSON.parse(cars));


