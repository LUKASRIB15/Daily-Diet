import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from '../storageConfig'
import { getAllMeals } from './getAllMeals'

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const meals = await getAllMeals()

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...meals, newMeal]),
    )
  } catch (error) {
    throw error
  }
}
