enum Gender {
  Male = "Homem",
  Female = "Mulher",
  Genderless = "Sem gênero",
  unknown = "Desconhecido",
}

interface Character {
  nome: string
  genero: Gender
  avatar: string
  especie: string
}

interface Response {
  id: string
  name: string
  gender: keyof typeof Gender // Set gender as an union of "Gender" keys
  image: string
  species: string
}

// The API defines no typings for species so we need to translate it manually
function translateSpecies(species: string) {
  switch (species) {
    case "Human":
      return "Humano"
    default:
      return species
  }
}

export default async function getRickAndMortyCharacters(): Promise<
  Character[]
> {
  const characterIds = ["1", "2", "3", "4", "5"]

  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + characterIds.join(),
  )

  if (!response.ok) {
    throw new Error(
      "Couldn't reach server. Please check your internet connection.",
    )
  }

  const json = await response.json()
  const characters = json as Response[]

  return characters.map((character) => ({
    nome: character.name,
    genero: Gender[character.gender],
    avatar: character.image,
    especie: translateSpecies(character.species),
  }))
}
