import {
  Container,
  Header,
  Title,
  Consumption,
  ConsumptionLabel,
  ConsumptionValue,
  Cost,
  CostLabel,
  CostValue,
} from './styles';

interface Props {
  title: string;
  consumption: string;
  cost: string;
  lastTransaction: string;
  type: 'alcohol' | 'gasoline' | 'total';
}

export function HighlightCard({
  title,
  consumption,
  cost,
  lastTransaction,
  type
}: Props) {

  const icons = {
    alcohol: "local-gas-station",
    gasoline: "local-gas-station",
    total: "attach-money"
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
      </Header>

      <Consumption>
        <ConsumptionLabel type={type}>Consumo médio: </ConsumptionLabel>
      </Consumption>

      <Consumption>
        <ConsumptionValue type={type}>{consumption}</ConsumptionValue>
      </Consumption>

      <Cost>
        <CostLabel type={type}>Custo por km: </CostLabel>
      </Cost>

      <Cost>
        <CostValue type={type}>{cost}</CostValue>
      </Cost>
    </Container>
  )
}