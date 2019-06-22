(function() {
    var App = {
        Data: {},
        Controls: {

            numero: document.querySelector('.numeros'),
            calcular: document.querySelector('.calcular'),
            limpiar: document.querySelector('.limpiar'),
            suma: document.querySelector('.suma'),
            cadena: document.querySelector('.cadena'),

        },
        Handlers: {
            OnClick: function(event) {
                event.preventDefault();
                console.log(event);
                var data = App.Controls.numero.value;
                console.log(data);
                $.ajax({
                        type: 'POST',
                        url: '/api/Suma_Numeros1',
                        data: {
                            numero: data
                        }

                    }).then(function(res) {
                        if (res.suma != null) {
                            App.Controls.cadena.innerHTML = `La Cadena Ingresada es : ${res.cadena}`;
                            App.Controls.suma.innerHTML = `La Suma es: ${res.suma}`;
                        } else {
                            App.Controls.cadena.innerHTML = `Ingrese Numeros`;
                            App.Controls.suma.innerHTML = ` `;
                        }

                        console.log(res);
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
                    return `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            OnCalcular: function() {
                App.Controls.calcular.addEventListener('click', App.Handlers.OnClick)
            },
            OnClear: function() {
                App.Controls.limpiar.addEventListener('click', App.Handlers.OnClear);
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