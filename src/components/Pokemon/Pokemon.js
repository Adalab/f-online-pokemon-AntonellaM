import React from 'react';
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
          <div className="pokemon-details__photo" style={{backgroundImage: `url(${props.pokemon.sprites.front_default})`}}></div>
          <p>ID/{props.pokemon.id}</p>
        </div>
        <div className="pokemon-details__body">
          <h1 className="pokemon-details__name">{props.pokemon.forms[0].name}</h1>
          <div className="pokemon-details__types">
            {props.pokemon.types.map(type => <p className="type">{type.type.name}</p>)}
          </div>
          {props.pokemon.stats.map(stats => 
          <div className="pokemon-details__characteristics">
            <p className="characteristic__name">{stats.stat.name}</p>
            <ProgressBar className="characteristic__bar" now={stats.base_stat} label={`${stats.base_stat}%`} />
          </div>
          )}
        </div>
      </div>   
    </div>
  );
}
 
export default Pokemon;