const express = require('express')
const moviesRoutes = express.Router()
const axios = require('axios')

moviesRoutes.get('', async(req,res) => {
    try {
        const moviesAPI = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=ba4a55d88487e0d96001311a7e0c3797`)
        // console.log(moviesAPI.data.results[1].id)
        res.render('movies', { movies : moviesAPI.data})
    } catch (err) {
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } 
    }
})

module.exports = moviesRoutes

// origin_country
// genre_ids

