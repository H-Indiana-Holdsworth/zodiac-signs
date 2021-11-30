import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac">
      <img src={`${process.env.PUBLIC_URL}/zodiac-signs/${name}.png`} alt={name} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
