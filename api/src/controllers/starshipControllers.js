const axios = require('axios')


async function getStarshipById(id) {
    try {
      const searchStarship = await axios.get(
        `https://swapi.dev/api/starships/${id}`
      );
     
      return searchStarship.data;
    } catch (error) {
      console.log("error en get by id", error);
    }
  }


  module.exports = {
    getStarshipById
  }