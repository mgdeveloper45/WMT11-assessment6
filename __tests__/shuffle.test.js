const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('returns an empty array if input array is empty', () => {
    expect(shuffle([])).toEqual([]);
  })

  test('returns the same array if input array has only one element', () => {
    expect(shuffle([5])).toEqual([5]);
  })

  test('returns a shuffled array with the same length as the input array', () => {
    const inputArr = [1, 2, 3, 4, 5];
    expect(shuffle(inputArr)).toHaveLength(inputArr.length);
  })
  
  test('returns a shuffled array with the same elements as the input array', () => {
    const inputArr = [6, 7, 8, 9, 10];
    const shuffleArr = shuffle(inputArr);
    expect(shuffleArr.sort()).toEqual(inputArr.sort());
  })
  
  test('returns a different shuffled array for different calls', () => {
    const inputArr = [11, 12, 13, 14, 15];
    const shuffleArr1 = shuffle(inputArr);
    const shuffleArr2 = shuffle(inputArr);
    expect(shuffleArr1).not.toEqual(shuffleArr2);
  })

  test('does not modify the original input array', () => {
    const inputArr = [16, 17, 18, 19, 20];
    expect(inputArr).toEqual([16, 17, 18, 19, 20]);
  })

});
