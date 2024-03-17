import { Image, Text } from 'react-native'
import {
  FeedbackInfos,
  FeedbackLayout,
  FeedbcakDescription,
} from '../FeedbackPositive/styles'
import { Button } from '../../components/Button'
import IllustrationNegative from '../../assets/negative.png'
import { useNavigation } from '@react-navigation/native'
import { FeedbackTitle } from './styles'

export function FeedbackNegative() {
  const navigation = useNavigation()

  return (
    <FeedbackLayout>
      <FeedbackInfos>
        <FeedbackTitle>Que pena!</FeedbackTitle>
        <FeedbcakDescription>
          Você <Text style={{ fontWeight: 'bold' }}>saiu da dieta</Text> dessa
          vez, mas continue se esforçando e não desista!
        </FeedbcakDescription>
        <Image
          source={IllustrationNegative}
          alt="Ilustração de uma pessoa feliz"
          style={{ marginTop: 40, marginBottom: 32 }}
        />
      </FeedbackInfos>
      <Button onPress={() => navigation.navigate('home')}>
        <Button.Text>Ir para a página inicial</Button.Text>
      </Button>
    </FeedbackLayout>
  )
}
