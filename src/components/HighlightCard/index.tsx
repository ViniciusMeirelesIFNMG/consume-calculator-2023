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
      <Consumption>
        <ConsumptionLabel type={type}>Consumo {title}</ConsumptionLabel>
      </Consumption>

      <Consumption>
        <ConsumptionValue type={type}>{consumption}</ConsumptionValue>
      </Consumption>

      <Cost>
        <CostLabel type={type}>Preço Médio do Litro </CostLabel>
      </Cost>

      <Cost>
        <CostValue type={type}>{cost}</CostValue>
      </Cost>
    </Container>
  )
}