const express = require('express');
const api = process.env.apiKey
const router = express.Router();
const axios = require('axios')
let temp ={}


/* --------------------------------- search --------------------------------- */
router.get('/', (req, res) => {    
    res.render("./search/search.ejs")    
})


router.post('/', (req, res) => {
    let searchTerm = req.body.Title
    const searchTitle = "https://www.omdbapi.com/?s="+searchTerm+"&apikey="+api
    axios.get(searchTitle)
    .then((data) => {
        console.log(temp)
        temp = data.data.Search
        res.redirect('/search/results')
    })
})

router.get('/results', (req, res) => { 
    res.render('./search/searchResults.ejs', { searchResults: temp }) 
    
})


module.exports = router


