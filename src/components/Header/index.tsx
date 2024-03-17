import { Image } from 'react-native'
import { ContainerProfileImage, HeaderLayout, ProfileImage } from './styles'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderLayout>
      <Image source={Logo} alt="Logo Daily Diet" />
      <ContainerProfileImage>
        <ProfileImage
          src="https://github.com/LUKASRIB15.png"
          width={40}
          height={40}
          alt="profile image of user"
        />
      </ContainerProfileImage>
    </HeaderLayout>
  )
}
