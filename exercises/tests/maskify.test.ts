import maskify from "@/maskify"

test("4556364607935616", () => {
  expect(maskify("4556364607935616")).toBe("############5616")
})

test("64607935616", () => {
  expect(maskify("64607935616")).toBe("#######5616")
})

test("1", () => {
  expect(maskify("1")).toBe("1")
})

test("empty string", () => {
  expect(maskify("")).toBe("")
})

test("Skippy", () => {
  expect(maskify("Skippy")).toBe("##ippy")
})

test("Nanananananananananana Batman!", () => {
  expect(maskify("Nanananananananananana Batman!")).toBe(
    "##########################man!",
  )
})
