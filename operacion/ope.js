 
 /*
 *
 *
 * 
 * 
 * 
 */
 
 
 const suma_numero = function(numero){
    
    var suma = 0;
    let cadena =  numero;
    var arr = [];
    arr.push(cadena.split(','));
    for (var index = 0; index < arr[0].length; index++) {
        suma = suma + parseInt(arr[0][index]);
        
    }
    return suma;
 }

 module.exports = {
    suma_numero,
    
  }