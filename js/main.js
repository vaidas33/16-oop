import { Dog } from './animals/Dog.js';
import { Parrot } from './animals/Parrot.js';
import { Chicken } from './animals/Chicken.js';
// import { Cat } from './animals/Cat.js';


const rikis = new Dog('Rikis', 'baltas');
rikis.sound();
rikis.introduce();


const kapitonas = new Parrot('kapitonas', 'margas');
kapitonas.sound();
kapitonas.fly();
kapitonas.repeatSound('Duok sausaini!');
kapitonas.color = 'raudonas';

console.log(kapitonas);


const cypsius = new Chicken('cypsius', 'geltonas');
cypsius.sound();
cypsius.fly();
cypsius.introduce();

const pypsius = new Chicken('pypsius');
pypsius.introduce();