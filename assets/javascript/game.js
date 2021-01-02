const myCards = [
    {
        name : 'fries',
        img  : './assets/images/fries.png'
    },
    {
        name : 'fries',
        img  : './assets/images/fries.png'
    },
    {
        name : 'cheeseburger',
        img  : './assets/images/cheeseburger.png'
    },
    {
        name : 'cheeseburger',
        img  : './assets/images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img  : './assets/images/hotdog.png'
    },
    {
        name : 'hotdog',
        img  : './assets/images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img  : './assets/images/ice-cream.png'
    },
    {
        name : 'ice-cream',
        img  : './assets/images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img  : './assets/images/milkshake.png'
    },
    {
        name : 'milkshake',
        img  : './assets/images/milkshake.png'
    },
    {
        name : 'pizza',
        img  : './assets/images/pizza.png'
    },
    {
        name : 'pizza',
        img  : './assets/images/pizza.png'
    }
]

const game = document.querySelector('.game-container');
const cardsChosen = [];
const cardsChosenId = [];

function gameBoard () {
    for(let i = 0; i < myCards.length; i++) {
        let cardImg = document.createElement('img');
        cardImg.setAttribute('src', './assets/images/blank.png');
        cardImg.setAttribute('data-id', i);
        cardImg.addEventListener('click', flipTheCard);
        game.appendChild(cardImg)
    }
}
gameBoard();

function flipTheCard () {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(myCards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',myCards[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(cardsMatched, 500);
    }
}

function cardsMatched () {
    let allCards = document.querySelectorAll('img');
    const firstOption = cardsChosenId[0];
    const secondOption = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        alert("You found a match");
        allCards[firstOption].setAttribute('src','assets/images/white.png')
        allCards[secondOption].setAttribute('src','assets/images/white.png')
    }else{
        alert("Sorry you missed")
        allCards[firstOption].setAttribute('src','assets/images/blank.png')
        allCards[secondOption].setAttribute('src','assets/images/blank.png')
    }
}