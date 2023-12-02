import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');

console.log(lines);

const values = [];

lines.map((line) => {
    const lineArray = line.split('');
    console.log(lineArray);
    //add numbers to new array
    const filteredArray = lineArray.filter((a) => {
        return parseInt(a)
    })
    console.log(filteredArray);
    const firstNum = filteredArray[0];
    const lastNum = filteredArray[filteredArray.length - 1];
    const concatNums = firstNum + lastNum;
    console.log('concatNums', concatNums);
    values.push(parseInt(concatNums));
});

console.log('values', values);

const result = values.reduce((a, b) => a + b, 0);
console.log('result', result);
