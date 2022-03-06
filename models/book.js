import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String,
  author: String,
  read: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  // category: {
  //   type: String,
  //   enum: ['Sci-Fi', 'Action', 'Fantasy','Suspense/Thriller','Western', 'Computer Science', 'Philosophy/Psych', 'Social Sciences', 'Technology', 'History/Geography'],
  // },
})

const Book = mongoose.model('Book', bookSchema)

export {
  Book
}