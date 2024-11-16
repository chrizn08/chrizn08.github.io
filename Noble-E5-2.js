function searchText() {

  let textarea = document.getElementById('yourStory');
  let findInput = document.getElementById('findInput');
  let searchDisplay = document.getElementById('searchDisplay');

  if (textarea.value === '') {
    searchDisplay.textContent = "Please enter a story to search.";
    return;
  }

 
  if (textarea.value.includes(findInput.value)) {
    searchDisplay.textContent = "The text was found in the story at position " + textarea.value.indexOf(findInput.value) + ".";
  } else {
    searchDisplay.textContent = "The text was not found in the story.";
  }
}

function replaceText() {

  let textarea = document.getElementById('yourStory');
  let findInput = document.getElementById('findInput');
  let replaceInput = document.getElementById('replaceInput');
  let currentText = textarea.value;
  let newText = currentText.replace(new RegExp(findInput.value, 'g'), replaceInput.value);

  textarea.value = newText;
}

function clearText() {
  let textarea = document.getElementById('yourStory');

  textarea.value = '';
}

function clearInput() {
  let findInput = document.getElementById('findInput');
  let replaceInput = document.getElementById('replaceInput');
  let searchDisplay = document.getElementById('searchDisplay');
  let lengthDisplay = document.getElementById('lengthDisplay');

  findInput.value = '';
  replaceInput.value = '';
  searchDisplay.textContent = '';
  lengthDisplay.textContent = '';
}

function toUpperCase() {

  let textarea = document.getElementById('yourStory');
  let findInput = document.getElementById('findInput');
  let currentText = textarea.value;
  let newText = currentText.replace(new RegExp(findInput.value, 'g'), findInput.value.toUpperCase());

  textarea.value = newText;
}

function toLowerCase() {

  let textarea = document.getElementById('yourStory');
  let findInput = document.getElementById('findInput');
  let currentText = textarea.value;
  let newText = currentText.replace(new RegExp(findInput.value, 'g'), findInput.value.toLowerCase());

  textarea.value = newText;
}

function allToUpper() {

  let textarea = document.getElementById('yourStory');
  let currentText = textarea.value;

  textarea.value = currentText.toUpperCase();
}

function allToLower() {

  let textarea = document.getElementById('yourStory');
  let currentText = textarea.value;

  textarea.value = currentText.toLowerCase();
}

function getLength() {

  let textarea = document.getElementById('yourStory');
  let lengthDisplay = document.getElementById('lengthDisplay');
  let currentText = textarea.value;
  let textLength = currentText.length;

  lengthDisplay.textContent = "The Story has " + textLength + " characters.";
}