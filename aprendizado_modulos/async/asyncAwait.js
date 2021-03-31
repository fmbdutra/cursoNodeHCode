// function soma(x, callback){
function sum(x){
    return new Promise((resolve, reject)=>{
        if(Number(x)==NaN || Number(x)==undefined || typeof x != 'number'){
            reject('Tá brincando, uai?')
        }
        setTimeout(()=>{
            resolve(x + 500);
        }, 3000);
    })
} // Funcao Sincrona



async function main(){
    try {
        const result = await sum(693);
        console.log(`resultado do async/await: ${result}`);
    } catch (error) {
        console.log(`temos problemas: \n ${error}`)
    }  
}

main();
