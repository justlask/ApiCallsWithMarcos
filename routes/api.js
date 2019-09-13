const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1')
  .then(responseFromApi => {
      console.log(responseFromApi.data)
      res.render('api', responseFromApi.data)
  }).catch(err => next(err))
})


module.exports = router;