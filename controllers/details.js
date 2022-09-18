const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = {
    // getPost: async (req, res) => {
    //     try {
    //       const post = await Post.findById(req.params.id);
    //       res.render("details.ejs", { post: post, user: req.user });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
      getDetail: async(req,res) => {
        let movieID = req.params.id

        try {
            const detailsAPI = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
            //https://api.themoviedb.org/3/movie/${detailID}?api_key=${API_KEY}&language=en-US
            // console.log(moviesAPI.data)
            // changing res.render('movies') will change the rendered EJS page
            res.render('details.ejs', { movies : detailsAPI.data})
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