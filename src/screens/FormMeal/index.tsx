import { Alert, Dimensions, View } from 'react-native'
import uuid from 'react-native-uuid'
import {
  FormMealLayout,
  TitleFormMeal,
  ContainerTitleFormMeal,
  InDietText,
  ContainerRadioButtons,
  RadioButton,
  RadioButtonText,
  RadioButtonBefore,
} from './styles'
import { ButtonGoBack } from '../Statistics/styles'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { ModalBottomSheet } from '../../components/ModalBottomSheet'
import { InputForm } from '../../components/InputForm'
import { InputFormMasked } from '../../components/InputFormMasked'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { mealCreate } from '../../storage/meals/mealCreate'
import { dateCreate } from '../../storage/dates/dateCreate'
import { getMeal } from '../../storage/meals/getMeal'
import { mealUpdate } from '../../storage/meals/mealUpdate'
import { dateUpdate } from '../../storage/dates/dateUpdate'

type RouteParamsList =
  | undefined
  | {
      id: string
    }

export function FormMeal() {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const params = route.params as RouteParamsList
  const paramsExists = params !== undefined

  // controladores dos inputs
  const [nameValue, setNameValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [dateValue, setDateValue] = useState('')
  const [timeValue, setTimeValue] = useState('')
  const [hasInDiet, setHasInDiet] = useState(false)
  const [hasNoInDiet, setHasNoInDiet] = useState(false)

  const doesSubmitButtonIsDisabled =
    nameValue.trim().length === 0 ||
    descriptionValue.trim().length === 0 ||
    dateValue.trim().length === 0 ||
    timeValue.trim().length === 0 ||
    (!hasInDiet && !hasNoInDiet)

  const widthScreen = Dimensions.get('window').width

  function handleCheckedHasInDiet() {
    setHasInDiet(true)
    setHasNoInDiet(false)
  }

  function handleCheckedHasNoInDiet() {
    setHasNoInDiet(true)
    setHasInDiet(false)
  }

  async function handleCreateNewMeal() {
    try {
      await mealCreate({
        id: uuid.v4().toString(),
        name: nameValue,
        description: descriptionValue,
        date: dateValue,
        time: timeValue,
        isInDiet: !!hasInDiet,
      })
      await dateCreate(dateValue)
      if (hasInDiet) {
        return navigation.navigate('feedback-positive')
      }
      return navigation.navigate('feedback-negative')
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Nova refeição',
        'Não foi possível realizar o cadastro da sua refeição',
      )
    } finally {
      setNameValue('')
      setDescriptionValue('')
      setDateValue('')
      setTimeValue('')
      setHasInDiet(false)
      setHasNoInDiet(false)
    }
  }

  async function handleEditMeal() {
    try {
      if (paramsExists) {
        await mealUpdate({
          id: params.id,
          name: nameValue,
          description: descriptionValue,
          date: dateValue,
          time: timeValue,
          isInDiet: !!hasInDiet,
        })
        await dateUpdate(dateValue)
      }
      if (hasInDiet) {
        return navigation.navigate('feedback-positive')
      }
      return navigation.navigate('feedback-negative')
    } catch (error) {
      console.log(error)
      Alert.alert('Editar refeição', 'Não foi possível editar a refeição')
    } finally {
      setNameValue('')
      setDescriptionValue('')
      setDateValue('')
      setTimeValue('')
      setHasInDiet(false)
      setHasNoInDiet(false)
    }
  }

  async function fetchGetMeal() {
    try {
      const mealInStorage = await getMeal(params!.id)
      setNameValue(mealInStorage.name)
      setDescriptionValue(mealInStorage.description)
      setDateValue(mealInStorage.date)
      setTimeValue(mealInStorage.time)
      setHasInDiet(mealInStorage.isInDiet)
      setHasNoInDiet(!mealInStorage.isInDiet)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Editar refeição',
        'Não foi possível carregar os dados da refeição que você quer editar',
      )
    }
  }

  useEffect(() => {
    if (paramsExists) {
      fetchGetMeal()
    }
  }, [])

  return (
    <FormMealLayout>
      <ContainerTitleFormMeal>
        <ButtonGoBack
          style={{ top: '10%' }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color={colors['gray-700']} />
        </ButtonGoBack>
        <TitleFormMeal>
          {paramsExists ? 'Editar refeição ' : 'Nova Refeição'}
        </TitleFormMeal>
      </ContainerTitleFormMeal>
      <ModalBottomSheet>
        <View>
          <InputForm
            label="Nome"
            value={nameValue}
            onChangeText={setNameValue}
          />
          <InputForm
            label="Descrição"
            value={descriptionValue}
            onChangeText={setDescriptionValue}
            multiline
            style={{ height: 120 }}
            textAlignVertical="top"
          />
          <View style={{ flexDirection: 'row', gap: 24 }}>
            <InputFormMasked
              type="datetime"
              format="DD/MM/YYYY"
              keyboardType="numeric"
              label="Data"
              style={{ width: (widthScreen - 48 - 24) / 2 }}
              value={dateValue}
              onChangeText={setDateValue}
            />
            <InputFormMasked
              type="datetime"
              format="HH:mm"
              keyboardType="numeric"
              label="Hora"
              style={{ width: (widthScreen - 48 - 24) / 2 }}
              value={timeValue}
              onChangeText={setTimeValue}
            />
          </View>
          <View style={{ gap: 8 }}>
            <InDietText>Está dentro da dieta?</InDietText>
            <ContainerRadioButtons>
              <RadioButton
                type="hasInDiet"
                isChecked={hasInDiet}
                onPress={handleCheckedHasInDiet}
              >
                <RadioButtonBefore success />
                <RadioButtonText>Sim</RadioButtonText>
              </RadioButton>
              <RadioButton
                type="hasNoInDiet"
                isChecked={hasNoInDiet}
                onPress={handleCheckedHasNoInDiet}
              >
                <RadioButtonBefore />
                <RadioButtonText>Não</RadioButtonText>
              </RadioButton>
            </ContainerRadioButtons>
          </View>
        </View>
        <Button
          style={doesSubmitButtonIsDisabled && { opacity: 0.7 }}
          onPress={paramsExists ? handleEditMeal : handleCreateNewMeal}
          disabled={doesSubmitButtonIsDisabled}
        >
          <Button.Text>
            {paramsExists ? 'Salvar alterações' : 'Cadastrar refeição'}
          </Button.Text>
        </Button>
      </ModalBottomSheet>
    </FormMealLayout>
  )
}
