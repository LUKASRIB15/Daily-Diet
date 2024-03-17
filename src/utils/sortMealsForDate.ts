import { MealStorageDTO } from '../storage/meals/MealStorageDTO'

export function sortMealsForDate(meals: MealStorageDTO[]) {
  return meals.sort(function (a, b) {
    const [horaA, minutoA] = a.time.split(':')
    const [horaB, minutoB] = b.time.split(':')

    if (horaA !== horaB) {
      return parseInt(horaB) - parseInt(horaA)
    }

    return parseInt(minutoB) - parseInt(minutoA)
  })
}
