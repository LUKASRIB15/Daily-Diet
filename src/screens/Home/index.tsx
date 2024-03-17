import {
  HomeLayout,
  ButtonMealsPercent,
  InfoMealsPercent,
  TitlePercent,
  SubtitlePercent,
  ArrowUpRightIcon,
  ContainerNewMeal,
  NewMealTitle,
  DateOfMealsTitle,
  TitleListOfMealsIsEmpty,
} from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { FlatList } from 'react-native'
import { CardMeal } from '../../components/CardMeal'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getAllMeals } from '../../storage/meals/getAllMeals'
import { MealStorageDTO } from '../../storage/meals/MealStorageDTO'
import { getAllDates } from '../../storage/dates/getAllDates'
import { sortDates } from '../../utils/sortDates'
import { sortMealsForDate } from '../../utils/sortMealsForDate'

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])
  const [dates, setDates] = useState<string[]>([])
  const { colors } = useTheme()
  const navigation = useNavigation()

  const mealsInDiet = meals.filter((meal) => meal.isInDiet)
  const percentMealInsideOfDiet =
    meals.length !== 0 ? (mealsInDiet.length * 100) / meals.length : 0

  async function fetchGetAllMeals() {
    const mealsInStorage = await getAllMeals()
    console.log(mealsInStorage)
    setMeals(mealsInStorage)
  }

  async function fetchGetAllDates() {
    const datesInStorage = await getAllDates()
    console.log(datesInStorage)
    setDates(datesInStorage)
  }

  useFocusEffect(
    useCallback(() => {
      fetchGetAllMeals()
      fetchGetAllDates()
    }, []),
  )

  return (
    <HomeLayout>
      <Header />
      <ButtonMealsPercent
        variant={percentMealInsideOfDiet >= 50 ? 'success' : 'danger'}
        onPress={() => navigation.navigate('statistics')}
      >
        <InfoMealsPercent>
          <TitlePercent>
            {percentMealInsideOfDiet.toFixed(2).replace('.', ',')}%
          </TitlePercent>
          <SubtitlePercent>das refeições dentro da dieta</SubtitlePercent>
        </InfoMealsPercent>
        <ArrowUpRightIcon
          color={
            percentMealInsideOfDiet >= 50
              ? colors['green-500']
              : colors['red-500']
          }
        />
      </ButtonMealsPercent>
      <ContainerNewMeal>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button onPress={() => navigation.navigate('form-meal')}>
          <Button.Icon>
            <Plus size={18} color={colors.white} />
          </Button.Icon>
          <Button.Text>Nova refeição</Button.Text>
        </Button>
      </ContainerNewMeal>
      <FlatList
        data={sortDates(dates)}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const date = dates[index]
          const mealsOfDay = sortMealsForDate(meals).filter((meal) => {
            return meal.date === date
          })

          if (mealsOfDay.length === 0) {
            return null
          }

          return (
            <>
              <DateOfMealsTitle>{`${item[0]}${item[1]}.${item[3]}${item[4]}.${item[6]}${item[7]}${item[8]}${item[9]}`}</DateOfMealsTitle>
              {mealsOfDay.map((meal) => {
                return (
                  <CardMeal
                    key={meal.id}
                    meal={meal}
                    onPress={() =>
                      navigation.navigate('details-meal', { id: meal.id })
                    }
                  />
                )
              })}
            </>
          )
        }}
        ListEmptyComponent={() => (
          <TitleListOfMealsIsEmpty>
            Nenhuma refeição até o momento! Cadastre agora mesmo.
          </TitleListOfMealsIsEmpty>
        )}
        contentContainerStyle={[
          { gap: 32 },
          dates.length === 0 && { justifyContent: 'center', flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
      />
    </HomeLayout>
  )
}
