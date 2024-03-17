import styled from 'styled-components/native'

export const HeaderLayout = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 32px;
`

export const ContainerProfileImage = styled.View`
  border: 2px solid ${(props) => props.theme.colors['gray-700']};
  border-radius: 999px;
`

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`
