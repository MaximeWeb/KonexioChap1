const continent = "Europe";
const country = "english";
let population = 51;

let langage = "francais"
let finland = 6
const age = 27
const year = 1996
const now = 2023
const name = "Maxime";
const userName = "Neyret"
let average = 33


let description = `${country} ,is in ${continent} and its ${population} inhabitants speak ${langage}`

population /= 2
population++

console.log(population > finland)
console.log(population < 33)
console.log(description)
console.log(continent, country, population)

console.log(langage)


if (population > average) {
    console.log(`${country}'s population is above  average`)

} else {

    console.log(`${country}'s population is ${average - population} below average `)
}

let RandomNumber = '40';

console.log(Number(RandomNumber), age)
console.log(+(RandomNumber) + 10);
console.log(typeof String(30));
console.log(" 19 " - " 13 " + "17 ");
console.log("19 " - "13" + 17);
console.log(" 123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

let money = 0
if (money) {
    console.log(" no money")
} else {
    console.log("go to work")
}

/* const Message = Number(prompt("Please tap a word"))

if ( Message === 7 ) {
    console.log("7 is a good number");
} else if (Message === 9) {
    console.log("9 is also a good number")
} else if (Message === 10 ) {
    console.log(" 10 is the best number , congrat ! ");
} else  {
    console.log(" Bad number ")
} */
/*
const numNeighbours = Number(prompt("how many country is beside yours ?"))

if (numNeighbours === 1) {
    alert("Only one country is beside yours")
} else if (numNeighbours > 1) {
    alert("More than one country beside yours")
} else {
    alert("No country beside yours")
} */

let age2 = 20
let goodView = true


// AND operator &&
// OR operator ||
// NOT !

if (age2 >= 18 && goodView) {
    console.log("you can drive");
} else {
    console.log("no drive");
}

if (age2 >= 18 || goodView) {
    console.log("you can drive");
} else {
    console.log("no drive");
}


if (!age2 >= 18 || !goodView && isTired) {
    console.log("you can drive");
} else {
    console.log("no drive");
}


if ( langage === "english" && population < 50 && !isIsland) {
    console.log("true");
} else {
    console.log("false");
}

let scoreDauphin = (96 + 108 + 89) / 3 ;
console.log(scoreDauphin)
let scoreKoala = (8 + 91 + 110) / 3 ;
console.log(scoreKoala)


if (scoreDauphin > scoreKoala) {
    console.log("Dauphin win")
} else if (scoreKoala > scoreDauphin ) {
    console.log(" koala win") 
} else {
    console.log("Nobody winned")
}

const day = "monday"

switch(day) {
case 'monday' : 

     console.log("Meeting to prepare")
     console.log("Go to the swimming pool")
break
 case 'Tuesday' : 

       console.log("Doing some shopping")
break
case 'wednesday' :
break
case 'thursday' : 
break
case 'Saturday' : 
       console.log("Sleep")
break
case 'sunday' : 
       console.log("Sleep more")
break
default: 
console.log('This day doesnt exist') 
}

switch(langage) {
    case 'chinese': 
    console.log('is chinese')
    break
    case 'spanish': 
    console.log("is spanish")
    break
    case 'english': 
    console.log("english")
    break
    case 'hindi': 
    console.log('hindi')
    break
    case 'francais': 
    console.log('french')
    break
 default:
    console.log('This language doesnt exist')
}

console.log(` ${country} population is ${ population >= 33 ? "above" : "bellow" } average `)


let tips = 275 * 15 / 100

console.log(tips);

console.log(`${tips}`)



















