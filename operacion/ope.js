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

 const numero_pares = function(tama) {
     var tamano = parseInt(tama);
     var aleatorio;
     var arreglo = new Array();
     var arreglo2 = new Array();
     var cadena = "";
     var contador = 0;
     var numerosIguales = new Array();
     var w = 0;
     var variable = 1;
     var co = 0;


     for (let index = 0; index < tamano; index++) {

         for (let i = 0; i < tamano; i++) {
             aleatorio = Math.floor(Math.random() * 10);
             arreglo.push(aleatorio);

         }
     }



     for (let y = 0; y < arreglo.length; y++) {

         w = arreglo2.indexOf(arreglo[y]);
         if (w == -1) {

             arreglo2.push(arreglo[y]);
         }

     }


     for (var d = 0; d < arreglo2.length; d++) {

         for (var wa = 0; wa < arreglo.length; wa++) {

             if (arreglo2[d] === arreglo[wa]) {
                 numerosIguales.push(arreglo[wa]);

             }

         }

     }


     for (var a = 0; a < arreglo2.length; a++) {
         co = 0;
         for (var b = 0; b < numerosIguales.length; b++) {
             if (arreglo2[a] === numerosIguales[b]) {
                 co++;

                 if (co == 2) {
                     contador++;
                     co = 0;
                 }
             }
         }

     }
     for (let index = 1; index <= arreglo.length; index++) {

         cadena = cadena + '\t' + arreglo[index - 1] + ',';
         if ((index % tamano) == 0) {
             cadena = cadena + '\n';
         }

     }
     console.log(arreglo);

     console.log(arreglo2);
     console.log(numerosIguales);
     return {
         contador,
         cadena
     };
 }

 module.exports = {
     suma_numero,
     suma_diagonal,
     numero_pares


 }