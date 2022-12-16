const mongoose = require('mongoose');
const { createSlug } = require('../../utils');
const format = require('date-fns/format');

const workSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Provide a title.'],
    maxlength: 50,
    trim: true
  },
  slug: {
    type: String
  },
  mode: {
    type: String,
    maxlength: 50,
    trim: true
  }
}, {
  timestamps: true
});

workSchema.set('toObject', { virtuals: true });
workSchema.set('toJSON', { virtuals: true });

// create slug
workSchema.pre("save", function(next) {

  this.slug = createSlug(this.title);

  next();

});

workSchema.virtual('dates_formatted').get(function() {

  if(!this.createdAt || !this.updatedAt) return;

  return {
    createdAt: format(this.createdAt, 'MMMM d, yyyy'),
    updatedAt: format(this.updatedAt, 'MMMM d, yyyy')
  }  

});

module.exports = mongoose.model('Work', workSchema);