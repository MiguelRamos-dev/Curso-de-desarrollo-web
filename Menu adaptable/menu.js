$(document).ready(main);

var contador = 1;
function main() {
    $('.menu_bar').click(function(){
        //$('nav').toggle(150);

        if (contador==1)
        {
            $('nav').animate({
                left: '0'
            });
            contador = 0;            
        }
        else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });


}