import checkIfTheFirstLetterIsUppercase from "@/check-if-the-first-letter-is-uppercase"

test("Brasil", () => {
  expect(checkIfTheFirstLetterIsUppercase("Brasil")).toBeTruthy()
})

test("mobiauto", () => {
  expect(checkIfTheFirstLetterIsUppercase("mobiauto")).toBeFalsy()
})

test("xXx xXx", () => {
  expect(checkIfTheFirstLetterIsUppercase("xXx xXx")).toBeFalsy()
})

test("xDD", () => {
  expect(checkIfTheFirstLetterIsUppercase("xDD")).toBeFalsy()
})

test("Deu Certo!", () => {
  expect(checkIfTheFirstLetterIsUppercase("Deu Certo!")).toBeTruthy()
})

test("empty string", () => {
  expect(checkIfTheFirstLetterIsUppercase("")).toBeFalsy()
})
