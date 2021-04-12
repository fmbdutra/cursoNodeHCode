// CLI - command line interface

const  readline  = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual o comando: ', (answer)=>{
    // console.log(`A melhor marca de drone é: ${answer}`)
    switch( answer ){
        case "command":
            console.log('Ligando o Drone');
            break;
        case "takeoff":
            console.log('Decolando o drone ');
            break;
        default:
            console.log('Ligue o drone');
            break;
    }

    rl.close()
})