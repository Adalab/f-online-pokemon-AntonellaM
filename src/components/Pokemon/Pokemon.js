import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';
import './Pokemon.scss';

const Pokemon = (props) => {
  return (
    <div className="pokemon__container">
      <Link to="/">
        <FontAwesomeIcon className="arrow-back" icon={faArrowLeft} />
      </Link>
      <div className="pokemon-details">
        <div className="pokemon-details__header">
          <div className="pokemon-details__photo" style={{backgroundImage: `url(${props.pokemon.data.sprites.front_default})`}}></div>
          <p>ID/{props.pokemon.data.id}</p>
        </div>
        <div className="pokemon-details__body">
          <h1 className="pokemon-details__name">{props.pokemon.data.forms[0].name}</h1>
          <div className="pokemon-details__types">
            {props.pokemon.data.types.map((type, index) => <p className="type" key={index}>{type.type.name}</p>)}
          </div>
          <div className="pokemon-details__data">
            <div className="pokemon-details__data--height">
              <h2 className="pokemon-details__data--title">Height:</h2>
              <p className="pokemon-details__data--result">{props.pokemon.data.height}</p>
            </div>
            <div className="pokemon-details__data--weight">
              <h2 className="pokemon-details__data--title">Weight:</h2>
              <p className="pokemon-details__data--result">{props.pokemon.data.weight}</p>
            </div>
            <div className="pokemon-details__data--abilities">
              <h2 className="pokemon-details__data--title">Abilities:</h2>
              {props.pokemon.data.abilities.map((abilities, index) => <p key={index} className="pokemon-details__data--result">{abilities.ability.name}</p>)}
            </div>
          </div>        
          {props.pokemon.data.stats.map((stats, index) => 
          <div className="pokemon-details__characteristics" key={index}>
            <p className="characteristic__name">{stats.stat.name}</p>
            <ProgressBar className="characteristic__bar" now={stats.base_stat} label={`${stats.base_stat}%`} />
          </div>
          )}
        </div>
        <div className="pokemon-details__evolutions">
            <div className="pokemon-details__evolutions--from">
              <p className="pokemon-details__evolutions--title">Evolves from:</p>
              <p className="pokemon-details__evolutions--result">{props.pokemon.evolvesFrom}</p>
            </div>
            <div className="pokemon-details__evolutions--to">
              <p  className="pokemon-details__evolutions--title">Evolves to:</p>
              <p  className="pokemon-details__evolutions--result">{props.pokemon.evolvesTo}</p>
            </div>
          </div> 
      </div>
    </div>   
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
} 
 
export default Pokemon;