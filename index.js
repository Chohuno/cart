function calculateSentenceLenght(sentence){
    let lenght=0;
    for(leti = 0; i<sentence.lenght; i++){
       if (sentence[i] !==''){
        lenght ++;
    }
       }
       return lenght;
}
function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Increment the length counter for each character
        lengthCounter++;
        
        // Check if the character is a space to count words
        if (char === ' ') {
            wordCounter++;
        }
        
        // Check if the character is a vowel (considering both upper and lower case)
        if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
            vowelCounter++;
        }
    }
    
    // The last character is a point, so it is not counted as a word
    wordCounter++;
    
    // Output the results
    console.log(`Length of the sentence: ${lengthCounter}`);
    console.log(`Number of words in the sentence: ${wordCounter}`);
    console.log(`Number of vowels in the sentence: ${vowelCounter}`);
}

// Example usage:
let sentence = "This is a sample sentence.";
analyzeSentence(sentence);
