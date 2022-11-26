const mongoose = require('mongoose');
const slugify = require('slugify');

const workSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Provide a title.'],
    maxlength: 50,
    trim: true
  }
}, {
  timestamps: true
});

workSchema.set('toObject', { virtuals: true });
workSchema.set('toJSON', { virtuals: true });

workSchema.pre("save", function(next) {

  this.slug = slugify(this.title, {
    replacement: '-',
    lower: true,
    trim: true
  });

  next();

});

module.exports = mongoose.model('Work', workSchema);