const letters = ["A", "C", "D", "G", "I", "J", "O", "P", "Qu", "R", "S", "T", "U"];
const highFrequency = ["read", "group", "turn", "might", "earth", "each", "without", "bear", "into", "myself", "more", "outside", "inside", "today", "world", "clean", "close", "four", "hear", "point"];
const josephsList = ["apple", "banana", "cherry", "date", "elderberry"];
const lillysList = ["cat", "dog", "elephant", "frog", "giraffe"];

const lists = [
    { name: "Letters", data: letters },
    { name: "High Frequency", data: highFrequency },
    { name: "Joseph's List", data: josephsList },
    { name: "Lilly's List", data: lillysList }
];
let currentListIndex = 0;
let currentList = lists[currentListIndex].data;
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
    currentListIndex = (currentListIndex + 1) % lists.length;
    currentList = lists[currentListIndex].data;
    currentIndex = Math.floor(Math.random() * currentList.length);
    document.getElementById('switchList').textContent = `${lists[currentListIndex].name}`;
    updateLetter();
}

function toggleRandom() {
    isRandom = !isRandom;
    document.getElementById('toggleRandom').classList.toggle('toggled', isRandom);
}

document.addEventListener('DOMContentLoaded', () => {
    updateLetter();
    document.getElementById('switchList').textContent = `List: ${lists[currentListIndex].name}`;
});
