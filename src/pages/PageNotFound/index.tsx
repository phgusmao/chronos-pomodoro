import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";


export function PageNotFound() {

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página não encontrada 🚀</Heading>
          <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros. 🌌
          </p>
          <p>
            Se você acha que essa página deveria existir (ou se quiser bater um
            papo sobre viagem no tempo e buracos de minhoca), é só entrar em
            contato. Caso contrário, use o menu para voltar ao mundo real.
          </p>
          <p>
            Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
            internet, será que ela existiu de verdade?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}