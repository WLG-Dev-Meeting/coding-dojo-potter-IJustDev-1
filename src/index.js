const booksPrice = 8;

/**
 * @param {number} bookAmount number of books
 */
function calculateDiscount(bookAmount) {
    // 2  3  4  5
    // 5 10 20 25
    return bookAmount >= 4 ? bookAmount * 5 : (bookAmount - 1) * 5;
}
module.exports.calculateDiscount = calculateDiscount;

/**
 * @param {any} amountOfBooks
 */
module.exports.calculatePrice = function calculateLowestPrice(amountOfBooks) {
    const bookAmounts = amountOfBooks;
    const bookIndexes = Object.keys(bookAmounts);
    const amounts = Object.values(bookAmounts);
    let total = 0;
    let lastSum = 0;
    let lastBookAmount = 0;
    for (let i = 0; i !== Math.max.apply(null, amounts); i += 1) {
        let differentBooks = 0;
        bookIndexes.forEach((book) => {
            const amount = bookAmounts[book];
            if (amount >= 1) {
                bookAmounts[book] -= 1;
                differentBooks += 1;
            }
        });
        if (differentBooks === 3 && lastBookAmount === 5) {
            total -= lastSum;
            lastSum = 2 * 4 * booksPrice * (1 - calculateDiscount(4) / 100);
        } else {
            const discount = calculateDiscount(differentBooks);
            lastSum = differentBooks * booksPrice * (1 - (discount / 100));
        }
        lastBookAmount = differentBooks;
        total += lastSum;
    }
    return total;
};
