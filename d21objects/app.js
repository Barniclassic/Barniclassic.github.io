/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { showTitles, findTitles, addBook, findAuthors, findIDs }; //add all of your function names here that you need for the node mocha tests


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
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    //titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    for (let i = 0; i < library.length; i++) {
        titles[i] = library[i].title;
    }
    titles.sort();
    return titles;
}
function addBook(title, author, ID) {
    const newBook = {
        title: title,
        author: author,
        libraryID: ID
    };
    library.push(newBook);
    return newBook;
}
function addBookHtml() {
    const newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("id").value
    };
    library.push(newBook);
    return newBook;
}
/**
 * @returns {undefined} no return
 */
function showAuthor() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();
    authors.sort();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;

}
function findAuthors() {
    const author = [];

    for (let i = 0; i < library.length; i++) {
        author[i] = library[i].author;
    }
    author.sort();
    return author;
}
/**
 * @returns{undefined}
 */
function showID() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const Ids = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    Ids.sort();
    const titleString = Ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;

}
/**
 * @returns{undefined}
 */
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
/** 
* @return {object} array holding all titles as elements
*/
function scramble() {
    const titles = findTitles();
    const titleWord = titles.toString().split(" ");
    const comb = titleWord.join("\n");
    comb.sort((a, b) => a.length - b.length);
    console.log(JSON.stringify(comb, null, 2));
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = comb;
}