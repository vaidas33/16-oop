import { Dog } from './SingleDog.js';

const rexius = new SingleDog('Rexas', 'rudas', 'Vokieciu aviganis');
const brisius = new SingleDog('Brisius', 'pilkas', 'Lietuvos lenciuginis');

// console.log(rexius);
// console.log(brisius);

// console.log(rexius.breed);
// console.log(brisius.breed);

// introduce - prisistatyk
rexius.introduce();
brisius.introduce();

console.log(rexius.lovedPeople);
rexius.addLovedPerson('Andrejus');
rexius.addLovedPerson('Zygimantas');

rexius.move(5);




/*

Gyvunai kaip objektai:
- turi:
    - varda
    - spalva
    - veisle
    - judejimo greitis = 0
- gali:
    - prisistatyk
    - isskleisti garsa
    - judeti

*/