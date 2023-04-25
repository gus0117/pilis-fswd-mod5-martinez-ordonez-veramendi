import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE = '@AppEvent'

export const storeUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE, jsonValue)
  } catch (e) {
    console.log('Error storeUser=>' + e)
  }
}
export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('Error getUser=>' + e)
  }
}
