// Vous mettrez ici le code de la classe Student
class Student  extends Person {
    #nombres;
    #moyenne;

    constructor(nombres, moyenne) {

        console.log(Student)
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