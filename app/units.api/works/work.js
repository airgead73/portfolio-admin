const mongoose = require('mongoose');
const slugify = require('slugify');
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

  // strip out special characters

  const rawSlug = slugify(this.title, {
    replacement: '-',
    remove: /[*+~.()'"!:@,]/g,
    lower: true,
    trim: true
  });

  // strip out prepositions

  const prepositionStrings = {
    "of": true,
    "the": true,
    "in": true,
    "on": true,
    "at": true,
    "to": true,
    "a": true,    
  };  

  const rawWords = rawSlug.split("-");
  const importantWords = new Array();
  rawWords.forEach(word => {
    if(typeof prepositionStrings[word] == "undefined") {
      importantWords.push(word);
    }  
  });

  // save final slug

  this.slug = importantWords.join("-");


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