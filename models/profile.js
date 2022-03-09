import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  name: String,
  stars: Number,
  breview: String
}, {
  timestamps: true,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}