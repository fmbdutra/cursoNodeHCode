function soma(x, callback){
    return setTimeout(()=>{
    //    return x + 5000;
    return callback(null, x + 500);

    },3000);
    
} // Funcao Sincrona

// function escreve(){
//     console.log('Executando a funcao escreve ',soma(250))
// }

function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}

soma(260, resolveSoma)