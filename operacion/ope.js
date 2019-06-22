 /*
  *
  *
  * 
  * 
  * 
  */


 const suma_numero = function(numero) {

     var suma = 0;
     let cadena = numero;
     var arr = [];
     arr.push(cadena.split(','));
     for (var index = 0; index < arr[0].length; index++) {
         suma = suma + parseInt(arr[0][index]);

     }
     return suma;
 }

 const suma_diagonal = function(tam) {
     var tamano = parseInt(tam);
     var aleatorio;
     var arreglo = new Array();
     var cadena = "";
     var suma = 0;

     for (var index = 0; index < tamano; index++) {

         for (let i = 0; i < tamano; i++) {
             aleatorio = Math.floor(Math.random() * 10);
             arreglo.push(aleatorio);

         }
     }

     for (var z = 0; z < arreglo.length; z++) {

         if ((z % (tamano + 1)) == 0) {
             suma = suma + arreglo[z];
         }

     }
     for (var index = 1; index <= arreglo.length; index++) {

         cadena = cadena + '\t' + arreglo[index - 1] + ',';
         if ((index % tamano) == 0) {
             cadena = cadena + '\n';
         }

     }

     return {
         'suma': suma,
         'cadena': cadena
     }

 }

 module.exports = {
     suma_numero,
     suma_diagonal


 }