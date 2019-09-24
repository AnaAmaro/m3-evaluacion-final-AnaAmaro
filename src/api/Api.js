const getData = () => {
  return fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      return data.results.map(characters => {
        return {
          id: characters.id,
          name: characters.name,
          species: characters.species,
          image: characters.image,
          status: characters.status,
          origin: characters.origin.name,
          episode: characters.episode.length
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default getData;
