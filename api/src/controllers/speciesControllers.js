const axios = require("axios");

async function getAllSpecies(page) {
  try {
    const species = await axios.get(
      `https://swapi.dev/api/species/?page=${page}`
    );
    const info = species.data.results;
    const alPlato = await info?.map((e) => {
      let imgUrlSplit = e.url.split("/");
      let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
      let baseImgUrl = "https://starwars-visualguide.com/assets/img/species/";

      return {
        ...e,
        image: baseImgUrl + `${idFromUrl}.jpg`,
        id: parseInt(idFromUrl),
      };
    });
    return alPlato;
  } catch (error) {
    console.log("error eb el controler", error);
  }
}

async function getSpeciesById(id) {
  try {
    const specie = await axios.get(`https://swapi.dev/api/species/${id}`);
    const info = specie.data;

    let imgUrlSplit = info.url.split("/");
    let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
    let baseImgUrl = "https://starwars-visualguide.com/assets/img/species/";

    const paraRet = {
      ...info,
      image: baseImgUrl + `${idFromUrl}.jpg`,
      id: parseInt(idFromUrl),
    };


    return paraRet;
  } catch (error) {
    console.log("error en get species by id", error);
  }
}

module.exports = {
  getAllSpecies,
  getSpeciesById,
};
