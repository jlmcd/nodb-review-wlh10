const pokemonCaught = []
let id = 0

module.exports = {
  catch: (req, res) => {
    const pokemonObj = {
      name: req.body.name,
      img: req.body.img,
      id: id++
    }
    pokemonCaught.push(pokemonObj)
    res.status(200).send(pokemonCaught)
  },
  rename: (req, res) => {
    const {id} = req.params
    const {newName} = req.body
    const index = pokemonCaught.findIndex(el => el.id === +id) // find the index of the pokemon with the id we give
    pokemonCaught[index].name = newName
    res.status(200).send(pokemonCaught)
  },
  release: (req, res) => {
    const {id} = req.params
    const index = pokemonCaught.findIndex(el => el.id === +id) // find the index of the pokemon with the id we give
    pokemonCaught.splice(index, 1)
    res.status(200).send(pokemonCaught)
  },
  getAllPokemon: (req, res) => {
    res.status(200).send(pokemonCaught)
  }
}