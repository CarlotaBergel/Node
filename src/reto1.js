const express = require ("express");
const app = express();

app.get ("/", function(req, res){
    res.send("Petición recibida del cliente");
    console.log(express.request.url);
    console.log("URL: "+req.hostname);
    console.log("Method: "+req.method);
    console.log("User-agent: "+req.headers["user-agent"]);
    res.status(200).send({ok: true,
        message:"Recibido"
    });
});

app.get("/bye", function(req, res){
    res.status(200).send({ok: true,
        message: "Adios!"
    });
});

app.listen(3000);