export const getAllCharacters = async (page) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getCharacterByID = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}