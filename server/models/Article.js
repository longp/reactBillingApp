var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Title required' ]
  },

  content: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']

  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  consumer:{
    type: Schema.Types.ObjectId,
    ref: 'Consumer'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Article = mongoose.model('Article', ArticleSchema, 'Articles');
module.exports = Article;
