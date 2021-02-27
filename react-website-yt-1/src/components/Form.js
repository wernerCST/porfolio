import React from 'react'
import './Form.css';
import { Container, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'; 


function Form() {
    return (
        <div className='contact-page'>
        <Container className='contact-container'>
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
            <Container className='form'>
                <Row>
                    <Col class="col-xs-6 col-sm-6 col-md-6">
                        <FormGroup>
                            <label>Name</label>
                            <FormControl
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <br/>
                            <label>Email</label>
                            <FormControl
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                        </FormGroup>
                    </Col>
                    <Col class="col-xs-6 col-sm-6 col-md-6">
                    <FormGroup>
                        {/* <ControlLabel>Textarea</ControlLabel> */}
                        <label>Your Message</label>
                        <FormControl componentClass="textarea" className='text-area'/>                        
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col class="col-xs-1 col-sm-3 col-md-4">                    
                        <Button src='/contact' className='contact-btn'>Submitt</Button>
                    </Col>
                </Row>
            </Container>
        </section>
      </Container>
      </div>
    )
}

export default Form

