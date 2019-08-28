//imports
const axios = require("axios");
//env
const {GIANT_BOMB_KEY} = process.env;

module.exports = {
    searchForGame: async (req, res) => {
        const results = await axios.get(`http://www.giantbomb.com/api/search?api_key=${GIANT_BOMB_KEY}&format=json&query=${req.params.searchTerm}&resources=game`)
        if(results.data.error === "OK") {
            res.status(200).json(results.data);
        } else {
            res.status(500).json()
        }
        console.log(results.data.error);
    }
}