import React from 'react'
import './Form.css';
import { Container, Row, Col} from 'react-bootstrap'; 

function Form() {
    return (
        <Container>
         <section className='form-heading'>
            <Row>
            <Col className="text-center">
                <h1>Say Hi!!</h1>
            </Col>
            </Row>
            <Row>
                <Col>
                    <p>Feel free to reachout to me for any inquaries :)</p>
                </Col>
            </Row>
         </section>        
         <section>
            <Container  className='form'>
                <Row>
                    <Col class="col-6">
                        <Row>
                            <label>Name: </label>
                            <input type='text'></input>
                        </Row>
                        <Row>
                            <label>Email: </label>
                            <input type='text'></input>
                        </Row>
                    </Col>
                    <Col class="col-6">
                        <label>Email: </label>
                        <input type='text'></input>
                    </Col>
                </Row>
            </Container>
        </section>
      </Container>
    )
}

export default Form

