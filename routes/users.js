const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStoryNames()
    .then(displayStoryName)
    .catch(displayErrors)

  function displayStoryName (info) {
    console.log(info)
    res.render('index', info)
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
