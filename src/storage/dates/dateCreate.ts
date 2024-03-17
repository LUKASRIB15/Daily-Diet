import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllDates } from './getAllDates'
import { DATE_COLLECTION } from '../storageConfig'

export async function dateCreate(newDate: string) {
  try {
    const dates = await getAllDates()
    if (dates.includes(newDate)) {
      await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(dates))
    } else {
      await AsyncStorage.setItem(
        DATE_COLLECTION,
        JSON.stringify([...dates, newDate]),
      )
    }
  } catch (error) {
    throw error
  }
}
