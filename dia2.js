const fs= require('fs/promises');
const readline = require('readline');


// let persona= {name:"Carlos", surname:"Garcia", age:35};
let persona = {name:"", surname:"", age:0};

//Reto2 catch then
fs.writeFile("jsonCatch.json", JSON.stringify(persona))

.then(()=>{
    return fs.readFile("jsonCatch.json");
})

.then(data => {
    console.log(JSON.parse(data));
})

.catch(err => {
    console.log(err);
});

//Reto2 con async await
async function async_Await(){
    try{
        await fs.writeFile('jsonASYNC.json',JSON.stringify(persona))
            let persona1 = await fs.readFile('jsonASYNC.json')
            console.log(JSON.parse(persona1));
        }catch(err){
            console.log(err);
        }
    }
async_Await();

//Reto3 catch then
function question(pregunta){

    return new Promise ((resolve)=> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        rl.question(pregunta, respuesta =>{
            resolve(respuesta)
            rl.close();
        });
    })
}

question("¿Nombre?")
.then(name =>{
    persona.name = name;
    return question("¿Apellido?")
})
.then(surname => {
    persona.surname = surname;
    return question("¿Edad?")
})
.then(age => {
    persona.age = age;
})
.then(()=>{
    return fs.writeFile("jsonCatch.json", JSON.stringify(persona))
    
})
.then(()=>{
    return fs.readFile("jsonCatch.json")
    })
    .then( data => {
    console.log(JSON.parse(data))
    })
    .then(()=>{preguntaAsync()})
    .catch(err => {
    console.log(err);
})

//Reto3 async await

async function preguntaAsync(){
    try{
        let name= await question('¿Nombre?');
        persona.name = name;

        let surname= await question('¿Apellido?');
        persona.surname = surname;

        let age= await question('¿Edad?');
        persona.age = age;
        
        await fs.writeFile('rlasync.json',JSON.stringify(persona))
            let PersonaAsync = await fs.readFile('rlasync.json','utf8')
            console.log(JSON.parse(PersonaAsync));
        }catch(error){
            console.log(error);
        }
}

