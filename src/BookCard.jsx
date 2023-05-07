import React from 'react'

function BookCard({ books, deleteBook }) {

    return (
        <div>
            {
                books.map((book) => <div className='bookCard' key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.body}</p>
                    <button onClick={() => deleteBook(book.id)}>Delete Book</button>
                </div>)
            }
        </div>
    )
}

export default BookCard
