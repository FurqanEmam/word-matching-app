// getting all the dom
const wordsElement = document.getElementById("word");
const pointsElement = document.getElementById("points");
const wordInputElement = document.getElementById("wordInput");
const submitBtn = document.getElementById("handleSubmit");
const errorShow = document.getElementById("error");

// points number later they will increse
let pointsNumber = 0;

// an async function to generate random word
const getRandomWord = async function () {
  const url = "https://random-word-api.herokuapp.com/word";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch random word");
    }
    const result = await response.json();
    const randomWord = result[0];
    wordsElement.textContent = randomWord;
    return randomWord;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

// handle users submission on typing and matching the words if equals than point will increase
const handleWordSubmission = async () => {
  const typedWord = wordInputElement.value.trim().toLowerCase();
  const randomWord = wordsElement.textContent.trim().toLowerCase();

  if (typedWord === randomWord) {
    pointsNumber++;
    pointsElement.textContent = pointsNumber;
    wordInputElement.value = "";
    await getRandomWord(); // Get a new random word
  } else {
    errorShow.textContent = "Wrong word!";
    setTimeout(() => {
      errorShow.textContent = ""; // Clear the error message after a short delay
    }, 2000);
  }
};

// handling users click
submitBtn.addEventListener("click", handleWordSubmission);

// handling users enter button
wordInputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleWordSubmission();
  }
});

// generating the first random word and starting the game
getRandomWord();
