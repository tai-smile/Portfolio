import { SiGithub, SiDiscord } from 'react-icons/si';
import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <div className='contact-heading'>
          <h2>CONTACT WITH ME</h2>
          <div className='bottom-line'></div>
        </div>
        <Row className="align-items-center">
          <Row>
            <Col size={13} sm={6} className="px-1">
              <SiGithub size={40} />
              <h3>Github</h3>
              <a href='https://github.com/tai-smile' target="_blank">Tai_Smile</a>
            </Col>
            <Col size={13} sm={6} className="px-1">
              <SiDiscord size={40} />
              <h3>Discord</h3>
              <a href="https://discordapp.com/users/708502312339111956" target="_blank">Tài Smile#6315</a>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  )

}
