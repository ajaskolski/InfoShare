// var drinks = [
//     {name: '  Vodka', price: 19.99},
//     {name: 'Whisky  ', price: 40.00},
//     {name: 'Prosseco  ', price: 35.99},
//     {name: '  Beer', price: 3.20},
//     {name: '   Vine  ', price: 16.50},
//     {name: '  Gin  ', price: 23.30}
// ];
//
//
// var i;
// var id=0;
//
// for(i=0; i<drinks.length; i++){
//      id++;
//      console.log(drinks[i]['ID'] = id);
// }
//
//
// i=0;
// while(i<drinks.length){
//     console.log(drinks[i].name + ' ' + drinks[i].price);
//     i++;
// }


/* Dana jest tablica drinks*/

var drinks = [
    {name: 'Vodka', price: 19.99},
    {name: 'Whisky', price: 40.00},
    {name: 'Prosseco', price: 35.99},
    {name: 'Beer', price: 3.20},
    {name: 'Balieys', price: 50.20},
    {name: 'Bacardi', price: 35.50},
    {name: 'Vine', price: 16.50},
    {name: 'Gin', price: 23.30}
];

/* TODO.1: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
    - cena jest niższa 30.00 */

// var i;
// for(i=0; i<drinks.length; i++){
//     if (drinks[i].price > 30){
//         console.log(drinks[i].name)
//     }
// }


/* TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 */

// var i;
// for(i=0; i<drinks.length; i++){
//     if (drinks[i].price > 20 && drinks[i].price <= 40){
//         console.log(drinks[i].name)
//     }
// }

/* TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa ma więcej niż 4 litery */

// var i;
// for(i=0; i<drinks.length; i++){
//     if (drinks[i].name.length > 4){
//         console.log(drinks[i].name)
//     }
// }


/* TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa zaczyna się na literkę "B" lub na literkę "V" */
// var i;
// for(i=0; i<drinks.length; i++){
//     if (drinks[i].name.charAt(0) === 'B' || drinks[i].name.charAt(0) === 'V'){
//         console.log(drinks[i].name)
//     }
// }


/* TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
 - isExpensive: true jeśli cena jest wyższa niż 30
 - isExpensive: false jeśli cena jest niższa lub równa 30
 - oczekiwany, przykładowy efekt:
 { name: 'Bacardi', price: 35.50, isExpensive: true },
 { name: 'Vine', price: 16.50,  isExpensive: false } */

// var i;
// for(i=0; i<drinks.length; i++){
//     drinks[i].isExpensive = 'isExpensive';
//     if(drinks[i].price > 30){
//         drinks[i].isExpensive = 'true'
//     }
//     else{
//         drinks[i].isExpensive = 'false'
//     }
//     console.log(drinks[i]);
// }

/* TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
 - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę */

// var i;
// for(i=0; i<drinks.length; i++){
//     if (drinks[i].price === 50.20){
//         console.log(drinks[i].name)
//         break
//     }
// }


/* TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
    - "Cena _NAME_ wynosi _PRICE_"
    - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99
 */

// var i;
// for(i=0; i<drinks.length; i++){
//     if(drinks[i].price === 3.20 || drinks[i].price === 19.99){
//         console.log("Cena " + drinks[i].name + " wynosi " + drinks[i].price)
//     }
// }


// TODO: 0. W jednym console.logu(2 parametry) wyswietl index jezyka 'English' i nazwe ostatniego jezyka z langs
var langs = ['Polish', 'English', 'Spanish'];
//
// console.log(langs.indexOf("English") + ' ' + langs[langs.length - 1]);



// TODO: 1. Do tablicy users, dodaj nowego użytkownika na początku i na koncu tablicy
var logins = [
    {login: 'John', password: 'h4x'},
    {login: 'Kajtek', password: 'lubie_placki'},
];
//
// var endUser = {login: 'endUser', password: 'costam'};
// var startUser = {login: 'startUser', password: 'costam'};
//
// logins.push(endUser);
// logins.unshift(startUser)
//
// console.log(logins);

/* TODO: 2a. dodaj parametr isAvaiable do przedmiotw z kolekcji items jesli jest wyporzyczony przyjmuje wartosc false inaczej wartosc true
        2b. stworz kolekcje rentedItems ktora bedzie zawierala przedmioty z isAvaiable===false od najnizszego id do najwyzeszego przy zalozeniu ze w kolekcji items elementy posiadaja rosnace wartosci id
*/
var rentedItemsIds = [2, 5, 29, 32, 34];
var items = [
    {id: 1, name: 'Konewka'},
    {id: 3, name: 'Szlauf'},
    {id: 2, name: 'Łopata'},
    {id: 4, name: 'Grabki'},
    {id: 5, name: 'Doniczka1'},
    {id: 6, name: 'Sweter'},
    {id: 29, name: 'Krzesło'},
    {id: 32, name: 'Doniczka2'},
    {id: 38, name: 'Rura'}
];

// var i;
// for(i=0; i < items.length; i++){
//     items[i].isAvailable = "isAvailable";
//     if(rentedItemsIds.includes(items[i].id) ){
//         items[i].isAvailable = "false";
//     }
//     else{
//         items[i].isAvailable = "true";
//     }
//     //console.log(items[i]);
// }
//
// var rentedArray = [];
// for(i=0; i < items.length; i++){
//     if(items[i].isAvailable === "false") {
//         rentedArray.push(items[i]);
//     }
// }
//
// console.log(rentedArray.reverse());


/* TODO: 3a. Wyświtl obiekt użytkownika nieposiadającego hasła w konsoli
          3b Dla użytkownika nieposiadającego uzupełnionego hasła wyświetl w konsoli: "Proszę NAZWA_UZYTKOWNIKA o uzupełnienie hasła"
          3c Uzupełnij brakujące hasło w kolekcji users
  */
var users = [
    {login: 'Bartek', password: 'Testtest'},
    {login: 'Kamil', password: 'Testtest12'},
    {login: 'Agatka', password: 'Agatka1'},
    {login: 'Anastazja', password: '12341234'},
    {login: 'Władzia', password: 'XjsdSASDsd'},
    {login: 'John', password: null},
    {login: 'Bartek', password: 'SdsSsadsad'},
    {login: 'Asia', password: 'lubie_placki'}
];

// var i;
// for(i=0; i < users.length; i++){
//     if(users[i].password === null){
//         console.log("Haslo dla " + users[i].login + " zostało uzupelnione o losowy string 5 literowy");
//         users[i].password = Math.random().toString(36).substr(2, 5);
//     }
//     console.log(users[i])
// }

// TODO: 4. Jesli login w users zaczyna się na A albo W wyciągnij tych użytkowników i stwórz osobną tablice z tymi użytkownikami
/*TODO: 5a Powtarzajace sie hobby u pary uzytkownikow wyswietl w konsoli
        5b Wyswietl w konsoli "Hobby NAZWA_HOBBY jest wspoldzielone przez UZYTKOWNIK i UZYTKOWNIK "
*/
var persons = [
    {login: 'Bartek', hobby: ['tenis', 'poker', 'footbal']},
    {login: 'Kamil', hobby: ['pływanie', 'programowanie']},
    {login: 'Agatka', hobby: ['poker', 'taniec']},
];

var hobbiesMap = {};
for(var i = 0; i < persons.length; i++) {
    for(var j = 0; j < persons[i].hobby.length; j++) {
        if(!hobbiesMap.hasOwnProperty(persons[i].hobby[j])) {
            hobbiesMap[persons[i].hobby[j]] = [persons[i].login];
        } else {
            hobbiesMap[persons[i].hobby[j]].push(persons[i].login);
        }
    }
}

var hobbies = Object.keys(hobbiesMap);
for(var i = 0; i < hobbies.length; i++) {
    if(hobbiesMap[hobbies[i]].length > 1) {
        console.log(hobbiesMap[hobbies[i]].join(', ') + ' maja wspólne hobby ' + hobbies[i]);
    }
}











// var i;
// var array = [];
//
// for(i = 0; i < persons.length; i++) {
//     if(persons[i].login.charAt(0) === "A" || persons[i].login.charAt(0) === 'W'){
//         array.push(persons[i]);
//         persons.splice(i, 1);
//         i--;
//         }
// }
//
// console.log('Stara tablica\n', persons);
//
//
// console.log('Nowa tablice \n', array);





var people = [
    { login: 'Bon@yth', pin: 3410, password: 'w@4x@'},
    { login: 'Aver@num', pin: 5511, password: 'qa@a@xx@x'},
    { login: 'Ko@get', pin: '2220', password: '4@311'},
    { login: 'Dra@co', pin: 8890, password: 'v@v@'},
    { login: 'Rave@n', pin: '6551', password: 'an@ia15'},
    { login: 'Spa@wn', pin: 1211, password: 'q@we@'}
];

// TODO: 1. Puść pętlę po tablicy users. Sprawdź czy pin jest liczbą, jeśli nie to przerób go na liczbę

// var i;
// for(i = 0; i < people.length; i++) {
//     if(typeof people[i].pin !== 'number'){
//         parseInt(people[i].pin);
//     }
// }
// console.log((people));

// TODO: 2. Puść pętlę po tablicy users. Dodaj dynamicznie do obiektów pole isPasswordOK,

// var i;
// for(i = 0; i < people.length; i++) {
//     people[i].isPasswordOK = "isPasswordOK";
// }
// console.log((people));

// które ma mieć wartość true jeśli password jest dłuższy niż 5 liter, a jak nie to false

// TODO: 3. Puść pętlę po tablicy users. Usuń znak @ z każdego loginu.
// var i;
// for(i = 0; i < people.length; i++) {
//     people[i].login = people[i].login.replace(/@/g,"");
// }
//
// console.log((people));


// TODO: 4. Puść pętlę po tablicy users. Usuń znak @ z każdego password.

// var i;
// for(i = 0; i < people.length; i++) {
//     people[i].password = people[i].password.replace(/@/g,'');
// }
//
// console.log((people));
// TODO: 5. Puść pęte po tablicy users. Wyświetl w konsoli login z parzystych rekordów tablicy.

// var i;
// for(i = 0; i < people.length; i++) {
//     if( (i + 1) % 2 === 0){
//         console.log(people[i])
//     }
// }


// TODO: 6. Puść pęte po tablicy users. Wyświetl w konsoli login z nieparzystych rekordów tablicy.


// var i;
// for(i = 0; i < people.length; i++) {
//     if( (i+1) % 2 !== 0){
//         console.log(people[i])
//     }
// }

// TODO: 7. Napisz funkcję, która przerobi zdanie "ala ma kota" na zdanie "Ala Ma Kota".

// var string = "ala ma kota";
//
// string = string.split(' ');
//
// var i;
// var z;
// var newword = "";
//
// for(i = 0; i < string.length; i++){
//     for(z = 0; z < string[i].length; z++){
//         if(z === 0){
//             newword = newword + string[i].charAt(z).toUpperCase();
//         }else{
//             newword = newword + string[i].charAt(z);
//         }
//     }
//     newword = newword + ' ';
// }
// newword = newword.toString();
//
// console.log(newword);

// var a = "ala ma kota"
//
// function alA(x) {
//     var b = x.split(" ");
//     for (var i = 0; i < b.length; i++) {
//         b[i]=b[i].replace(b[i].charAt(0),b[i].charAt(0).toUpperCase())
//     }
//     console.log(b.join(" "))
// }
// alA(a);


