// Les objets JavaScript sont écrits en JSON (JavaScript Object Notation)

// Création d'un Objet
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// Accéder aux données
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250


// Notation Bracket []
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook["title"]; // "L'Histoire de Tao"
let bookPages = myBook["numberOfPages"]; // 250

// On met entre [] une variable qui contient en string le nom de la propriété que l’on souhaite atteindre
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let propertyToAccess = "title"
let bookTitle = myBook[propertyToAccess]; // "L'Histoire de Tao"

// Création d'une classe
class Book {
}

// Constructeur
class Book {
    constructor(title, author, pages) {
    }
}

// Classe avec "attributions"
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// Création d'instance
let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);
/* Cette ligne crée l'objet suivant 
{
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    pages: 250
}*/
