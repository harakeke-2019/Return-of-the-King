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
      name: data[0].name,
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

// post new sentence and load story page
router.post('/form/submit', (req, res) => {
  const sentence = req.body.sentence
  db.addNewSentence(sentence)
    .then(db.loadStory)
    .then(postStory)
    .catch(displayErrors)

  function postStory (story) {
    console.log(story)
    res.render('story', story)
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
