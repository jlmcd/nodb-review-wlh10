import React from 'react'
import theme from '../assets/theme.m4a'

export default function Header() {
  const audio = new Audio(theme)
  return (
    <header>
      <h1 onClick={() => audio.play()}>Pokemon Catcher 2000</h1>
    </header>
  )
}