function calculate(a, b, callback) {
    callback(a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }

/* Llamada de la funcion */
  calculate(2, 3, displayResult);

/* Para entenderlo mejor:
Se declara calculate que recibe 3 parametros, a/b y una funcion. Se llama callback xq es una funcion que es llamada dentro de otra.

Dentro de calculate, el codigo es el siguiente: La funcion callback recibe la suma de a + b como parametro.
Notar que el callback no hace la suma debido a que los argumentos ya se pasan sumados.

El callback hace lo siguiente:
Es una segunda funcion que recibe un solo argumento (result)
Esta funcion solamente imprime un resultado en consola.

Porque funciona?
Cuando se llama a la funcion calculate, recibe todos los parametros que requiere, incluida la funcion callback que termina siendo la segunda funcion que definimos. 
Se ejecuta la suma dentro de calculate y luego se muestra el resultado en la segunda funcion.

Entonces, la primera funcion hace el calculo de suma y la segunda (callback) lo imprime. 

https://www.youtube.com/watch?v=frm0CHyeSbE

*/



