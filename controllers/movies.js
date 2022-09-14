const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = {
    getMovies: (req,res)=>{
        res.render('movies.ejs')
    },

    getAPI: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('movies.ejs', { movies : moviesAPI.data})


        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    }

}