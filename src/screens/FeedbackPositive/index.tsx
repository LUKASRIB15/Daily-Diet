import { Image, Text } from 'react-native'
import {
  FeedbackInfos,
  FeedbackLayout,
  FeedbackTitle,
  FeedbcakDescription,
} from './styles'
import IllustrationPositive from '../../assets/positive.png'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export function FeedbackPositive() {
  const navigation = useNavigation()

  return (
    <FeedbackLayout>
      <FeedbackInfos>
        <FeedbackTitle>Continue assim!</FeedbackTitle>
        <FeedbcakDescription>
          Você continua{' '}
          <Text style={{ fontWeight: 'bold' }}>dentro da dieta.</Text> Muito
          bem!
        </FeedbcakDescription>
        <Image
          source={IllustrationPositive}
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
