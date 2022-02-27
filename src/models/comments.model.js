const { Schema, model } = require('mongoose')

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  description: { type: String },
  author: {
    type: Schema.Types.ObjectId, ref: 'User', required: true, autopopulate: true
  },
})

CommentSchema.plugin(require('mongoose-autopopulate'))

module.exports = model('comment', CommentSchema)