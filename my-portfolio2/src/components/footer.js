import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center">
                    
                    <Col className="p-0 d-flex justify-content-right" md={3}>
                        This site was made by Kyle Cooper.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;