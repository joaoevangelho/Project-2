const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 140,
    minlength: 1
  },
  Teacher: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  Surfer: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  images: [{
    type: mongoose.Types.ObjectId,
    ref: 'Image'
  }]
}, {
  timestamps: {
    createdAt: 'creationDate',
    updatedAt: 'updateDate'
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;