import { 
  Container,
  Date,
  DataConteiner,
  Text,
  Card,
} from "./styles";

export function TransactionCard() {
  return (
    <Container>
      <Card>
        <DataConteiner>
          <Date>11/04/2022</Date>
          <Text>Jenipapo</Text>
        </DataConteiner>

        <DataConteiner>
          <Text>R$50,00</Text>
          <Text>Vlr/L: R$ 4.95</Text>
        </DataConteiner>

        <DataConteiner>
          <Text>Qtd: 14.1L</Text>
          <Text>Etanol</Text>
        </DataConteiner>
      </Card>
    </Container>
  )
}