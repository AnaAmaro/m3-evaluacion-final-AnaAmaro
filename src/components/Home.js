import React, { Fragment } from 'react';
import CharacterFilter from './CharacterFilter';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const { filter, handleFilter, characters } = props;

  return (
    <Fragment>
      <CharacterFilter filter={filter} handleFilter={handleFilter} />
      <CharacterList characters={characters} />
    </Fragment>
  );
};

Home.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
