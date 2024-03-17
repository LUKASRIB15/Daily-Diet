import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from '../storageConfig'
import { getAllMeals } from './getAllMeals'

export async function mealUpdate(updatedMeal: MealStorageDTO) {
  try {
    const meals = await getAllMeals()
    const updatingMeals = meals.map((meal) => {
      if (meal.id === updatedMeal.id) {
        return {
          ...meal,
          name: updatedMeal.name,
          description: updatedMeal.description,
          date: updatedMeal.date,
          time: updatedMeal.time,
          isInDiet: updatedMeal.isInDiet,
        }
      } else {
        return meal
      }
    })
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatingMeals))
  } catch (error) {
    throw error
  }
}
