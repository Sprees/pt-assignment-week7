let styles = {
    bg: 'background: red;',
    c: 'color: white;',
    cg: 'color: lightgreen;',
    fw: 'font-weight: bold;',
    fs: 'font-size: 14px;'
}

const { bg, c, cg, fw, fs } = styles

styledLog('JS4 Coding Project', [fw, fs]);
styledLog('===============================', [c, bg]);

// ANCHOR 1.
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

styledLog('1. Create ages array:', [fw])
console.log({ages}, ages);
styledLog('===============================', [c, bg]);

// ANCHOR 1a.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
function subtractFirstfromLastAge(arr) {
    return arr[arr.length - 1] - arr[0];
}

styledLog('1a. Subtract first age from last age:', [fw]);
console.log(subtractFirstfromLastAge(ages));
styledLog('===============================', [c, bg]);

// ANCHOR 1b.
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(33)

styledLog('1b. Push new age:', [fw]);
console.log({ages}, ages);

styledLog('Subtract first age from last age (dynamic):', [fw]);
console.log(subtractFirstfromLastAge(ages));
styledLog('===============================', [c, bg]);

// ANCHOR 1c.
// Use a loop to iterate through the array and calculate the average age.
function calcAvg(arr) {
    let sumOfAll = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAll += arr[i];
    }
    return sumOfAll / arr.length;
}

styledLog('1c. Calculate average age:', [fw]);
console.log(calcAvg(ages));
styledLog('===============================', [c, bg]);

// ANCHOR 2.
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

styledLog('2. Create names array:', [fw]);
console.log({names}, names);
styledLog('===============================', [c, bg]);

// ANCHOR 2a.
// Use a loop to iterate through the array and calculate the average number of letters per name.
function avgLettersPerName(arr) {
    let sumOfAllLetters = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAllLetters += arr[i].length;
    }
    return sumOfAllLetters / arr.length;
}

styledLog('2a. Calculate average letters per name:', [fw]);
console.log(avgLettersPerName(names));
styledLog('===============================', [c, bg]);

// ANCHOR 2b.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
function concatNamesWithSpace(arr) {
    let concatedNames = '';
    for(let i = 0; i < arr.length; i++) {
        // Check if it's the last name in the array. If so, don't add a space.
        // Could use concatedNames.trim(), after the loop, for the same result.
        if(i === arr.length - 1) concatedNames += arr[i];
        else concatedNames += arr[i] + ' ';
    }
    return concatedNames;
}

styledLog('2b. Concatenate names together separated by a space:', [fw]);
console.log(concatNamesWithSpace(names));
styledLog('===============================', [c, bg]);

// ANCHOR 3.
// How do you access the last element of any array?
    // Find the length of the array (arr.length), counting the number of elements, and subtract 1 because the index starts at 0.
    styledLog('3. How do you access the last element of any array?', [fw]);
    console.log('arr[arr.length - 1]');
    styledLog('===============================', [c, bg]);

// ANCHOR 4.
// How do you access the first element of any array?
    // Square brackets to target an element by it's index. Index 0 for the first element.
    styledLog('4. How do you access the first element of any array?', [fw]);
    console.log('arr[0]')
    styledLog('===============================', [c, bg]);

// ANCHOR 5.
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];

styledLog('5. Create a new array called nameLengths:', [fw]);
console.log({nameLengths});

function generateNameLengths(arr) {
    let nameLengths = [];
    for(let i = 0; i < arr.length; i++) {
        nameLengths.push(arr[i].length);
    }
    return nameLengths;
}

styledLog('Add the length of each name from the names array to the nameLengths array:', [fw]);
nameLengths = [...generateNameLengths(names)];
console.log({nameLengths}, nameLengths);
styledLog('===============================', [c, bg]);

// ANCHOR 6.
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
function calculateSumOfAllElements(arr) {
    let sumOfAll = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAll += arr[i];
    }
    return sumOfAll;
}

styledLog('6. Calculate the sum of all nameLengths:', [fw]);
console.log(calculateSumOfAllElements(nameLengths));
styledLog('===============================', [c, bg]);

// ANCHOR 7.
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatXTimes(word, n) {
    let concatenated = '';
    for(let i = 0; i < n; i++) {
        concatenated += word;
    }
    return concatenated;
}

styledLog('7. Write a function that takes two parameters, word and n, and returns the word concatenated n times:', [fw]);
console.log(concatXTimes);
styledLog('concatXTimes("Hello", 3) => ', [cg], concatXTimes('Hello', 3))
styledLog('===============================', [c, bg]);

// ANCHOR 8.
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function concatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

styledLog('8. Write a function that takes two parameters, firstName and lastName, and returns a full name:', [fw]);
console.log(concatName);
styledLog('concatName("Alex", "Minnick") => ', [cg], concatName('Alex', 'Minnick'));
styledLog('===============================', [c, bg]);

// ANCHOR 9.
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numArr) {
    let sumOfAll = 0;
    for(let i = 0; i < numArr.length; i++) {
        sumOfAll += numArr[i];
    }
    return sumOfAll > 100 ? true : false;
}

styledLog('9. Write a function that takes an array of numbers and returns true if sum of all is greater than 100:', [fw]);
console.log(isSumGreaterThan100);
styledLog('isSumGreaterThan100([10, 50, 19, 33, 5]) => ', [cg], isSumGreaterThan100([10, 50, 19, 33, 5]));
styledLog('isSumGreaterThan100([1,2,3,4,5]) => ', [cg], isSumGreaterThan100([1,2,3,4,5]));
styledLog('===============================', [c, bg]);

// ANCHOR 10.
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

styledLog('10. Write a function that takes an array of numbers and returns the average of all the elements in the array:', [fw]);
console.log(calcAvg); // Function created on line 43 -- Anchor 1c.
styledLog('calcAvg([10,20,30,40,50]) => ', [cg], calcAvg([10,20,30,40,50]));
styledLog('===============================', [c, bg]);

// ANCHOR 11.
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isFirstArrAvgGreater(arr1, arr2) {
    let i, arr1Sum = 0, arr2Sum = 0;

    if(arr1.length > arr2.length) i = arr1.length;
    else i = arr2.length;

    for(; i > 0; i--) {
        if(arr1[i] !== undefined) arr1Sum += arr1[i];
        if(arr2[i] !== undefined) arr2Sum += arr2[i];
    }

    return arr1Sum/2 > arr2Sum/2;
}
styledLog("11. Write a function that takes two number arrays and returns true if the first number array's average is more than the second:", [fw]);
console.log(isFirstArrAvgGreater);
styledLog('isFirstArrAvgGreater([1,2,3,4,5,6], [2,3,4,5,6]) => ', [cg], isFirstArrAvgGreater([1,2,3,4,5,6], [2,3,4,5,6]));
styledLog('===============================', [c, bg]);

// ANCHOR 12.
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true, moneyInPocket = 20;

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

styledLog('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50:', [fw]);
console.log(willBuyDrink);
console.log({isHotOutside}, {moneyInPocket})
styledLog('willBuyDrink(isHotOutside, moneyInPocket) => ', [cg], willBuyDrink(isHotOutside, moneyInPocket));
styledLog('===============================', [c, bg]);

// ANCHOR 13.
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// I created a function that can apply styles to console.log() and I also created an object that has my selected styles.
function styledLog(log, styles = [], ...args) {
    let argsArr;
    if(!styles.length) {
        argsArr = [log, ...args]
    } else {
        argsArr = [`%c${log}`, styles.join(''), ...args]
    }
    console.log.apply(this, argsArr)
}

styledLog('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it:', [fw]);
console.log(styledLog);
styledLog('===============================', [c, bg]);