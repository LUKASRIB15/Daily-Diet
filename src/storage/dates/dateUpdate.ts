import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllDates } from './getAllDates'
import { DATE_COLLECTION } from '../storageConfig'

export async function dateUpdate(updatedDate: string) {
  try {
    const allDates = await getAllDates()
    if (allDates.includes(updatedDate)) {
      return
    }
    await AsyncStorage.setItem(
      DATE_COLLECTION,
      JSON.stringify([...allDates, updatedDate]),
    )
  } catch (error) {
    throw error
  }
}
