function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

 function UserInterface() {}

    UserInterface.prototype.addBookToList = function(book){
       const list = document.querySelector('#book-list')

       const row = document.createElement('tr');
        
       row.innerHTML = `
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
       `;

       list.appendChild(row)

    }

    UserInterface.prototype.clearFields = function(){
        document.getElementById('title').value = '';  
        document.getElementById('author').value = ''; 
        document.getElementById('isbn').value = '';




    }
 

 

document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

const book = new Book(title,author,isbn);
console.log(book);

const ui = new UserInterface();


ui.addBookToList(book);

ui.clearFields();

    e.preventDefault();
})