(function() {
    var App = {
        Data: {},
        Controls: {
            numero: document.querySelector('.numeros'),
            calcular: document.querySelector('.calcular'),
            limpiar: document.querySelector('.limpiar'),
            suma: document.querySelector('.suma'),
            cadena: document.querySelector('.cadena'),
            resultado: document.querySelector('.resultado'),

        },
        Handlers: {
            OnClick: function(event) {
                event.preventDefault();
                var tama = App.Controls.numero.value;

                $.ajax({
                        type: 'POST',
                        url: '/api/Pares_matriz',
                        data: {
                            numero: tama
                        }

                    }).then(function(data) {
                        console.log(data.resp);
                        if (data.resp.contador != 0) {
                            App.Controls.resultado.innerHTML = '';

                            App.Methods.imprimir_arreglo(data.resp.cadena, tama);
                            App.Controls.cadena.innerHTML = `El arreglo ${tama} X ${tama}`;
                            App.Controls.suma.innerHTML = `En la Matriz tiene : ${ data.resp.contador } Pares`;
                        } else {
                            App.Controls.cadena.innerHTML = `Ingrese Numero`;
                            App.Controls.suma.innerHTML = ``;
                            App.Controls.resultado.innerHTML = '';

                        }


                    })
                    .catch(
                        function(error) {
                            App.Controls.cadena.innerHTML = error;
                        }
                    );
                console.log(event);
            },
            OnClear: function() {
                App.Controls.numero.value = '';
                App.Controls.resultado.innerHTML = '';
                App.Controls.cadena.innerHTML = ``;
                App.Controls.suma.innerHTML = ``;
            },

        },
        Methods: {
            init: function() {
                App.Methods.initExceptions();
                App.Methods.OnCalcular();
                App.Methods.OnClear();
            },
            initExceptions: function() {
                App.Exceptions.UserException.prototype.toString = function() {
                    return ` [${ this.date }] ${ this.name }: ${ this.message }`;
                };
            },
            OnCalcular: function() {
                App.Controls.calcular.addEventListener('click', App.Handlers.OnClick)
            },
            OnClear: function() {
                App.Controls.limpiar.addEventListener('click', App.Handlers.OnClear);
            },

            imprimir_arreglo: function(cadena, tamano) {
                var cade;
                cade = cadena.split(',')

                for (let index = 1; index <= cade.length - 1; index++) {


                    App.Controls.resultado.innerHTML = App.Controls.resultado.innerHTML + '&nbsp;&nbsp;' + cade[index - 1];



                    if ((index % tamano) == 0) {
                        App.Controls.resultado.innerHTML = App.Controls.resultado.innerHTML + '<br>';
                    }

                }

            }
        },
        Events: {},
        Helpers: {},
        Exceptions: {
            UserException: function(message) {
                this.message = message;
                this.name = 'UserException';
                this.date = new Date();
            }
        },
    }
    App.Methods.init();
})();