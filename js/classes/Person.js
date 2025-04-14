// Vous mettrez ici le code de la classe Person
class Person {
    #nom;
    #prenom;
    #age;
    #genre;
    #interet;

    constructor(nom, prenom, age, genre, interet) {

        this.#nom = nom;
        this.#prenom = prenom;
        this.#age = age;
        this.#genre = genre;
        this.#interet = interet;
    }

    get nom() {
        return this.#nom;
    }

    get prenom() {
        return this.#prenom;
    }

    get age() {
        return this.#age;
    }

    get genre() {
        return this.#genre;
    }

    get interet() {
        return this.#interet;
    }
}