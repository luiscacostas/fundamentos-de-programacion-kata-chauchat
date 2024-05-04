let cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];

function chauchat(cargador){
    let disparos = 0;

    for(let i = 0; i < cargador.length; i++){
        if(disparos !== 3){
            console.log(cargador[i]);
            disparos++;
        }else{
            console.log("");
            disparos = 0;
        }
       
        if(Math.random() < 0.8){
            console.log("Illo, me he quedao pillá!");
            break;
        }
    }
}

chauchat(cargador);