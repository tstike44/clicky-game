import React from "react";
import { Navbar, Container, Col } from 'react-bootstrap';
import './navbar.css';

function topNav(props) {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <div className='nav-header'>
                    <h1><strong>Clicky Game</strong></h1>
                </div>

                <div>
                    <Col>
                        <ul className='nav-score'>
                            <li>Score: </li>
                            <li>Top Score: </li>
                        </ul>
                    </Col>
                </div>
            </Navbar>
        </Container>
    )
}

export default topNav;