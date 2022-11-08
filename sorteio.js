const readLine = require('prompt-sync')();

function checarGanhou(sorteado, numUsu){
    
    let msg = "";
    
    if (sorteado == numUsu){
        msg = "você acertou";
    }
    else if(numUsu > sorteado){
        msg = "é maior";
    }
    else if(numUsu < sorteado){
        msg = "é menor";
    }
    
    return msg;

    }
    

    function Main(){
        let sorteado = parseInt(Math.random()*1000);

        console.log(sorteado);
        console.log("Tente a sorte");

        for (let tentativa = 1; tentativa <= 10; tentativa++) {
            
            let num = readLine();
            let resp = checarGanhou(sorteado, num);
            if(num == "você acertou"){
                break;
            }
            console.log(resp);
        }

        
    }
    Main()


    




    
    
    
