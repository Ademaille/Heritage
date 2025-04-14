// Vous mettrez ici le code de la classe Professor
class Professor extends Person {
    #sujet;

    constructor(sujet) {

        console.log(Professor)
        this.#sujet = sujet;
    }

    get sujet() {
        return this.#sujet;
    }
}