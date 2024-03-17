import { useNavigation, useRoute } from '@react-navigation/native'
import {
  BlockDiet,
  ContainerTitleDetailsMeal,
  DateMeal,
  DescriptionMeal,
  DetailsMealLayout,
  NameMeal,
  StatusMeal,
  TitleDetailsMeal,
} from './styles'
import { ButtonGoBack } from '../Statistics/styles'
import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { ModalBottomSheet } from '../../components/ModalBottomSheet'
import { Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { ModalRemoveMeal } from '../../components/ModalRemoveMeal'
import { useEffect, useState } from 'react'
import { getMeal } from '../../storage/meals/getMeal'
import { MealStorageDTO } from '../../storage/meals/MealStorageDTO'

type RouteParamsList = {
  id: string
}

export function DetailsMeals() {
  const [modal, setModal] = useState(false)
  const [meal, setMeal] = useState<MealStorageDTO | null>(null)
  const [dateMeal, setDateMeal] = useState('')

  const { colors } = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParamsList

  async function fetchGetMeal() {
    const mealInStorage = await getMeal(id)
    setDateMeal(mealInStorage.date)
    setMeal(mealInStorage)
  }

  useEffect(() => {
    fetchGetMeal()
  }, [])

  return (
    <DetailsMealLayout isInDiet={meal?.isInDiet}>
      <ContainerTitleDetailsMeal>
        <ButtonGoBack
          style={{ top: '10%' }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color={colors['gray-700']} />
        </ButtonGoBack>
        <TitleDetailsMeal>Refeição</TitleDetailsMeal>
      </ContainerTitleDetailsMeal>
      <ModalBottomSheet>
        <View style={{ gap: 24 }}>
          <View style={{ gap: 8 }}>
            <NameMeal>{meal?.name}</NameMeal>
            <DescriptionMeal>{meal?.description}</DescriptionMeal>
          </View>
          <View style={{ gap: 8 }}>
            <DateMeal>Data e hora</DateMeal>
            <DescriptionMeal>
              {meal?.date} às {meal?.time}
            </DescriptionMeal>
          </View>
          <BlockDiet>
            <StatusMeal variant={meal?.isInDiet ? 'success' : 'danger'} />
            <Text>{meal?.isInDiet ? 'dentro da dieta' : 'fora da dieta'}</Text>
          </BlockDiet>
        </View>
        <View style={{ gap: 16 }}>
          <Button onPress={() => navigation.navigate('form-meal', { id })}>
            <Button.Icon>
              <PencilSimpleLine size={18} color={colors.white} />
            </Button.Icon>
            <Button.Text>Editar refeição</Button.Text>
          </Button>
          <Button type="light" onPress={() => setModal(true)}>
            <Button.Icon>
              <Trash size={18} color={colors['gray-700']} />
            </Button.Icon>
            <Button.Text type="light">Excluir refeição</Button.Text>
          </Button>
        </View>
        <ModalRemoveMeal
          transparent
          visible={modal}
          animationType="fade"
          mealId={id}
          date={dateMeal}
          onClose={() => setModal(false)}
        />
      </ModalBottomSheet>
    </DetailsMealLayout>
  )
}
