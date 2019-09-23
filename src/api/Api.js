const getData = () => {
  return fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      return data.results.map(characters => {
        return {
          id: characters.id,
          name: characters.name,
          species: characters.species,
          image: characters.image
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default getData;
