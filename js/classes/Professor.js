// Vous mettrez ici le code de la classe Professor

class Professor extends Person {
    #sujet;

    constructor(sujet) {
        super(nom, prenom, age, genre, interet)

        this.#sujet = sujet;
    }

    get sujet() {
        return this.#sujet;
    }
}