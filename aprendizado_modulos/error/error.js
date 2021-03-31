/* 
throw new Error('Ishi, deu erro! Na minha máquina funciona...') //para a aplicação
console.log('Olha aqui!') //nao funciona!
*/

/* 
tente executar alguma coisa 
se de erro, roda o catch */
function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ih, deu erro amiguinho!')
}

function init(){

    //Try Catch manipula o erro, deixando executar apos
    try {
        execute();
    } catch (error) {
        console.log(`Deu erro no try! ${error}`)
    }
}

init()
console.log('Depois do erro')