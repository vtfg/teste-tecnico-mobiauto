export default function checkIfTheFirstLetterIsUppercase(value: string) {
  if (!value.length) return

  return value[0] === value[0].toUpperCase()
}
