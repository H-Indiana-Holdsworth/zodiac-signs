import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiac-signs/${name}.png`} alt={name} />
      <div className="name">{name}</div>
      <div>{dates}</div>
    </div>
  )
}
