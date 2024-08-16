import { useState, useEffect } from 'react'
import './App.css'
import './styles.css'
import axios from 'axios'

const bookApi = import.meta.env.VITE_BOOK_API;

function App() {
  const [books, setBooks] = useState([]);
  
  console.log(`${bookApi}`);

  const getBooks = function() {
    axios
    // .get('http://localhost:5000/api/v1/book')
    .get(bookApi)
    .then((res) => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err) => {
      console.log('Error from BookList');
    });
  }

  const handleDeleteBook = function(id) {
    // axios.delete(`http://localhost:5000/api/v1/book/${id}`)
    axios.delete(`${bookApi}/${id}`)
      .then((res) => {
        console.log(res.data);
        getBooks();
      })
      .catch((err) => {
        console.log(`Error deleting book: ${err}`);
      });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="BookList">
        <div className="col-md-12">
          <br />
          <h2 className="display-4 text-center">Books List</h2>
        </div>
        <div className="col-md-11">
          <a className="btn btn-info float-right" href="/create-book"
            >+ Add New Book</a
          ><br /><br />
          <hr />
        </div>
        <div className="list">
          {books.map(book=> (
            <div key={book._id} className="card-container">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt="Books"
                height="200"
              />
              <div className="desc">
                <h2><a href="/show-book/123id">{book.bookTitle}</a></h2>
                <h3>{book.bookAuthor}</h3>
                <p>{book.description}</p>
              </div>
              <button onClick={() => handleDeleteBook(book._id)}>X</button>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
