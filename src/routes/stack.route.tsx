import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'
import { FormMeal } from '../screens/FormMeal'
import { FeedbackPositive } from '../screens/FeedbackPositive'
import { FeedbackNegative } from '../screens/FeedbackNegative'
import { DetailsMeals } from '../screens/DetailsMeal'

const Stack = createNativeStackNavigator()

export function StackRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'ios' }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="statistics" component={Statistics} />
      <Stack.Screen name="form-meal" component={FormMeal} />
      <Stack.Screen name="details-meal" component={DetailsMeals} />
      <Stack.Screen name="feedback-positive" component={FeedbackPositive} />
      <Stack.Screen name="feedback-negative" component={FeedbackNegative} />
    </Stack.Navigator>
  )
}
