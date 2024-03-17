import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllMeals } from './getAllMeals'
import { MEAL_COLLECTION } from '../storageConfig'

export async function mealDelete(deletedMealId: string) {
  try {
    const meals = await getAllMeals()
    const mealsWithoutDeletedMeal = meals.filter(
      (meal) => meal.id !== deletedMealId,
    )
    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify(mealsWithoutDeletedMeal),
    )
  } catch (error) {
    throw error
  }
}
