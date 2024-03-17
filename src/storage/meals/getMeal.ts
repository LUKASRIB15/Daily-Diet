import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealStorageDTO } from './MealStorageDTO'

export async function getMeal(mealId: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    const meals: MealStorageDTO[] = JSON.parse(storage!)

    const mealFiltered = meals.filter((meal) => meal.id === mealId)

    return mealFiltered[0]
  } catch (error) {
    throw error
  }
}
