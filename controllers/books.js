import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books,
      title: "BookNerd",
    })
    console.log('books')
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
    res.redirect('/books')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
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
    res.redirect('/books')
  })
}

function flipRead(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    book.read = !book.read
    book.save()
    .then(()=> {
      res.redirect(`/books/${book._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function edit(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/edit', {
      book,
      title: "Edit Book"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function update(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    if (book.owner.equals(req.user.profile._id)) {
      req.body.read = !!req.body.read
      book.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/books/${book._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/books`)
  })
}

function deleteBook(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    if (book.owner.equals(req.user.profile._id)) {
      book.delete()
      .then(() => {
        res.redirect('/books')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

export {
  index,
  create,
  show,
  flipRead,
  edit, 
  update,
  deleteBook as delete,
}

