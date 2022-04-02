const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PostScema = new Schema({
    // user: { type: Schema.Types.ObjectId, ref: 'user' },
    // category: { type: Schema.Types.ObjectId, ref: 'category' },
    image1: String,
    video: String,
    title: String,
    description: String,
    status: String,
    price: String,
    url: String,
  });
  
  const Post = mongoose.model('post', PostScema);

  module.exports = Post;
