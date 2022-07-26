import React, { useState, useEffect} from 'react'
import PokeCard from './PokeCard.jsx';
export default function Pokemon2() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const species = [];
    const url = "https://pokemon-api-carlton-james-jr.herokuapp.com/pokemon/"

    if(pokemons.length === 0){
      fetch(url)
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < 10; i++) {
            species.push({name: data[i].species.name, image: data[i].sprites.other['official-artwork'].front_default})
          }
          setPokemons(species)

        })
    } 
 
  },[pokemons.length])

  useEffect(() => {
    if(pokemons.length > 0){
      setIsLoaded(true)
    }

  }, [pokemons.length]);



  return (  
    <div className='pokemon-container'>
      {!isLoaded ? <h1>LOADING .... </h1> : (pokemons.map((pokemon,i)=>(
      <PokeCard key={i} name={pokemon.name} image={pokemon.image} />
      )))}
    </div>
  )
}