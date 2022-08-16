/*function Queue() {
    // Implementa la clase Queue
    // enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
    // dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
    // size:   Devuelve el número de elementos que contiene la queue.

    this.array = [];
}*/


class Queue {
    constructor(){
        this.array = [];
    }
    enqueue(element) {
        return this.array.push(element);
    }
    dequeue() {
        if(this.array.length > 0) {
            return this.array.shift();
        }
    }
    
    size(){
        return this.array.length;
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(18);
//queue.dequeue();
//queue.dequeue();
console.log(queue.array);
console.log(queue.size());

//--------------------------------------------------------------------------------

function cardGame() {
    // Implementar la función cardGame: a partir de dos Queue que va a recibir como paráemtros tiene
    // que determinar quién será el ganador del juego de cartas. Las reglas de dicho juego son las siguientes:
    //    - Cada jugador tendrá un mazo con cartas numeradas del 1 al 12
    //    - Estos mazos estarán implementados a partir de la estructura de Queue.
    //    - En cada turno del juego, cada jugador lanzará la carta que se encuentre primero en su mazo (Queue)
    //    - El jugador que tenga el número más alto en el turno ganará dicho turno
    //    - El jugador que gane dicho turno se quedará con ambas cartas agregándolas al final del mazo (Primero
    //    la suya y luego la de su contrincante)
    //    - En el caso de que haya empate ambos pierden las cartas y no se agregan a ningún mazo
    //    - El ganador del juego será quien deje a su oponente sin cartas en su mazo
    // Aclaración: la función cardGame debe retornar "A wins!" en el caso de que el ganador sea el jugador A o
    // "B wins!" en caso contrario. [Puede ocurrir que haya empate, en dicho caso retornat "Game tie!"]
    // Ejemplo:
    //    - mazoUserA = [4,2,10,11]
    //    - mazoUserB = [6,9,10,3]
    //    Primer mano:
    //     A --> 4  vs  6 <-- B [6 > 4 entones gana la mano B y pone ambas cartas en su mazo, colocando primero la suya]
    //    - mazoUserA = [2,10,11]
    //    - mazoUserB = [6,9,10,3,6,4]


    var mazoUserA = [1,1,1,1]
    var mazoUserB = [1,1,1,1]

    //[1,2,2,1]

    //[1,1,2,1]

    while((mazoUserA.length > 0) && (mazoUserB.length > 0)){

    if(mazoUserA[0]===mazoUserB[0]){ 
        mazoUserA.shift()
        mazoUserB.shift()
    }else if(mazoUserA[0]>mazoUserB[0]){
        mazoUserA.push(mazoUserB.shift())
    }else mazoUserB.push(mazoUserA.shift())
    
    }

    if(mazoUserA.length === mazoUserB.length){
        return "Game tie!"
    }else if(mazoUserA.length === 0){
        return "B wins!"
    }else return "A wins!"

}
console.log(cardGame())

//--------------------------------------------------------------------------------

function sets() {
    // Implementa el metodo sets    
    // Usar el objeto set para obtener la cantidad de elementos iguales en dos arreglos
    // Muestra la cantidad
    // Aqui tu codigo
}