function UpdateTime(){
    
    let display = document.querySelector('.display');

    let agora = new Date();
    
    let horario = CorrigirH(agora.getHours()) + ':' + CorrigirH(agora.getMinutes()) + ':' + CorrigirH(agora.getSeconds());

    display.textContent = horario;
}

function CorrigirH(numero){
    if (numero < 10) {
        numero = '0' + numero;
       
    } 
    return numero;
}


setInterval(UpdateTime, 1000);





