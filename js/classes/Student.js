// Vous mettrez ici le code de la classe Student

class Student  extends Person {
    #nombres;
    #moyenne;

    constructor(nom, prenom, age, genre, interet, nombres, moyenne) {
        super(nom, prenom, age, genre, interet)
        
        this.#nombres = nombres;
        this.#moyenne = moyenne;
    }

    get nombres() {
        return this.#nombres;
    }

    get moyenne() {
        return this.#moyenne;
    }
}