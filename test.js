const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getStoryNames()
    .then(displayStoryName)
    .catch(displayErrors)

  function displayStoryName (info) {
    // console.log(info)
    res.render('index', {info})
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})

// update exisiting story
router.get('/form/:id', (req, res) => {
  console.log(req.params.id)
  const id = Number(req.params.id)
  db.updateStory(id)
    .then(formatData)
    .then(loadUpdatePage)
    .catch(displayErrors)

  function formatData(data) {
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
  db.getStory()
  //.then(console.log)
  .then(postStory)
  .catch(displayErrors)

  function postStory (data) {
    console.log(data)
    res.render('story', {data, sentence})
  }

  function displayErrors (err) {
    res.status(500).send(err.message)
  }
})



module.exports = router
