
    
    var x = parseInt(prompt("Escriba el primer nro a operar"));
    var y = parseInt(prompt("Escriba el segundo nro a operar"));
    var op = prompt("la operación a hacer: +, -, *, /,");

    switch (op)
    {
        case"+":
            Result = (x + y);
            alert("La suma de "+ x +" y "+ y +" es: "+ Result +"!!");
        break;

        case"-":
            Result = (x - y);
            alert("La resta de "+ x +" y "+ y +" es: "+ Result +"!!");
        break;

        case"*":
            Result = (x * y);
            alert("La multiplicación de "+ x +" y "+ y +" es: "+ Result +"!!");
        break;

        case"/":
            Result = (x / y);
            alert("La división de "+ x +" y "+ y +" es: "+ Result +"!!");
        break;
        
        /*Cosas que nos pueden Servir EN JAVASCRIPT
        if (isNaN)
        while (isNaN)
        */
    }

    