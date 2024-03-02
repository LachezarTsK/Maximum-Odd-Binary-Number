
/**
 * @param {string} input
 * @return {string}
 */
var maximumOddBinaryNumber = function (input) {
    const ASCII_ZERO = 48;
    let numberOfBitsSetToOne = 0;
    const bits = input.split('');

    for (let bit of bits) {
        numberOfBitsSetToOne += bit.codePointAt(0) - ASCII_ZERO;
    }

    for (let i = 0; i < numberOfBitsSetToOne - 1; ++i) {
        bits[i] = '1';
    }
    for (let i = numberOfBitsSetToOne - 1; i < bits.length; ++i) {
        bits[i] = '0';
    }
    bits[bits.length - 1] = '1';

    return bits.join('');
};
