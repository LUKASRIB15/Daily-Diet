import { TouchableOpacityProps } from 'react-native'
import {
  CardMealLayout,
  ContainerTimeText,
  DietSign,
  NameText,
  TimeText,
} from './styles'

type CardMealProps = TouchableOpacityProps & {
  meal: {
    id: string
    name: string
    description: string
    date: string
    time: string
    isInDiet: boolean
  }
}

export function CardMeal({ meal, ...rest }: CardMealProps) {
  return (
    <CardMealLayout {...rest}>
      <ContainerTimeText>
        <TimeText>{meal.time}</TimeText>
      </ContainerTimeText>
      <NameText>{meal.name}</NameText>
      <DietSign variant={meal.isInDiet ? 'success' : 'danger'} />
    </CardMealLayout>
  )
}
