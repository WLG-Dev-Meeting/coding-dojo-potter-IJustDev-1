const {
    describe, it,
} = require('mocha');
const { expect } = require('chai');

const {
    calculatePrice,
    calculateDiscount,
} = require('./index');

/* eslint-disable */
describe('Potter tests', () => {
    it('Calculate discount of four books', () => {
        expect(calculateDiscount(5)).to.be.eql(25);
        expect(calculateDiscount(4)).to.be.eql(20);
        expect(calculateDiscount(3)).to.be.eql(10);
        expect(calculateDiscount(2)).to.be.eql(5);
        expect(calculateDiscount(1)).to.be.eql(0);
    });
    it('Three books each once should return 21.6', () => {
        const books = {
            First: 1,
            Second: 1,
            Third: 1,
            Fourth: 0,
            Fifth: 0,
        };
        expect(calculatePrice(books)).to.be.eql(21.6);
    });
    it('Four books each once should return 25.6', () => {
        const books = {
            First: 1,
            Second: 1,
            Third: 1,
            Fourth: 1,
            Fifth: 0,
        };
        expect(calculatePrice(books)).to.be.eql(25.6);
    });
    it('Five books each once should return 30.0', () => {
        const books = {
            First: 1,
            Second: 1,
            Third: 1,
            Fourth: 1,
            Fifth: 1,
        };
        expect(calculatePrice(books)).to.be.eql(30);
    });
    it('F-2 S-2 T-2 F-1 F-1 should return 51.2', () => {
        const books = {
            First: 2,
            Second: 2,
            Third: 2,
            Fourth: 1,
            Fifth: 1,
        };
        expect(calculatePrice(books)).to.be.eql(51.2);
    });
    it('F-1 S-1 T-2 F-1 F-2 should return 45.2', () => {
        const books = {
            First: 1,
            Second: 1,
            Third: 2,
            Fourth: 1,
            Fifth: 2,
        };
        expect(calculatePrice(books)).to.be.eql(45.2);
    });
    it('F-1 S-1 T-0 F-0 F-0 should return 15.2', () => {
        const books = {
            First: 1,
            Second: 1,
            Third: 0,
            Fourth: 0,
            Fifth: 0,
        };
        expect(calculatePrice(books)).to.be.eql(15.2);
    });
    it('F-5 S-5 T-4 F-5 F-4 should return 141.2', () => {
        const books = { First: 5, Second: 5, Third: 4, Fourth: 5, Fifth: 4 };
        expect(calculatePrice(books)).to.be.eql(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    });
    it('Amazon order - performance 1.000.000 books', () => {
        const books = { First: 1000000, Second: 1000000, Third: 1000000, Fourth: 1000000, Fifth: 1000000 };
        // Damn that's cheap
        expect(calculatePrice(books)).to.be.eql(30000000);
    });
});
