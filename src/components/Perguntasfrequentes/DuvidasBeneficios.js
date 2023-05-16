import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DuvidasBeneficios() {

  return (
    <>
    <Container>
    <h3 class="display-4 fw-bold lh-1 text-start my-2 ">Porquê preciso de...</h3>
      <Row className='mb-5'>
        <Col className='my-2' >
          <Toast>
            <Toast.Header className='bg-primary'>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto text-light">Repetidor de sinal?</strong>
            </Toast.Header>
            <Toast.Body>
              É um equipamento instalado para amplificar a área de alcance do sinal do roteador, para pontos da casa onde a internet não chega, ou tem problemas de lentidão por causa da distância.
            </Toast.Body>
          </Toast>
        </Col>
        <Col className='my-2'>
          <Toast>
            <Toast.Header className='bg-primary'>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto text-light">Clube de Descontos?</strong>
            </Toast.Header>
            <Toast.Body>
             Aplicativo CLUBE NETSIM que é baixado na loja de aplicativos de forma gratuita e garante descontos em mais de 3 mil estabelecimentos e alguns aqui na nossa região águas quentes. 
            </Toast.Body>
          </Toast>
        </Col>
      <Col className='my-2'>
        <Toast>
          <Toast.Header className='bg-primary'>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto text-light">App´s Standard e Premium?</strong>
          </Toast.Header>
          <Toast.Body>
            São aplicativos de filmes, música e entretenimentos em geral que são liberados através de um portal de aplicativos onde fornecemos suas credenciais de acesso e você mesmo pode escolher.
          </Toast.Body>
        </Toast>
      </Col>
      </Row>
      </Container>
    </>

  );
}

export default DuvidasBeneficios;