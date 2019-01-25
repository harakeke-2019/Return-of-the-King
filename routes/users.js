const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

// update exisiting story
router.get('/form', (req, res) => {
  db.getLastSentence()
    .then(formatData)
    .then(loadUpdatePage)
    .catch(displayErrors)

  function formatData (data) {
    const info = {
      sentence: data[0].sentence
    }
    return info
  }

  function loadUpdatePage (info) {
    res.render('form', info)
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

// post new sentence to db
router.post('/form', (req, res) => {
  const sentence = req.body.sentence
  db.addNewSentence(sentence)
    .then(postStory)
    .catch(displayErrors)

  function postStory () {
    res.redirect('/story')
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

// Show story
router.get('/story', (req, res) => {
  db.loadStory()
    .then(formatData)
    .then(showStory)
    .catch(displayErrors)

  function formatData (data) {
    console.log(data)
    const info = {
      sentence: data.map(i => i.sentence)
    }
    return info
  }

  function showStory (info) {
    console.log('story', info)
    res.render('story', info)
  }

  // have the array, map over each object in array

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
