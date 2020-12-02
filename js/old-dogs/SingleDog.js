class SingleDog {
    constructor(vardas, spalva, veisle) {
        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
        this.speed = 0;
        this.maxSpeed = 30;
        this.isRunning = false;
        this.isSitting = true;
        this.lovedPeople = [];
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} (${this.breed}) ir mano kailis yra ${this.color}`);
    }

    move(speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->', this.speed);
    }

    addLovedPerson(personName) {
        this.lovedPeople.push(personName);
        console.log(this.lovedPeople);
    }
}

export { SingleDog }