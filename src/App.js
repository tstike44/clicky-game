import React, { Component } from 'react';
import { } from "./index";
import { Container } from 'react-bootstrap'
import Board from './components/Board/board';
import './App.css';



class App extends Component {

    render() {
        return (
            <div>
                <Container>
                  
                    <Board />
                </Container>
            </div>
        );
    }
}
export default App;