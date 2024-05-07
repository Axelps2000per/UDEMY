//ESTE ES EL FICHERO ESTERNO

function displayName()
{
    document.write("Axel Pardo Santana");
    document.write("</br>")
}

function sayHello()
{
    document.write("Hola, qué tal? :D");
}

function displayScore(){
    var playerScore = 2018;
    document.write("<p>La puntuación del jugador es: "+playerScore+ "</p>");
}

//FUNCIONES PARAMETRIZADAS
//Parámetros de entrada
//Devuelve un parámetro de salida o RETURN
//REGLA: Si una función esta bien hecha siempre deberá devolver algo.

function displayPlayerScore(thePlayerScore)
{
    thePlayerScore += 100; // thePlayerScore = thePlayerScore + 100
    document.write("<b>" + thePlayerScore + "</b></br>");
}

function addTwoNumbers(x , y){
    var addition = x + y;
    document.write("<b>" + addition + "</b></br>");
    return(addition);
}