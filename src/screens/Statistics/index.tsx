import {
  BoxesStatistics,
  ButtonGoBack,
  StatisticsLayout,
  StatisticsText,
} from './styles'
import { InfoMealsPercent, SubtitlePercent, TitlePercent } from '../Home/styles'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { ModalBottomSheet } from '../../components/ModalBottomSheet'
import { BoxStatistics } from '../../components/BoxStatistics'
import { Dimensions, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { MealStorageDTO } from '../../storage/meals/MealStorageDTO'
import { getAllMeals } from '../../storage/meals/getAllMeals'
import { bestSequenceOfMeals } from '../../utils/bestSequenceOfMeals'

export function Statistics() {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const widthScreen = Dimensions.get('window').width

  const mealsInDiet = meals.filter((meal) => meal.isInDiet)
  const mealsOutsideOfDiet = meals.filter((meal) => meal.isInDiet === false)

  const percentMealInsideOfDiet =
    meals.length !== 0 ? (mealsInDiet.length * 100) / meals.length : 0

  async function fetchGetAllMeals() {
    const mealsInStorage = await getAllMeals()
    setMeals(mealsInStorage)
  }

  useEffect(() => {
    fetchGetAllMeals()
  }, [])

  return (
    <StatisticsLayout
      variant={percentMealInsideOfDiet >= 50 ? 'success' : 'danger'}
    >
      <ButtonGoBack onPress={() => navigation.goBack()}>
        <ArrowLeft
          size={24}
          color={
            percentMealInsideOfDiet >= 50
              ? colors['green-500']
              : colors['red-500']
          }
        />
      </ButtonGoBack>
      <InfoMealsPercent style={{ paddingBottom: 32 }}>
        <TitlePercent>
          {percentMealInsideOfDiet.toFixed(2).replace('.', ',')}%
        </TitlePercent>
        <SubtitlePercent>das refeições dentro da dieta</SubtitlePercent>
      </InfoMealsPercent>
      <ModalBottomSheet>
        <BoxesStatistics>
          <StatisticsText>Estatísticas gerais</StatisticsText>
          <BoxStatistics
            quantity={bestSequenceOfMeals(meals)}
            description="melhor sequência de pratos dentro da dieta"
          />
          <BoxStatistics
            quantity={meals.length}
            description="refeições registradas"
          />
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <BoxStatistics
              style={{ width: (widthScreen - 48 - 16) / 2 }}
              quantity={mealsInDiet.length}
              description="refeições dentro da dieta"
            />
            <BoxStatistics
              style={{ width: (widthScreen - 48 - 16) / 2 }}
              quantity={mealsOutsideOfDiet.length}
              description="refeições fora da dieta"
              variant="danger"
            />
          </View>
        </BoxesStatistics>
      </ModalBottomSheet>
    </StatisticsLayout>
  )
}
