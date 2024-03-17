import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllDates } from './getAllDates'
import { DATE_COLLECTION } from '../storageConfig'
import { getAllMeals } from '../meals/getAllMeals'

export async function dateDelete(deletedDate: string) {
  try {
    const allMeals = await getAllMeals()
    const allDates = await getAllDates()

    const mealsOfDeletedDay = allMeals.filter(
      (meal) => meal.date === deletedDate,
    )

    if (mealsOfDeletedDay.length === 0) {
      const dateWithoutDeletedDate = allDates.filter(
        (date) => date !== deletedDate,
      )
      await AsyncStorage.setItem(
        DATE_COLLECTION,
        JSON.stringify(dateWithoutDeletedDate),
      )
    }
  } catch (error) {
    throw error
  }
}
