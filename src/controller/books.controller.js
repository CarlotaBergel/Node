
const book = require("../models/classBook");
// const app = express();

var books = [
    new book("La sirenita", "Infantil", "Josefina", 18,"https://acortar.link/4A8ivP",1),
    new book("La cenicienta", "Infantil","Pepe",21,"https://acortar.link/2Vjz2t",2),
    new book("Un cuento perfecto", "Juvenil","Elisabett",18,"https://acortar.link/HfXpo2",3),
    new book("Todo lo que nunca fuimos", "Juvenil","Alice",15,"https://acortar.link/iQ8TkE",4),
]

function getBooks(req, res){
    let respuesta;
    let bookFiltro;
    if(req.query.id_book){
        bookFiltro = books.filter(b => b.id_book == req.query.id_book);
        respuesta = books;        
    }else{
        respuesta = "Petición mal formulada";
    }
    res.send(respuesta);
}

function postBooks(req, res){
    let respuesta = new book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book)
    res.status(200).send(respuesta);
}

function putBooks(req, res){
    let respuesta;
    if(req.body.id_book && books.findIndex(b => b.id_book == req.body.id_book) >= 0){
        let libro = new book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book);
        books[books.findIndex(b => b.id_book == req.body.id_book)] = libro;
        respuesta = "Libro editado";
    }else{
        respuesta = "Libro no encontrado";
    }
    res.status(200).send(respuesta);
}

function deleteBooks(req, res){
    let respuesta;
    if(req.body.id_book && books.findIndex(b => b.id_book == req.body.id_book) >= 0){
        books.splice(books.findIndex(b => b.id_book == req.body.id_book), 1);
        respuesta = "Libro eliminado";
    }else{
        respuesta = "Libro no encontrado";
    }
    res.status(200).send(respuesta);
}


// put post y delete todo por body para que no se vea en el enlace


module.exports = {getBooks, postBooks, putBooks, deleteBooks};