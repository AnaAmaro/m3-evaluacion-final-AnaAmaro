import React from 'react';

class CharacterFilter extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='characterfilter'>
          <h3 className='characterfilter__title'>Escoge tu personaje</h3>
          <input
            type='text'
            id='name'
            name='name'
            onChange={this.props.handleFilter}
            value={this.props.filter}
          />
        </label>
      </div>
    );
  }
}

export default CharacterFilter;
