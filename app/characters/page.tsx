'use client';
import { useEffect } from "react"

const Characters = () => {

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
      const data = await response.json()
      console.log(data)
    } catch {

    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>Characters</div>
  )
}

export default Characters