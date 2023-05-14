class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

class UserInterface {

    showAlert(msg, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container'); 
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout( function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    addBookToList(book){
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

     
    clearFields = function () {
        document.getElementById('title').value = '';  
        document.getElementById('author').value = ''; 
        document.getElementById('isbn').value = '';
    }
    }




document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

const book = new Book(title,author,isbn);
console.log(book);

const ui = new UserInterface();
if (title === '' || isbn === '' || author === '') {
    ui.showAlert('please fill in all fields', 'error');

}else{
    ui.addBookToList(book);
    ui.showAlert('Book added', 'success');
    ui.clearFields();
}
    e.preventDefault();
});


document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UserInterface();
    ui.deletBook(e.target);
    ui.showAlert('book removed', 'success')

   e.preventDefault();
})
