import React, { Component } from 'react';
import { } from "./index";
import skins from './images.json';
import { Container, Row, Col } from 'react-bootstrap'
import SkinButton from './components/skin-button/skindex';
import Wrapper from "./components/Wrapper";
import Nav from './components/Navbar/navbar';


class App extends Component {

    state = {
        skins
    };
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Wrapper>
                                {this.state.skins.map(skin => (
                                    <SkinButton
                                        id={skin.id}
                                        key={skin.id}
                                        image={skin.image}
                                        thumbnail />
                                ))}
                            </Wrapper>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;