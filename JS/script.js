function atualizarTempo(){
    var display1 = document.querySelector('#hour')
    var display2 = document.querySelector('#minute')
    var display3 = document.querySelector('#second')

    var agora = new Date();
    
    var hour = corrigirHorario(agora.getHours())
    
    var minute = corrigirHorario(agora.getMinutes())
    
    var second = corrigirHorario(agora.getSeconds())
    
    display1.textContent = hour;
    display2.textContent = minute;
    display3.textContent = second;

    
}

function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

setInterval(atualizarTempo, 1000);

// console.log(hour);