import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPoke } from '../services/pokemon'

export default function PokeCreate(){
  const [pokemon, setPokemon] = useState({
    species: {
      name: String,
      url: String,
      
   }


  })
}