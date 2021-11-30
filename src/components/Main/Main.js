import React from 'react'
import './Main.css'
import background from '../../background.png'
import { zodiac } from '../../data'
import ZodiacCard from '../ZodiacCard/ZodiacCard'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zd) => (
        <ZodiacCard key={zd.name} {...zd} />
      ))}
    </main>
  )
}
