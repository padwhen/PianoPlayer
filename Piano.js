// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(key => {
    notes.push(document.getElementById(key))
});

// Write named functions that change the color of the keys below
const keyPlay = (event) => {
    event.target.style.backgroundColor = '#6df0c2';
}

const keyReturn = (event) => {
    event.target.style.backgroundColor = '';
}

const eventAssignment = (note) => {
    note.addEventListener('mousedown',keyPlay);
    note.addEventListener('mouseup',keyReturn)
};

notes.forEach(note => {
    eventAssignment(note)
});

// Write a named function with event handler properties


// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click',function() {
    nextOne.hidden = true;
    nextTwo.hidden = false;
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
})
nextTwo.addEventListener('click',function() {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    lastLyric.style.display = 'inline-block';
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTMl = 'E';
    document.getElementById('letter-note-five').innerHTMl = 'C';
    document.getElementById('letter-note-six').innerHTMl = 'B';
})
nextThree.addEventListener('click',function() {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById('word-one').innerHTMl = 'HAP-';
    document.getElementById('word-two').innerHTMl = 'PY';
    document.getElementById('word-three').innerHTMl = 'BIRTH';
    document.getElementById('word-four').innerHTMl = 'DAY';
    document.getElementById('word-five').innerHTMl = 'TO';
    document.getElementById('word-six').innerHTMl = 'YOU!';
    document.getElementById('letter-note-one').innerHTMl = 'F';
    document.getElementById('letter-note-two').innerHTMl = 'F';
    document.getElementById('letter-note-three').innerHTMl = 'F';
    document.getElementById('letter-note-four').innerHTMl = 'C';
    document.getElementById('letter-note-five').innerHTMl = 'D';
    document.getElementById('letter-note-six').innerHTMl = 'C';
    lastLyric.style.display = 'none';
})
// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}