import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books,
      title: "🌮"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/books")
  })
}

export {
  index
}

