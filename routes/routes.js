const pokemonRoutes = require('./pokemon');

const appRouter = (app, fs, cors) => {

    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    pokemonRoutes(app, fs);
};

module.exports = appRouter;