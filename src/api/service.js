const SERVER_DOMAIN = 'https://643f1eb23dee5b763e163804.mockapi.io/api/v1'

export const getEvents = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/listEvent`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}
