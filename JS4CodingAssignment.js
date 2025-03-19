let styles = {
    bg: 'background: red;',
    c: 'color: white;',
    fw: 'font-weight: bold;',
    fs: 'font-size: 14px;'
}

styledLog('JS4 Coding Project', styles.fw, styles.fs);
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 1.
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

styledLog('1. Create ages array:', styles.fw)
console.log({ages}, ages);
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 1a.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
function subtractFirstfromLastAge(arr) {
    return arr[arr.length - 1] - arr[0];
}

styledLog('1a. Subtract first age from last age:', styles.fw);
console.log(subtractFirstfromLastAge(ages));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 1b.
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(33)

styledLog('1b. Push new age:', styles.fw);
console.log({ages}, ages);

styledLog('Subtract first age from last age (dynamic):', styles.fw);
console.log(subtractFirstfromLastAge(ages));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 1c.
// Use a loop to iterate through the array and calculate the average age.
function calcAvg(arr) {
    let sumOfAll = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAll += arr[i];
    }
    return sumOfAll / arr.length;
}

styledLog('1c. Calculate average age:', styles.fw);
console.log(calcAvg(ages));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 2.
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

styledLog('2. Create names array:', styles.fw);
console.log({names}, names);
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 2a.
// Use a loop to iterate through the array and calculate the average number of letters per name.
function avgLettersPerName(arr) {
    let sumOfAllLetters = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAllLetters += arr[i].length;
    }
    return sumOfAllLetters / arr.length;
}

styledLog('2a. Calculate average letters per name:', styles.fw);
console.log(avgLettersPerName(names));
styledLog('===============================', styles.c, styles.bg);

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

styledLog('2b. Concatenate names together separated by a space:', styles.fw);
console.log(concatNamesWithSpace(names));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 3.
// How do you access the last element of any array?
    // Find the length of the array (arr.length), counting the number of elements, and subtract 1 because the index starts at 0.
    styledLog('3. How do you access the last element of any array?', styles.fw);
    console.log('arr[arr.length - 1]');
    styledLog('===============================', styles.c, styles.bg);

// ANCHOR 4.
// How do you access the first element of any array?
    // Square brackets to target an element by it's index. Index 0 for the first element.
    styledLog('4. How do you access the first element of any array?', styles.fw);
    console.log('arr[0]')
    styledLog('===============================', styles.c, styles.bg);

// ANCHOR 5.
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];

styledLog('5. Create a new array called nameLengths:', styles.fw);
console.log({nameLengths});

function generateNameLengths(arr) {
    let nameLengths = [];
    for(let i = 0; i < arr.length; i++) {
        nameLengths.push(arr[i].length);
    }
    return nameLengths;
}

styledLog('Add the length of each name from the names array to the nameLengths array:', styles.fw);
nameLengths = [...generateNameLengths(names)];
console.log({nameLengths}, nameLengths);
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 6.
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
function calculateSumOfAllElements(arr) {
    let sumOfAll = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfAll += arr[i];
    }
    return sumOfAll;
}

styledLog('6. Calculate the sum of all nameLengths:', styles.fw);
console.log(calculateSumOfAllElements(nameLengths));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 7.
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatXTimes(word, n) {
    let concatenated = '';
    for(let i = 0; i < n; i++) {
        concatenated += word;
    }
    return concatenated;
}

styledLog('7. Write a function that takes two parameters, word and n, and returns the word concatenated n times:', styles.fw);
console.log(concatXTimes);
console.log('%cconcatXTimes("Hello", 3) => ', 'color: blue', concatXTimes('Hello', 3))
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 8.
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function concatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

styledLog('8. Write a function that takes two parameters, firstName and lastName, and returns a full name:', styles.fw);
console.log(concatName);
console.log('%cconcatName("Alex", "Minnick") => ', 'color: blue;', concatName('Alex', 'Minnick'));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 9.
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numArr) {
    let sumOfAll = 0;
    for(let i = 0; i < numArr.length; i++) {
        sumOfAll += numArr[i];
    }
    return sumOfAll > 100 ? true : false;
}

styledLog('9. Write a function that takes an array of numbers and returns true if sum of all is greater than 100:', styles.fw);
console.log(isSumGreaterThan100);
console.log('%cisSumGreaterThan100([10, 50, 19, 33, 5]) => ', 'color: blue;', isSumGreaterThan100([10, 50, 19, 33, 5]));
console.log('%cisSumGreaterThan100([1,2,3,4,5]) => ', 'color: blue;', isSumGreaterThan100([1,2,3,4,5]));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 10.
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

styledLog('10. Write a function that takes an array of numbers and returns the average of all the elements in the array:', styles.fw);
console.log(calcAvg); // Function created on line 43 -- Anchor 1c.
console.log('%ccalcAvg([10,20,30,40,50]) => ', 'color: blue;', calcAvg([10,20,30,40,50]));
styledLog('===============================', styles.c, styles.bg);

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
styledLog("11. Write a function that takes two number arrays and returns true if the first number array's average is more than the second:", styles.fw);
console.log(isFirstArrAvgGreater);
console.log('%cisFirstArrAvgGreater([1,2,3,4,5,6], [2,3,4,5,6]) => ', 'color:blue;', isFirstArrAvgGreater([1,2,3,4,5,6], [2,3,4,5,6]));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 12.
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true, moneyInPocket = 20;

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

styledLog('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50:', styles.fw);
console.log(willBuyDrink);
console.log({isHotOutside}, {moneyInPocket})
console.log('%cwillBuyDrink(isHotOutside, moneyInPocket) => ', 'color: blue;', willBuyDrink(isHotOutside, moneyInPocket));
styledLog('===============================', styles.c, styles.bg);

// ANCHOR 13.
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// I created a function that can apply styles to console.log() and I also created an object that has my selected styles.
function styledLog(log, ...args) {
    return console.log(`%c${log}`, args.join(''));
}

styledLog('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it:', styles.fw);
console.log(styledLog);
styledLog('===============================', styles.c, styles.bg);