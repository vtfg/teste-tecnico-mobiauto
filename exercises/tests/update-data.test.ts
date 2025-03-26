import updateData from "@/update-data"

test("should update country and age", () => {
  const currentObj = { name: "Marcos", country: "Brasil", age: 22 }
  const newDataObject = { country: "Japão", age: 33 }

  const result = updateData(currentObj, newDataObject)

  expect(result).toEqual({ name: "Marcos", country: "Japão", age: 33 })
})

test("should update nothing", () => {
  const currentObj = { name: "Marcos", country: "Brasil", age: 22 }
  const newDataObject = {
    price: 89.9,
    amount: 15,
    description: "camiseta 100% algodão",
  }

  const result = updateData(currentObj, newDataObject)

  expect(result).toEqual({ name: "Marcos", country: "Brasil", age: 22 })
})

test("should update name", () => {
  const currentObj = { name: "Rafael", country: "Chile", age: 42 }
  const newDataObject = { name: "Camiseta Polo", price: 59.9, amount: 30 }

  const result = updateData(currentObj, newDataObject)

  expect(result).toEqual({ name: "Camiseta Polo", country: "Chile", age: 42 })
})
