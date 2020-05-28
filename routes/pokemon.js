const pokemonRoutes = (app, fs) => {

    const dataPath = './data/pokemon_csv-parser.json';

    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse( data ) : data);
        });
    };

   const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // GET
    app.get('/pokemons', (req, res) => {
        readFile(data => {
            res.status(200).send(data);
        },
            true);
    });

    // GET BY ID
    app.get('/pokemons/:id', (req, res) => {
        readFile(data => {

            const pokemonId = parseInt(req.params["id"]) - 1;

            res.status(200).send(data[pokemonId]);
        },
            true);
    });

    // POST
    app.post('/pokemons', (req, res) => {
        readFile(data => {
            let newPokemonId = Object.keys(data).length;

            var newPokemon = {
                "number": req.body.number,
                "name": req.body.name,
                "type1": req.body.type1, 
                "type2": req.body.type2, 
                "total": req.body.total, 
                "hp": req.body.hp, 
                "attack": req.body.attack, 
                "defense": req.body.defense, 
                "speed_atk": req.body.speed_atk, 
                "speed_def": req.body.speed_def, 
                "speed": req.body.speed, 
                "generation":req.body.generation, 
                "legendary":req.body.legendary,
                "id":newPokemonId+1
                };

            data[newPokemonId] = newPokemon;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new pokemon added');
            });
        },
            true);
    });

    // PUT
    app.put('/pokemons/:id', (req, res) => {
        readFile(data => {

            const pokemonId = parseInt(req.params["id"]) - 1;
            var updatedPokemon = {
                "number": req.body.number,
                "name": req.body.name,
                "type1": req.body.type1, 
                "type2": req.body.type2, 
                "total": req.body.total, 
                "hp": req.body.hp, 
                "attack": req.body.attack, 
                "defense": req.body.defense, 
                "speed_atk": req.body.speed_atk, 
                "speed_def": req.body.speed_def, 
                "speed": req.body.speed, 
                "generation":req.body.generation, 
                "legendary":req.body.legendary,
                "id":parseInt(req.params["id"])
                };
            data[pokemonId] = updatedPokemon;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`pokemon id:${req.params["id"]} updated`);
            });
        },
            true);
    });

    // DELETE
    app.delete('/pokemons/:id', (req, res) => {
        readFile(data => {

            const pokemonId = parseInt(req.params["id"]) - 1;
            data.splice(pokemonId, 1);

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`pokemon id:${req.params["id"]} removed`);
            });
        },
            true);
    });

};

module.exports = pokemonRoutes;
