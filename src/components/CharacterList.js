import React from 'react';
import CharacterCard from './CharacterCard';

const renderList = props => {
  return props.characters.map((item, index) => {
    return <CharacterCard key={index} characters={item} />;
  });
};

const CharacterList = props => {
  return <ul className='character__list'>{renderList(props)}</ul>;
};

export default CharacterList;
