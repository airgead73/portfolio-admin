const mongoose = require('mongoose');
const { createSlug } = require('../../utils');
const format = require('date-fns/format');

const photoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Provide a title.'],
    maxlength: 50,
    trim: true
  },
  work: {
    type: mongoose.Schema.ObjectId,
    ref: 'Work',
    required: true
  },
  slug: {
    type: String
  }
}, {
  timestamps: true
});

photoSchema.set('toObject', { virtuals: true });
photoSchema.set('toJSON', { virtuals: true });

// create slug
photoSchema.pre("save", function(next) {

  this.slug = createSlug(this.title);

  next();

});

photoSchema.virtual('dates_formatted').get(function() {

  if(!this.createdAt || !this.updatedAt) return;

  return {
    createdAt: format(this.createdAt, 'MMMM d, yyyy'),
    updatedAt: format(this.updatedAt, 'MMMM d, yyyy')
  }  

});

module.exports = mongoose.model('Photo', photoSchema);