const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const highFrequency = ["read", "group", "turn", "might", "earth", "each", "without", "bear", "into", "myself", "more", "outside", "inside", "today", "world", "clean", "close", "four", "hear", "point"];
let currentList = letters;
let currentIndex = Math.floor(Math.random() * currentList.length);
let isUppercase = true;
let isRandom = true;

function updateLetter() {
    const letter = currentList[currentIndex];
    document.getElementById('letterDisplay').textContent = isUppercase ? letter : letter.toLowerCase();
}

function prevLetter() {
    if (isRandom) {
        currentIndex = Math.floor(Math.random() * currentList.length);
    } else {
        currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    }
    updateLetter();
}

function nextLetter() {
    if (isRandom) {
        currentIndex = Math.floor(Math.random() * currentList.length);
    } else {
        currentIndex = (currentIndex + 1) % currentList.length;
    }
    updateLetter();
}

function toggleCase() {
    isUppercase = !isUppercase;
    document.getElementById('toggleCase').classList.toggle('toggled', isUppercase);
    updateLetter();
}

function switchList() {
    currentList = currentList === letters ? highFrequency : letters;
    currentIndex = Math.floor(Math.random() * currentList.length);
    document.getElementById('switchList').classList.toggle('toggled', currentList === highFrequency);
    updateLetter();
}

function toggleRandom() {
    isRandom = !isRandom;
    document.getElementById('toggleRandom').classList.toggle('toggled', isRandom);
}

document.addEventListener('DOMContentLoaded', updateLetter);
