const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// let persona= {name:"Carlos", surname:"Garcia", age:35};
let persona = {name:"", surname:"", age:0};


// reto2
let jsonPersona = JSON.stringify(persona);

fs.writeFile('reto2.json', jsonPersona, err => {
    if (err) {
        console.error(err);

    }else {fs.readFile('reto2.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    console.log(data);
    })}
})

// reto3

rl.question('Nombre?', (name) => {
    persona.name = name;
    console.log(`tu nombre es: ${name}`);
    
    rl.question('Apellido?', (surname) => {
        persona.surname = surname;
        console.log(`tu apellido es: ${surname}`);

        rl.question('edad?', (age) => {
            persona.age = age;
            console.log(`tu edad es: ${age}`);
            rl.close();

            let jsonPersona = JSON.stringify(persona);
                fs.writeFile('reto2y3.json', jsonPersona, err => {
                    if (err) {
                        console.error(err);
                    }else {fs.readFile('reto2y3.json', (err, data) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        // console.log(data);
                    })
                }    
            })
        })
    })
})



        