// api_key = Q9Cv9/9fX74QmVkmQmOSvw==BL9DMuzhAyOqXhf3

// making variables on DOM

// let points = document.getElementById('points')

const words = document.getElementById("word");

const wordInput = document.getElementById("wordInput");

// console.log(wordInput);

const getRandomWord = async function () {
  /*  const url = "https://random-word-api.herokuapp.com/word";
  const response = await fetch(url);
  const result = await response.json();

  let randomWord = result[0];

  return randomWord; */
  const url = "https://random-word-api.herokuapp.com/word";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed To Fetch random word");
    }
    const result = await response.json();
    let randomWord = result[0];
    return randomWord;
  } catch (error) {
    console.error("error fetching data: ", error);
    throw error;
  }
};

getRandomWord();
// console.log(getRandomWord);
