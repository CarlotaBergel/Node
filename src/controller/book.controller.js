let book = require("../models/classBook");
const app = express();
let books = null;

// let books = new Book("La sirenita","Ficcion", "Pepa Juarez", 17, "https://es.web.img2.acsta.net/medias/nmedia/18/80/56/45/19549127.jpg");

function getBook(req, res){
    let respuesta;
    if(books != null)
        respuesta = {error: false, codigo: 200, mensaje: "El libro existe", data:books};
    else
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
    res.send(respuesta);
}

function postBook(req, res){
    let respuesta;
    if(books === null){
        books = new Book (req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book);
        respuesta = {error:false, codigo:200, mensaje:"Libro creado", resultado: books};
    }
    else{
        respuesta = {error:false, codigo:200, mensaje:"El libro ya existe", resultado: null};
    }
    res.send(respuesta);
}

function putBook(req, res){
    let respuesta;
    if(book != null){
        book.title = req.body.title;
        book.id_book = req.body.id_book;
        respuesta = {error: false, codigo:200, mensaje:"Libro actualizado", resultado:book};
    }else
        respuesta = {error: true, codigo:200, mensaje:"El libro no existe", resultado:book};           
    res.send(respuesta);
}

function deleteBook(req,res){
    let respuesta;
    if(book != null){
        book = null;
        respuesta = {error: false, codigo:200, mensaje:"Libro borrado", resultado:book};
    }else{
        respuesta = {error: true, codigo:200, mensaje:"El libro no existe", resultado:book}
    }
    res.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook, deleteBook};