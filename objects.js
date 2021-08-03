"use strict";


// 1. countWords
function countWords(phrase) {
  let word_counts = {};
  for (word of phrase.split(' ')) {
    if (word_counts[word]) { 
      word_counts[word]+=1; 
    }
    else {
      word_counts[word]=1;
    }
  }
  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  if (melon_prices[price]) return melon_prices[price].sort();
  else return null;
}
