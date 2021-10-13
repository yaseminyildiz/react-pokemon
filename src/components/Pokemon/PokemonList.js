import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #F2F2F2;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-20px);
  }
 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 150px;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-20px);
  }
`;


function PokemonList(props) {
	const FavouriteComponent = props.favouriteComponent;

	
	return (
	
		
		<>
		{props.pokemons.map((pokemon, index) => (
		        <div className="col-lg-3 col-md-3 col-sm-6 mb-5">			
					<StyledLink to={`pokemon/${pokemon.id}`}>
						<Card>		
							<div className="card-outer w-100 p-2 rounded text-center">
								<h5 className="card-header">{pokemon.id}</h5> 
								<img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon-img"/>
								<div className="card-body mx-auto">
									<h6 className="card-title">
										{pokemon.name
										.toLowerCase()
										.split(' ')
										.map(s => s.charAt(0).toUpperCase() + s.substring(1))
										.join(' ')}
									</h6>
										<div
											onClick={() => props.handleFavouritesClick(pokemon)}
											className='d-flex align-items-center justify-content-center'
										>
											<FavouriteComponent />
										</div>
							    </div>
						    </div>
					    </Card>
				    </StyledLink>
		
	            </div>
		))}
    </>
		
	
		
		
			
	
	);
};

export default PokemonList;
