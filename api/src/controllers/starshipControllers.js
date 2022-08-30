const axios = require("axios");

async function getAllStarships(page) {
  try {
      
      const starships = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    const info = starships.data.results;
    const alPlato = await info?.map( (e) => {
      
      let imgUrlSplit = e.url.split("/");
      let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
      let baseImgUrl = "https://starwars-visualguide.com/assets/img/starships/";

      return {
        id: parseInt(idFromUrl),
        name: e.name,
        image: baseImgUrl + `${idFromUrl}.jpg`,
        cargo_capacity: e.cargo_capacity,
        consumables: e.consumables,
        cost_in_credits: e.cost_in_credits,
        crew: e.crew,
        films: e.films,
        length: e.length,
        manufacturer: e.manufacturer,
        model: e.model,
        url: e.url,
        passengers: e.passengers,
        pilots: e.pilots,
      };
    });
    return alPlato;
  } catch (error) {
    console.log("error in get all strships", error);
  }
}
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
  getStarshipById,
  getAllStarships,
};
