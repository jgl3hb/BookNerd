import { redirect } from 'express/lib/response'
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

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.read = !!req.body.read
  Book.create(req.body)
  .then(book => {
    res.redirect('books')
  })
  .catch(err => {
    console.log(err)
    res.redirect('books')
  })
}

function show(req,res) {
  Book.findById(req.params.id)
  .populate('owner')
  .then(book => {
    res.render('books/show', {
      book,
      title: "book show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('books')
  })
}

export {
  index,
  create,
  show
}

