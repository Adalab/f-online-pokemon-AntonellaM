import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { pokemonURLS } from '../../services/getPokemonURLS';
import PokeList from '../PokeList/PokeList';
import Pokemon from '../Pokemon/Pokemon';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonURLS: [],
      pokemonList: [],
    }
  }

  componentDidMount() {
    pokemonURLS()
      .then(data => this.setState({ pokemonURLS: data.results },() => {
        for (const pokemonData of this.state.pokemonURLS) {
          fetch(`${pokemonData.url}`).then(res => res.json()).then(details => {
            this.state.pokemonList.push(details);
            let newPokemonList = this.state.pokemonList;
            this.setState({ pokemonList: newPokemonList })
          })
        }
      }
      
      ))
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={routerProps => (
            <PokeList list={this.state.pokemonList}/> 
          )}/>
          <Route path="/pokemon/:id" render={routerProps => {
            const pokemonSelected = this.state.pokemonList.find(pokemon => parseInt(pokemon.id) === parseInt(routerProps.match.params.id));
            return pokemonSelected !== undefined ?
            <Pokemon pokemon={pokemonSelected}/> :
            <div className="loader__container">
              <div class="lds-ripple"><div></div><div></div></div>
            </div>
          }}/>
        </Switch>
      </main>
    );
  }
}
export default App;
