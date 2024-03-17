import { MealStorageDTO } from '../storage/meals/MealStorageDTO'

export function bestSequenceOfMeals(meals: MealStorageDTO[]) {
  const sortMealsToDate = meals.sort(function (a, b) {
    const [diaA, mesA, anoA] = a.date.split('/')
    const [diaB, mesB, anoB] = b.date.split('/')

    if (anoA !== anoB) {
      return parseInt(anoB) - parseInt(anoA)
    }

    if (mesA !== mesB) {
      return parseInt(mesB) - parseInt(mesA)
    }

    return parseInt(diaB) - parseInt(diaA)
  })

  let count = 0
  let bestSequence = 0
  for (let index = 0; index < sortMealsToDate.length; index++) {
    if (sortMealsToDate[index].isInDiet) {
      count = count + 1
    } else {
      if (count > bestSequence) {
        bestSequence = count
      }
      count = 0
    }
  }

  if (count === sortMealsToDate.length) {
    return count
  }

  return bestSequence
}
