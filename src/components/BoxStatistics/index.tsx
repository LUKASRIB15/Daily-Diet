import { ViewProps } from 'react-native'
import {
  BoxStatisticsLayout,
  StatisticsDescription,
  StatisticsQuantity,
} from './styles'

type BoxProps = ViewProps & {
  quantity: number
  description: string
  variant?: 'success' | 'danger'
}

export function BoxStatistics({
  quantity,
  description,
  variant = 'success',
  ...rest
}: BoxProps) {
  return (
    <BoxStatisticsLayout variant={variant} {...rest}>
      <StatisticsQuantity>{quantity}</StatisticsQuantity>
      <StatisticsDescription>{description}</StatisticsDescription>
    </BoxStatisticsLayout>
  )
}
