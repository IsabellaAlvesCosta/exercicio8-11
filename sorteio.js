const readLine = require('prompt-sync')();

function sorteio(n){
    
    let a = Number(readLine)
    let msg = "";
    
    if (a == n ){
        msg = "você acertou";
    }
    else if(a < n){
        msg = "é maior";
    }
    else if(a > n){
        msg = "é menor";
    }
    
    return a;

    }
    

    function Main(){
        console.log(parseInt(Math.random()*1000));
        console.log("Tente a sorte");

        let a = Number(readLine())
        sorteio(a);
    }
    Main()


    




    
    
    
