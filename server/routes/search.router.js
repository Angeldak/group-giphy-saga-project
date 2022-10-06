const express = require('express');
const router = express.Router();
const axios = require('axios');

// This GET returns a random gif from GIPHY api
router.get('/:search', (req, res) => {
    let searchString = req.params.search;
    console.log('This is searchString: ', searchString);
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchString}`)
        .then((response) => {
          res.send(response.data);  
        })
        .catch(err => {
            res.sendStatus(500);
            console.log('This is err in search GET: ', err);
        });
})

module.exports = router;