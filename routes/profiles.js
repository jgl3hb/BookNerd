import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/reviews
router.post("/:id/reviews", isLoggedIn, profilesCtrl.createReview)

// DELETE - localhost:3000/profiles/reviews/:id
router.delete("/:profileId/reviews/:reviewId", isLoggedIn, profilesCtrl.deleteReview)

export {
  router
}