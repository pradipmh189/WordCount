const wordTextarea = document.querySelector(".word-counter-container .word");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");


const countWords = ()=>{
    let words =wordTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWords = wordsTrimmed.split(" ");
    console.log(splitWords);

    let numberofwords = splitWords.length;
    wordCount.innerHTML = numberofwords;
};
countBtn.addEventListener("click", countWords);