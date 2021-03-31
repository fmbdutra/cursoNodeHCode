// function soma(x, callback){
function soma(x){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(null, x + 500);

        }, 3000);
    })
} // Funcao Sincrona

soma(260).then((resultado)=>{
    console.log(resultado)
})
.catch(console.log('erro'));