import { Alert, Modal, ModalProps, View } from 'react-native'
import { RemoveMealLayout, RemoveMealModal, RemoveMealTitle } from './styles'
import { Button } from '../Button'
import { mealDelete } from '../../storage/meals/mealDelete'
import { useNavigation } from '@react-navigation/native'
import { dateDelete } from '../../storage/dates/dateDelete'

type ModalRemoveMealProps = ModalProps & {
  onClose: () => void
  mealId: string
  date: string
}

export function ModalRemoveMeal({
  onClose,
  mealId,
  date,
  ...rest
}: ModalRemoveMealProps) {
  const navigation = useNavigation()
  async function handleRemoveMeal() {
    try {
      await mealDelete(mealId)
      await dateDelete(date)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Remover refeição',
        'Não foi possível remover essa refeição no momento.',
      )
    }
  }

  return (
    <Modal {...rest} onRequestClose={onClose}>
      <RemoveMealLayout>
        <RemoveMealModal>
          <RemoveMealTitle>
            Deseja realmente excluir o registro da refeição?
          </RemoveMealTitle>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <Button type="light" style={{ flex: 1 }} onPress={onClose}>
              <Button.Text type="light">Cancelar</Button.Text>
            </Button>
            <Button onPress={handleRemoveMeal}>
              <Button.Text>Sim, excluir</Button.Text>
            </Button>
          </View>
        </RemoveMealModal>
      </RemoveMealLayout>
    </Modal>
  )
}
