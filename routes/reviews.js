import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

router.get('/new', reviewsCtrl.new)

export {
  router
}