import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




function PokemonDetail(props) {
	const FavouriteComponent = props.favouriteComponent;
	const pokemonSpecies = props.pokemonSpecies;
	

	

	

	

	return (
		<div className="col-md-3 my-5">
		{props.pokemonSpecies.map((pokemon, index) => (
							<div className="card-outer w-100 p-2 rounded text-center">
								<h5 className="card-header">#01</h5> 
								<img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon-img"/>
								<div className="card-body mx-auto">
									<h6 className="card-title">
										{pokemon.name
										.toLowerCase()
										.split(' ')
										.map(s => s.charAt(0).toUpperCase() + s.substring(1))
										.join(' ')}
									</h6>
										{/* <div
											onClick={() => props.handleFavouritesClick(pokemon)}
											className='d-flex align-items-center justify-content-center'
										>
											<FavouriteComponent />
										</div> */}
								</div>						
							</div>
					    ))}	
				
						
				
		
		</div>
		
			
	
	);
};

export default PokemonDetail;
