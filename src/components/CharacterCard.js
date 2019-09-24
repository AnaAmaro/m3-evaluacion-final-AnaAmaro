import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
  return (
    <li className='characters' key={props.characters.id}>
      <Link
        to={`/character__detail/${props.characters.id}`}
        className='character__link'
      >
        <img src={props.characters.image} alt={props.characters.name} />
        <div className='characters__card'>
          <h2 className='characters__name'>{props.characters.name}</h2>
          <p className='characters__specie'>{props.characters.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
