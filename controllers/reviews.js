import { Review } from '../models/review.js'

function newReview(req, res) {
  Review.find({}, function (err, reviews) {
    res.render('reviews/new', {
      title: 'Add Review',
      reviews: reviews,
    })
  })
}

export {
  newReview as new,
}