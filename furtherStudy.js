"use strict";


function wordsInCommon(words1, words2) {

  const wordSet1 = new Set(words1);
  const wordSet2 = new Set(words2);

  let result = new Set();

  for (let word of wordSet1) {
    if (wordSet2.has(word)) {
      result.add(word);
      
    }
  }
  return Array.from(result);

}


function kidsGame(names) {
  const output =[names.shift()];
  const first_letter_to_words = {};
  for (const name of names) {
    if (!first_letter_to_words[name[0]]) {
      first_letter_to_words[name[0]]=[name];
    }
    else {
      first_letter_to_words[name[0]].push(name);
    }
  }
  while (true){
    const start_word = output[output.length-1]
    const start_letter = start_word[start_word.length-1]
    if (first_letter_to_words[start_letter]) {
      let word = first_letter_to_words[start_letter].shift();
      output.push(word);
    }
    else {
      break;
    }
  }
  return output;
}

// kidsGame(["bagon", "baltoy", "yamask", "starly","nosepass", "kalob", "nicky", "booger"])