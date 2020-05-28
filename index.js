const csv = require('csv-parser');
const fs = require('fs');
const results = [];
let index = 1;

const csvDataPath = './data/pokemon.csv';
const jsonDataPath = './data/pokemon_csv-parser.json';

fs.createReadStream(csvDataPath)
.pipe(csv({
    headers: ['number', 'name', 'type1', 'type2', 'total', 'hp', 'attack', 'defense', 'speed_atk', 'speed_def', 'speed', 'generation', 'legendary', 'id'],
    skipLines: 1
}))
.on('data', (data) => {
    data.id = index;
    results.push(data);
    index ++;
})
.on('end', () => {
    console.log('CSV file successfully processed');
    fs.writeFileSync(jsonDataPath, JSON.stringify(results));
});