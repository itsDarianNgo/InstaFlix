const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = {
    getIndex: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)

            // https://api.themoviedb.org/3/movie/now_playing?api_key=s&language=en-US&page=1
            

            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('index.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },

    getTrending: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getTopRated: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getAction: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getComedy: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getHorror: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getRomance: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getMystery: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getSciFi: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getWestern: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getAnimation: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getTvMovie: async(req,res) => {
        try {
            const moviesAPI = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('trending.ejs', { movies : moviesAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    postSearch: async(req,res) => {
        let search = req.body.search

        try {
            const detailsAPI = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('resultsSearch.ejs', { movies : detailsAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },

}