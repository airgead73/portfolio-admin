const slugify = require('slugify');

const createSlug = ($rawString) => {

  // strip out special characters

  const rawSlug = slugify($rawString, {
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

  // return final slug

  const finalSlug = importantWords.join("-");  

  return finalSlug;

}

module.exports = createSlug;