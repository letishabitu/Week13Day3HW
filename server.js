require('dotenv').config();
const express = require('express');
const app = express();
// const fruits = require('./models/fruits.js');
// const vegitables = require('./models/vegitables.js');
// const pokemons = require('./models/pokemon');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const jsxViewEngine = require('jsx-view-engine');

const mongoURI = process.env.MONGO_URI;
const PORT= process.env.PORT || 3000;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})


app.set('view engine', 'jsx');
// app.set('views', './views/fruits');
// app.set('views', './views/vegitables');
app.set('views', './views/pokemon')
app.engine('jsx', jsxViewEngine());


app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App');
});

// I - INDEX - dsiplays a list of all fruits


app.get('/pokemons/', async (req, res) => {
    // res.send(fruits);
    try {
        const foundPokemons = await Pokemon.find({});
        res.status(200).render('Index', {pokemons: foundPokemons});
    } catch (err) {
        res.status(400).send(err);
    }
    
});





app.get('/pokemons/new', (req, res) => {
    res.render('New');
});

// C - CREATE - update our data store


//pokemons
// C - CREATE - update our data store
app.post('/pokemons', async (req, res) => {
   
    try {
        const createdPokemon = await Pokemon.create(req.body);
        res.status(200).redirect('/pokemons');
    } catch (err) {
        res.status(400).send(err);
    }
    
})



app.get('/pokemons/:id', async (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    try {
        const foundPokemon = await Pokemon.findById(req.params.id);
        res.render('Show', {pokemon: foundPokemon});
    } catch (err) {
        res.status(400).send(err);
    }

})
app.listen(3001, () => {
    console.log('listening');
});