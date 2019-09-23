import React from 'react';

const CharacterCard = props => {
  return (
    <li className='characters'>
      <img src={props.characters.image} alt={props.characters.name} />
      <div className='characters__card'>
        <h2 className='characters__name'>{props.characters.name}</h2>
        <p className='characters__specie'>{props.characters.species}</p>
      </div>
    </li>
  );
};

export default CharacterCard;
