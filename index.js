const categories = {
    animals: {
        words: ['elephant', 'giraffe', 'lion', 'tiger', 'zebra', 'monkey', 'penguin', 'crocodile', 'kangaroo', 'panda'],
        clues: ['The largest land animal', 'The tallest mammal', 'King of the jungle', 'Striped big cat', 'Distinctive black and white stripes', 'Primate with a long tail', 'Bird that can\'t fly', 'Large reptile with a strong jaw', 'Hops and carries its young in a pouch', 'Black and white bear'],
    },
    countries: {
        words: ['canada', 'india', 'brazil', 'australia', 'china', 'france', 'japan', 'russia', 'mexico', 'egypt'],
        clues: ['Second-largest country', 'Land of diversity', 'South American giant', 'Land of kangaroos', 'Most populous country', 'Known for the Eiffel Tower', 'Country of the rising sun', 'Largest country by land area', 'Famous for tacos and tequila', 'Home of the pyramids'],
    },
    fruits: {
        words: ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'watermelon', 'strawberry', 'pineapple', 'blueberry'],
        clues: ['Steve Job\'s creation', 'Yellow, curved, and delicious', 'A citrus delight', 'Tiny and juicy', 'Brown, fuzzy, and green inside', 'Tropical stone fruit', 'Sweet and refreshing', 'Red and heart-shaped', 'Tropical and spiky', 'Small and round, often in pancakes'],
    },
    colors: {
        words: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'],
        clues: ['Warm and passionate', 'Cool and calming', 'Nature\'s color', 'Bright and cheerful', 'Royal and regal', 'Citrus hue', 'Soft and feminine', 'Earthy and warm', 'The absence of color', 'Combination of all colors'],
    },
    movies: {
        words: ['avatar', 'inception', 'titanic', 'jurassic park', 'star wars', 'matrix', 'harry potter', 'forrest gump', 'the godfather', 'back to the future'],
        clues: ['Pandora adventure', 'Dream within a dream', 'Ship of dreams', 'Dinosaurs in a park', 'Galactic saga', 'Virtual reality world', 'Wizarding school', 'Life is like a box of chocolates', 'Crime family epic', 'Time-traveling DeLorean'],
    },
    sports: {
        words: ['football', 'basketball', 'tennis', 'soccer', 'baseball', 'golf', 'swimming', 'volleyball', 'cricket', 'hockey'],
        clues: ['Gridiron game', 'Court sport with hoops', 'Racket sport', 'The beautiful game', 'Bat-and-ball game', 'Game with clubs and holes', 'Water sport with lanes', 'Court sport with a net', 'Bat-and-ball game with a wicket', 'Ice or field game with a puck or ball'],
    },
    food: {
        words: ['pizza', 'burger', 'sushi', 'pasta', 'ice cream', 'salad', 'sandwich', 'chocolate', 'pancake', 'smoothie'],
        clues: ['Italian favorite', 'Classic fast food', 'Japanese rice and fish dish', 'Italian noodle dish', 'Cold and sweet treat', 'Healthy greens dish', 'Bread with a filling', 'Sweet indulgence', 'Flat breakfast delight', 'Blended fruity drink'],
    },
    technology: {
        words: ['computer', 'smartphone', 'tablet', 'keyboard', 'internet', 'software', 'algorithm', 'programming', 'hardware', 'cybersecurity'],
        clues: ['Personal computing device', 'Pocket-sized device', 'Portable touchscreen device', 'Input device with keys', 'Global network of networks', 'Set of instructions for a computer', 'Step-by-step problem-solving procedure', 'Writing code for software', 'Physical components of a computer', 'Protection against online threats'],
    },
    music: {
        words: ['guitar', 'piano', 'drums', 'violin', 'saxophone', 'singer', 'songwriter', 'orchestra', 'hip-hop', 'rock'],
        clues: ['Stringed instrument', 'Keyboard instrument', 'Percussion instrument', 'String instrument with a bow', 'Wind instrument', 'Vocalist', 'Writes songs', 'Large musical ensemble', 'Genre with rhyming and beats', 'Genre with amplified instruments'],
    },
    landmarks: {
        words: ['eiffel tower', 'pyramids', 'statue of liberty', 'great wall', 'colosseum', 'taj mahal', 'christ the redeemer', 'machu picchu', 'sydney opera house', 'burj khalifa'],
        clues: ['Parisian iron lattice tower', 'Ancient Egyptian structures', 'Symbol of freedom in New York', 'Ancient Chinese fortification', 'Roman amphitheater', 'Indian marble mausoleum', 'Brazilian mountain monument', 'Incan citadel in Peru', 'Australian performing arts venue', 'Tallest building in the world'],
    },
    cartoonCharacters: {
        words: ['mickeymouse', 'spongebob', 'pikachu', 'scoobydoo', 'donaldduck', 'tomandjerry', 'bugsbunny', 'popeye', 'garfield', 'snoopy'],
        clues: ['Iconic Disney mouse', 'Yellow sponge who lives in a pineapple', 'Electric Pokemon', 'Great Dane detective', 'Disney duck with a short temper', 'Classic cat and mouse duo', 'Wascally wabbit from Looney Tunes', 'Sailor with super strength after eating spinach', 'Lazy cat who loves lasagna', 'Beagle with a red doghouse'],
    },
    superheroCharacters: {
        words: ['spiderman', 'superman', 'batman', 'wonderwoman', 'ironman', 'captainamerica', 'hulk', 'thor', 'blackwidow', 'flash'],
        clues: ['Web-slinging hero', 'Man of Steel', 'The Dark Knight', 'Amazonian warrior princess', 'Genius billionaire in a suit', 'Star-spangled Avenger', 'Big green smashing machine', 'God of Thunder', 'Red-haired superspy', 'Speedster with lightning powers'],
    },
    disneyPrincesses: {
        words: ['cinderella', 'ariel', 'belle', 'jasmine', 'snowwhite', 'mulan', 'pocahontas', 'rapunzel', 'merida', 'elsa'],
        clues: ['Lost her glass slipper', 'Red-haired mermaid', 'Lover of books and the Beast', 'Princess of Agrabah', 'Fairest of them all', 'Chinese warrior who saved China', 'Native American adventurer', 'Long-haired princess in a tower', 'Scottish archer princess', 'Ice queen with magical powers'],
    },
    animatedMovies: {
        words: ['toy story', 'findingnemo', 'shrek', 'frozen', 'zootopia', 'moana', 'lionking', 'aladdin', 'beautyandthebeast', 'coco'],
        clues: ['Toys coming to life', 'Clownfish searching for his son', 'Ogre and his donkey friend', 'Ice queen and her sister', 'City of anthropomorphic animals', 'Polynesian princess on a journey', 'Simba\'s journey to the throne', 'Street rat and magical genie', 'Tale as old as time', 'Mexican boy\'s musical adventure in the Land of the Dead'],
    },
    tvCartoons: {
        words: ['simpsons', 'spongebob', 'tomandjerry', 'powerpuffgirls', 'scoobydoo', 'flintstones', 'pokemon', 'dexter', 'batman', 'rickandmorty'],
        clues: ['Yellow family in Springfield', 'Yellow sponge in a pineapple', 'Cat and mouse duo', 'Sugar, spice, and everything nice', 'Mystery-solving dog and friends', 'Modern Stone Age family', 'Gotta catch \'em all!', 'Boy-genius with a secret lab', 'Dark knight of Gotham', 'Science fiction adventures with a mad scientist and his grandson'],
    },
};

document.addEventListener('keypress', (event) => {
    const key = String.fromCharCode(event.which);
    if (/^[a-zA-Z]$/.test(key)) {
        guessLetter(key);
    }
});

const startGame = (category) => window.location.href = `hangman.html?category=${category}`;
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams && urlParams.get('category');
const words = selectedCategory && categories[selectedCategory].words;
const clues = selectedCategory && categories[selectedCategory].clues;

let currentWordIndex = 0;
let selectedWord = words && words[currentWordIndex];
let selectedClue = clues && clues[currentWordIndex];

const lettersToReveal = 3;
const revealedIndexes = [];

if (selectedWord) {
    for (let i = 0; i < lettersToReveal; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * selectedWord.length);
        } while (revealedIndexes.includes(randomIndex));
        revealedIndexes.push(randomIndex);
    }
}

let guessedLetters = [];
let remainingAttempts = 6;

const displayWord = () => {
    const wordElement = document.getElementById('word');
    wordElement.innerHTML = selectedWord
        .split('')
        .map((letter, index) => (guessedLetters.includes(letter) || revealedIndexes.includes(index) ? letter : '_'))
        .join(' ');

    if (!wordElement.innerHTML.includes('_')) {
        alert('Congratulations! You guessed the word!');
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            selectedWord = words[currentWordIndex];
            selectedClue = clues[currentWordIndex];
            resetGame();
        } else {
            alert('You have completed all the words!');
            resetGame();
        }
    }
}

const displayClue = () => {
    document.getElementById('clue').innerHTML = `${selectedClue}`;
}

const guessLetter = (key) => {
    const letter = key.toLowerCase();

    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        if (!selectedWord.includes(letter)) {
            document.getElementById('word').classList.add('shake');
            document.getElementById('wrongSound').play();
            setTimeout(() => {
                document.getElementById('word').classList.remove('shake');
            }, 500);
            remainingAttempts--;

            if (remainingAttempts === 0) {
                alert(`Game Over! The word was "${selectedWord}"`);
                currentWordIndex++;
                if (currentWordIndex < words.length) {
                    selectedWord = words[currentWordIndex];
                    selectedClue = clues[currentWordIndex];
                    resetGame();
                } else {
                    alert('You have completed all the words!');
                    resetGame();
                }
            }
        }

        displayWord();
    }
}

const resetGame = () => {
    guessedLetters = [];
    remainingAttempts = 4;
    displayClue();
    displayWord();
}

const nextQuestion = () => {
    currentWordIndex++;

    if (currentWordIndex < words.length) {
        selectedWord = words[currentWordIndex];
        selectedClue = clues[currentWordIndex];
        resetGame();
    } else {
        alert('You have completed all the words!');
    }
}

document.getElementById('clue') && displayClue();
document.getElementById('word') && displayWord();

const goBack = () => {
    window.location.href = 'index.html'
}


Object.keys(categories).forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.innerHTML = `<h2>${category}</h2>`;

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Word</th>
                <th>Clue</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    categories[category].words.forEach((word, index) => {
        const row = document.createElement('tr');
        const wordCell = document.createElement('td');
        const clueCell = document.createElement('td');

        wordCell.textContent = word;
        clueCell.textContent = categories[category].clues[index];

        row.appendChild(wordCell);
        row.appendChild(clueCell);

        table.querySelector('tbody').appendChild(row);
    });

    categoryContainer.appendChild(table);
    document.getElementById('categories-container') && document.getElementById('categories-container').appendChild(categoryContainer);
});
