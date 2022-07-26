import React, { useState, useEffect} from 'react'

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [users, setUsers] = useState([]);
  const species = [];
  const data = [];
  const url = "https://pokemon-api-carlton-james-jr.herokuapp.com/pokemon/"

  useEffect(() => {
    async function fetchData() {
      await fetch(url)
        .then(res => res.json())
        .then((data) => {
          for (let i = 0; i < 20; i++) {
            species.push(data[i].species.name)
            data.push(data[i].sprites.other['official-artwork'].front_default)
          }
        })
    }
    fetchData()
      
    if (error) {
      return <div>Error: {error.message}</div>
    } else {
      return (
        <ul>
          <div>Welcome to the Poke-verse</div>
          {data.map(user => (
            <li>
              {species.url}
            </li>
          
          ))}
        </ul>
      );
    }
  })
}

// return ( 
// )

//data.sprites.other['official-artwork'].front_default