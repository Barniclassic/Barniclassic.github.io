/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { findTitles, addBook, findAuthors, findIDs }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    for (let i = 0; i < library.length; i++) {
        titles[i] = library[i].title;
    }
    titles.sort();
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */

function addBook(bookTitle, bookAuthor, bookLilbraryID) {
        const newBook = {
            title: bookTitle,
            author: bookAuthor,
            libraryID: bookLilbraryID
        }
        library.push(newBook);
        // const title = document.getElementById("title"); //retrieves the book title from the title textbox
        //finish the implementation -- get the author, create a book object, and add to the library array
        return newBook;
}
function findAuthors() {
    const author = [];

    for (let i = 0; i < library.length; i++) {
        author[i] = library[i].author;
    }
    author.sort();
    return author;
}

function findIDs() {
    const ids = [];
    for (let i = 0; i < library.length; i++) {
        ids[i] = library[i].libraryID;
    }
    ids.sort(function (a, b) {
        return a - b;
    });
    return ids;
}