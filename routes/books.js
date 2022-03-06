import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/books
router.get('/', booksCtrl.index)


router.post('/', isLoggedIn, booksCtrl.create)

router.get('/:id', booksCtrl.show)

router.patch('/:id/flip-read', isLoggedIn, booksCtrl.flipRead)

export {
  router
}