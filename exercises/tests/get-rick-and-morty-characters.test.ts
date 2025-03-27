import getRickAndMortyCharacters from "@/get-rick-and-morty-characters"

test("should return the information of filtered characters", async () => {
  const result = await getRickAndMortyCharacters()

  expect(result).toEqual([
    {
      nome: "Rick Sanchez",
      genero: "Homem",
      avatar: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      especie: "Humano",
    },
    {
      nome: "Morty Smith",
      genero: "Homem",
      avatar: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      especie: "Humano",
    },
    {
      nome: "Summer Smith",
      genero: "Mulher",
      avatar: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      especie: "Humano",
    },
    {
      nome: "Beth Smith",
      genero: "Mulher",
      avatar: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      especie: "Humano",
    },
    {
      nome: "Jerry Smith",
      genero: "Homem",
      avatar: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      especie: "Humano",
    },
  ])
})
