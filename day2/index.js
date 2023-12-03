import fs from 'fs';

function partOne(file) {
    const lines = fs.readFileSync(file, 'utf8').trim().split('\n');

    let validGames = [];

    lines.forEach((line) => {

        const gameNumber = line.split(':')[0].slice(4).trim();
        const cubeNumbers = line.split(':')[1].trim();

        const reBlue = /(^|; |, )\b(1[5-9]|[2-9][0-9]|[1-9][0-9]{2,}) blue\b/;
        const checkBlue = reBlue.test(cubeNumbers);

        const reRed = /(^|; |, )\b(1[3-9]|[2-9][0-9]|[1-9][0-9]{2,}) red\b/;
        const checkRed = reRed.test(cubeNumbers);

        const reGreen = /(^|; |, )\b(1[4-9]|[2-9][0-9]|[1-9][0-9]{2,}) green\b/;
        const checkGreen = reGreen.test(cubeNumbers);

        if (!checkBlue && !checkGreen && !checkRed) {
            validGames.push(parseInt(gameNumber));
        }
    });

    return validGames.reduce((a, b) => a + b, 0);

}

function partTwo(file) {
    const lines = fs.readFileSync(file, 'utf8').trim().split('\n');
    let powers = [];

    lines.forEach((line) => {
        const cubeNumbers = line.split(':')[1].trim().split(/, |; /);

        const blues = cubeNumbers.filter((cube) => cube.includes('blue'))
        const bluesNumbers = blues.map((b) => Number(b.split(' ')[0]));
        const highestBlue = Math.max(...bluesNumbers);

        const reds = cubeNumbers.filter((cube) => cube.includes('red'));
        const redsNumbers = reds.map((r) => Number(r.split(' ')[0]));
        const highestRed = Math.max(...redsNumbers);

        const greens = cubeNumbers.filter((cube) => cube.includes('green'));
        const greensNumbers = greens.map((g) => Number(g.split(' ')[0]));
        const highestGreen = Math.max(...greensNumbers);

        powers.push(highestBlue * highestGreen * highestRed);

    });

    return powers.reduce((a, b) => a + b, 0);
}

const result = partOne('./input.txt');
console.log('Part 1 result is ', result);
const partTwoResult = partTwo('./input.txt');
console.log('Part 2 result is', partTwoResult);