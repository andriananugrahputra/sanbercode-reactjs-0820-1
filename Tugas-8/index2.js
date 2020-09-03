var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let promise_book = (book, time) =>{
    readBooksPromise(time, books[book])
    .then((remaining_time) => {
		if(remaining_time > 0){
			if (book + 1 < books.length){
				promise_book(book + 1 , time)}
        }
    })        
}

promise_book(0,10000);