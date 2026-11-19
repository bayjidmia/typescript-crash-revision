//problem-1 finding the largest number in an array

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largestNumber: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
console.log(largestNumber);

//problem-2 finding the smallest number in an array
let smallestNumber: number = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}
console.log(smallestNumber);
