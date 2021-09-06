//Bribes algorithms.js
const fullDeckCount = (cards) => {

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
