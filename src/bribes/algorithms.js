//Bribes algorithms.js
const fullDeckCount = (cards) => {
    const cardTypes = ['hearts', 'clubs', 'diamonds', 'spades'];
    const cardNumbers = Array.from({length: 9}, (_, index) => index + 2).concat(['J', 'Q', 'K', 'A']);
    let count = Number.MAX_VALUE;

    for (let cardType of cardTypes) {
        for (let cardNumber of cardNumbers) {

            const cardCount = cards.filter(card => card.suit === cardType && card.value === cardNumber).length;

            if (cardCount < count) {
                count = cardCount;
            }
        }
    }

    return count;
};

const minBribes = (queue) => {

    const bribes = {};
    let temp = [...queue];

    const max = (x, y) => x > y ? x : y;

    while (temp.length > 0) {
        const maxNumber = temp.reduce(max);
        const index = temp.indexOf(maxNumber);

        if (!bribes[maxNumber]) {
            bribes[maxNumber] = 0
        }

        bribes[maxNumber] += temp.length - (index + 1);

        if (bribes[maxNumber] >= 3) {
            return 'Too chaotic'
        }

        temp = temp.filter(value => value !== maxNumber);
    }

    return Object.values(bribes).reduce((x, y) => x + y)
};

module.exports = {
    fullDeckCount,
    minBribes
};
