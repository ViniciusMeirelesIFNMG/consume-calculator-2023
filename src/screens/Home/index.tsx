import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
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
  HighlightCards,
  Transactions,
  Title 
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

      <HighlightCards>
        <HighlightCard 
          title='Álcool'
          consumption='3 km/L'
          cost='R$ 5,15/L'
          lastTransaction='Última entrada dia 13 de abril'
          type='alcohol'
        />
        <HighlightCard 
          title='Gasolina'
          consumption='8,63 km/l'
          cost='R$ 0,28 / km'
          lastTransaction='Última entrada dia 03 de abril'
          type='gasoline'
        />
        <HighlightCard 
          title='Geral'
          consumption='7,82 km/l'
          cost='R$ 0,31 / km'
          lastTransaction='01 a 16 de abril'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <TransactionCard />
      </Transactions>
    </Container>
  );
}

