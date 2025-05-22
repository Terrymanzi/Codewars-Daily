let text = "The turtle is leaving."

function fleschKincaid(text) {
  // Clean out unwanted punctuation (hyphens, apostrophes, etc.)
  text = text.replace(/[-'()…]/g, '');

  // Split sentences using regex (period, question mark, exclamation mark)
  let sentncArr = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let totalSentnc = sentncArr.length;

  // Split words by space, remove punctuation, and filter out empty entries
  let wordsArr = text.split(/\s+/).map(word => word.replace(/[^a-zA-Z]/g, '')).filter(w => w.length > 0);
  let totalWords = wordsArr.length;

  // Count syllables
  let totalSyllables = 0;
  for (let word of wordsArr) {
    let lower = word.toLowerCase();
    // Match groups of vowels (excluding 'y')
    let syllables = (lower.match(/[aeiou]+/g) || []).length;
    totalSyllables += Math.max(1, syllables); // Ensure at least 1 syllable per word
  }

  // Avoid division by zero
  if (totalSentnc === 0 || totalWords === 0) return 0;

  // Calculate averages
  let wordAvg = totalWords / totalSentnc;
  let syllableAvg = totalSyllables / totalWords;

  // Flesch-Kincaid formula
  let gradeLevel = (0.39 * wordAvg) + (11.8 * syllableAvg) - 15.59;

  return parseFloat(gradeLevel.toFixed(2));
}


console.log(fleschKincaid(text))


