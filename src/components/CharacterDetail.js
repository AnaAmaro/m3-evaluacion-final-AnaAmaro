import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);

  const character = characters.filter(item => item.id === characterId);

  if (character[0]) {
    const { image, name, status, species, origin, episode } = character[0];
    return (
      <React.Fragment>
        <div className='character__detail'>
          <Link to='/' className='character__detail__link'>
            Volver
          </Link>

          <div className='character__detail__wrap'>
            <img src={image} alt={name} />
            <ul className='character__detail__descriptions'>
              <li className='character__detail__name'>{name}</li>
              <li className='character__detail__staus'>{status}</li>
              <li className='character__detail__species'>{species}</li>
              <li className='character__detail__origin'>{origin}</li>
              <li className='character__detail__episodes'>{episode}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to='/' className='app__back'>
          Volver al listado
        </Link>
      </React.Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;
