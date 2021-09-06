const chai = require("chai");
const {minBribes, fullDeckCount} = require("../src/bribes/algorithms");

// Assertion
chai.should();

describe("Test minBribes algorithm", () => {
    it('should return 0 if the queue is sorted', function () {
        const bribes = minBribes([1, 2, 3, 4]);
        bribes.should.equal(0);
    });
    it('should return different to o if the queue is not sorted', function () {
        const bribes = minBribes([3, 2, 4, 1, 5]);
        bribes.should.equal(4);
    });
    it('should return "Too chaotic" if element bribed more than two elements', function () {
        const bribes = minBribes([4, 1, 2, 3]);
        bribes.should.equal('Too chaotic');
    });
});