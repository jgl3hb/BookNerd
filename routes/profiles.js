import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET - localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/cats', isLoggedIn, profilesCtrl.createCat)

export {
  router
}