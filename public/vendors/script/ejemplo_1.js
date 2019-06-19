(function(){
    var App = {
      Data: {},
      Controls:{
        numero : document.querySelector('.numeros'),
        calcular: document.querySelector('.calcular')
      },
      Handlers: {
        OnClick :function(event){
            event.preventDefault();
            var data = App.Controls.numero.value;
            if(data == ''){
               data = null;
            }
            $.ajax({
                type:'POST',
                url:'/Suma_Numeros',
                data: {
                    numero:data
                }
 
            }).then(App.Handlers.onFormSubmitSuccess)
                .catch(App.Handlers.onFormSubmitError);
            console.log(event);
        },
        onFormSubmitSuccess: function(resp){
            console.log(resp);
          },
          onFormSubmitError: function(err){
            console.log(err);
          },
      },
      Methods: {
        init: function(){
          App.Methods.initExceptions();
         App.Methods.OnCalcular();
        },
        initExceptions: function(){
          App.Exceptions.UserException.prototype.toString = function(){
            return `[${this.date}] ${this.name}: ${this.message}`;
          };
        },
        OnCalcular: function(){
           App.Controls.calcular.addEventListener('click',App.Handlers.OnClick)
        },
      },
      Events: {},
      Helpers: {},
      Exceptions: {
        UserException: function(message){
          this.message = message;
          this.name = 'UserException';
          this.date = new Date();
        }
      },
    }
    App.Methods.init(); 
  })();