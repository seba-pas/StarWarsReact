const axios = require("axios");
// const server  = require('../app')

async function getCharacters(req, res) {
  try {
    const characters = await axios("https://swapi.dev/api/people/");
    const info = characters.data.results;
    const charMap = await Promise.all(
      info?.map(async (e) => {
        //homeworld from url
        let world = await axios(e.homeworld);
        let worldInfo = world?.data;
        //vehicles from url
        let vehicles = await Promise.all(
          e.vehicles.map(async (url) => {
            const allVehicles = await axios(url);
            return allVehicles.data.name;
          })
        );
        //films
        let films = await Promise.all(
          e.films.map(async (url) => {
            const allFilms = await axios(url);
            return allFilms.data.title;
          })
        );
        //starships
        let starships = await Promise.all(
          e.starships.map(async (url) => {
            const allStarships = await axios(url);
            return allStarships.data.name;
          })
        );
        //split
        let imgUrlSplit = e.url.split("/");
        //id
        let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];

        let baseImgUrl =
          "https://starwars-visualguide.com/assets/img/characters/";
        return {
          id: parseInt(idFromUrl),
          name: e.name,
          birth_year: e.birth_year,
          gender: e.gender,
          homeworld: worldInfo.name,
          vehicles: vehicles ? vehicles : "n/a",
          films: films ? films : "n/a",
          starships: starships ? starships : "n/a",
          image: baseImgUrl + `${idFromUrl}.jpg`,
        };
      })
    );

    return charMap;
  } catch (error) {
    console.log("error in get characters controller", error);
  }
}

async function getCharacterById(id) {
  try {
    const searchCharacter = await axios.get(
      `https://swapi.dev/api/people/${id}`
    );
   
    return searchCharacter.data;
  } catch (error) {
    console.log("error en get by id", error);
  }
}

module.exports = {
  getCharacters,
  getCharacterById,
};
