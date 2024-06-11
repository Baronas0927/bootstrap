
//1 uzd
// Funkcija generuojanti atsitiktinį skaičių nuo 0 iki 300
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
const numbers = [];

for (let index = 0; index < 300; index++) {
    const randomNumber = getRandomNumber(301);
    numbers.push(randomNumber);

}
console.log(numbers.join(' '));

let countGreater150 = 0;
let numbersGreater275 = [];

for (const number of numbers) {
    if (number > 150) {
        countGreater150++;
    }
    if (number > 275) {
        numbersGreater275.push(number);
    }
}

console.log(`Skaiciu, didesniu uz 150, yra: ${countGreater150}`);
console.log(`Skaiciai, didesni uz 275: ${numbersGreater275.join(' ')}`);

//2 uzd. neiseina be kablelio paskutinio sk
for (let i = 0; i <= 3000; i++) {
    if (i % 77) {
        console.log(i + ',')
    }
}
//3 uzd. neveikia
function printAsteriskLine(n) {
    console.log('*'.repeat(n));
}
for (let i = 0; i < 20; i++) {
    printAsteriskLine(20);

}
//4 uzd.
function countDivisors(number) {
    // Patikrinama, ar skaičius yra mažesnis arba lygus 1
    if (number <= 1) {
        return 0;
    }

// Kintamasis daliklių skaičiui saugoti
let count = 0;

// Ciklas nuo 2 iki kvadratinės šaknies iš skaičiaus
for (let i = 2; i * i <= number; i++) {
    // Jei skaičius dalijasi iš i be liekanos, padidinamas daliklių skaičius ir pridedama daliklio pora (i ir number / i)
    if (number % i === 0) {
        count += 2;
     if (i * i === number) {
        // Atimamas vienas daliklis, jei kvadratinė šaknis yra tikslus daliklis
        count--;
        }
    }
}
    // Grąžinamas daliklių skaičius
    return count;
}
const divisorsCount = countDivisors(100);// Apskaičiuoja 100 daliklių skaičių
console.log(`Skaicius 100 turi ${divisorsCount} dalikliu.`);// Atspausdina rezultatą
document.querySelector("#i").innerHTML = HTML;
function doMore(text, h1) {

}
doMore("hi", 1);