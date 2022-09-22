const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = {
      getDetail: async(req,res) => {
        let movieID = req.params.id

        try {
            const detailsAPI = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
            const trailerAPI = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`)

            res.render('details.ejs', { movies : detailsAPI.data, trailer :trailerAPI.data})
        } catch (err) {
            if(err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } 
        }
    },
    getIndex: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('details.ejs')
        }catch(err){
            console.log(err)
        }
    },
}