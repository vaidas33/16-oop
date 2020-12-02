import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, furColor) {
        super(name, furColor);

        this.voice = 'Au au!';
    }
}

export { Dog }