import styled from 'styled-components/native'

export const ModalBottomSheetLayout = styled.View`
  background-color: ${(props) => props.theme.colors['gray-100']};
  flex: 1;
  border-radius: 20px 20px 0 0;
  padding: 32px 24px;
  justify-content: space-between;
`
