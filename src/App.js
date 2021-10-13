import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokemonList from './components/Pokemon/PokemonList';
import PokemonListHeading from './components/Pokemon/PokemonListHeading';
import SearchBox from './components/Pokemon/SearchBox';
import AddFavourites from './components/Pokemon/AddFavourites';
import RemoveFavourites from './components/Pokemon/RemoveFavourites';
import Background from './components/img/background.png';
import styled from 'styled-components';
import PokemonDetail from './components/Pokemon/PokemonDetail';
import { Route } from 'react-router';
import {Row} from 'react-bootstrap';
import Navbar from './components/layout/Navbar';




const App = () => {
	const [pokemons, setPokemons] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [pokemonSpecies, setPokemonSpecies] = useState([]);
	

	const getPokemonRequest = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon?offset=5&limit=12`;

		const response = await fetch(url);
		const allPokemons = await response.json();
		
		allPokemons.results.forEach( async (pokemon) => {
			const response = await fetch (pokemon.url);
			const pokemonSpecs = await response.json();
			
			setPokemons(currentPokemons => [...currentPokemons, pokemonSpecs])

			
			
		})

		// 	pokemons.species.forEach( async (a) => {
		// 	const response = await fetch (a.url);
		// 	const pokemonSpecies = await response.json();

		// 	setPokemonSpecies(currentPokemons => [ ...currentPokemons, pokemonSpecies])
		// })
	};
		
	
		
	// 	 if (responseJson.results) {
	//  	setPokemons(responseJson.results);
	// 	 }
	// };

	useEffect(() => {
		getPokemonRequest();
	}, []);

	

	useEffect(() => {
		const pokemonFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (pokemonFavourites) {
			setFavourites(pokemonFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouritePokemon = (pokemon) => {
		const newFavouriteList = [...favourites, pokemon];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouritePokemon = (pokemon) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.name !== pokemon.name
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<>
		<div className="main-bg" style={{backgroundImage: `url(${Background})`}}>
			<div className='container'>
				<div className='row d-flex align-items-center mt-4 mb-4'>
					{/* <PokemonListHeading heading='Movies' /> */}
						{/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
						<Navbar/>
						<Route path="/pokemon/:pokemonIndex" component={PokemonDetail} />		
							
				</div>
				<Row>
					<PokemonList
						pokemons={pokemons}
						handleFavouritesClick={addFavouritePokemon}
						favouriteComponent={AddFavourites}
					/>							
				</Row>
				{/* <div className='row d-flex align-items-center mt-4 mb-4'>
					<PokemonListHeading heading='Favourites' />
				</div> */}
				{/* <div className='row'>
					<PokemonList
						pokemons={favourites}
						handleFavouritesClick={removeFavouritePokemon}
						favouriteComponent={RemoveFavourites}
						/>
				</div>				 */}
			</div>
		</div>
		</>
		
	);
};

export default App;
