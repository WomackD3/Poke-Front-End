import React from 'react'

export default function PokeCard(props) {
  const {name, image} = props
  return (
    <div className='pokeCard-container'>
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  )
}
