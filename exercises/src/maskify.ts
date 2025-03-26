export default function maskify(value: string): string {
  if (value.length <= 4) return value

  return (
    "#".repeat(value.length - 4) + value.slice(value.length - 4, value.length)
  )
}
