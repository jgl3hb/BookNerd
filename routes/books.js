import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/books
router.get('/', booksCtrl.index)

router.get('/:id/edit', isLoggedIn, booksCtrl.edit)

router.post('/', isLoggedIn, booksCtrl.create)

router.get('/:id', booksCtrl.show)

router.patch('/:id/flip-read', isLoggedIn, booksCtrl.flipRead)

export {
  router
}