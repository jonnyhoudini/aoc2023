import fs from 'fs';

function partTwo(file) {
    const values = [];
    const lines = fs.readFileSync(file, 'utf8').trim().split('\n');
    console.log(lines);

    const linesWithWordsReplaced = lines.map((line) => line
        .replaceAll('one', 'o1e')
        .replaceAll('two', 't2o')
        .replaceAll('three', 't3e')
        .replaceAll('four', 'f4r')
        .replaceAll('five', 'f5e')
        .replaceAll('six', 's6x')
        .replaceAll('seven', 's7n')
        .replaceAll('eight', 'e8t')
        .replaceAll('nine', 'n9e')
    )

    console.log('linesWithWordsReplaced', linesWithWordsReplaced);

    linesWithWordsReplaced.map((line) => {
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

    const answer = values.reduce((a, b) => a + b, 0);
    return answer;

}

const result = partTwo('./input.txt');
console.log('result', result);

