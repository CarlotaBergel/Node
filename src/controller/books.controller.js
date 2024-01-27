let books = require("../models/classBook");

books = null;

// let books = new Book("La sirenita","Ficcion", "Pepa Juarez", 17, "https://es.web.img2.acsta.net/medias/nmedia/18/80/56/45/19549127.jpg");

function getBook(req, res){
    let respuesta;
    if(books != null){
        respuesta= usuario;
    }else{
        respuesta = {error: true, codigo:200, mensaje: "usuario no existe"};
    }
    res.send(respuesta);
}

function createBook(req, res){
    let respuesta;
    if(books === null){
        books = new Book (req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo);
        respuesta = {error:false, codigo:200, mensaje:"Libro creado", res: books}
    }else{
        respuesta = {error:false, codigo:200, mensaje:"El libro ya existe", resultado: null};
    }
    res.send(respuesta);
}

function updateBook(req, res){
    let respuesta;
    if(books != null){
        books.title = req.body.title;
        books.id_book = req.body.id_book;
        respuesta = {error: false, codigo:200, mensaje:"Libro actualizado", resultado:books};
    }else{
        respuesta = { error: true, codigo:200, mensaje:"El libro no existe", resultado:books};
    }        
    res.send(respuesta);
}

function deleteBook(req, res){
    let respuesta;
    if(books != null){
        books = null;
        respuesta = {error: false, codigo:200, mensaje:"Libro borrado", resultado:books}
    } else{
        respuesta = {error: true, codigo:200, mensaje:"El libro no existe", resultado:books}
    }
    res.send(respuesta);
}

module.exports = {getBook, createBook, updateBook, deleteBook};