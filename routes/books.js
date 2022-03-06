import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'

const router = Router()

router.get('/', booksCtrl.index)

export {
  router
}