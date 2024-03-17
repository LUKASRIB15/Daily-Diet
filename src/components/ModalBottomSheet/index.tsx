import { ReactNode } from 'react'
import { ModalBottomSheetLayout } from './styles'

export function ModalBottomSheet({ children }: { children: ReactNode }) {
  return <ModalBottomSheetLayout>{children}</ModalBottomSheetLayout>
}
