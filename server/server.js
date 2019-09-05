require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const grassCtrl = require('./controllers/grassCtrl')
const pokeCtrl = require('./controllers/pokemonCtrl')

// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon) // to get three wild pokemon

app.post('/api/pokemon', pokeCtrl.catch)
app.put('/api/pokemon/:id', pokeCtrl.rename)
app.delete('/api/pokemon/:id', pokeCtrl.release)
app.get('/api/pokemon', pokeCtrl.getAllPokemon)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy little accidents`))