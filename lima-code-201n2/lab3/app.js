for(let i=0;i<4;i++){
    let numero=parseInt(prompt('ingresa mi edad'));
    if( numero===27){
        alert('genial');
        break;
    }else if(numero > 27){
        alert('el numero es demasiado alto');
    } else{
        alert('el numero es demasiado bajo');
    }
    alert('la respuesta correcta es 27');
}

let arr=["salsa","rock","pop"];
intentos=0
while(intentos<6){
    intentos +=1;
    let q7=prompt('Adivina que musica escucho').toLowerCase();
    for(let j=0;j<arr.length.toLowerCase();j++){
        if(q7===arr[j]){
            alert('genial adivinastes');
            break;
        }
    }
    alert('ups te equivoscastes')
    if(intentos===6){
        alert('te quedastes sin intentos');
        break;
    }
}
    