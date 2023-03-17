import { 
  Container,
  Header,
  UserWrapper,
  CarInfo,
  HeaderTextWrapper,
  CarPlate,
  LogoutButton,
  LogoutIcon, 
  ImageBack,
  Image,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>
          <Image
            source={require('../../../assets/car.png')}
          />
          <ImageBack source={require('../../../assets/placa.png')}>
            <HeaderTextWrapper>
              <CarPlate>
                ABC-1D34
              </CarPlate>
            </HeaderTextWrapper>
          </ImageBack>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name='logout'>

            </LogoutIcon>
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
}

