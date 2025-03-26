export default function updateData(
  currentObj: Record<string, any>,
  newDataObject: Record<string, any>,
): object {
  for (const key in newDataObject) {
    if (currentObj.hasOwnProperty(key)) {
      currentObj[key] = newDataObject[key]
    }
  }

  return currentObj
}
