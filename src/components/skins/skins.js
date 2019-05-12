import React from "./node_modules/react";
import Button from './node_modules/react-bootstrap/Button';
import { Col } from './node_modules/react-bootstrap'


function SkinButton(props) {

    return (
        <div className="card">
            <div className="img-container">
                <Col xs={6} md={4}>
                    <Button>
                        <img alt={props.name} src={props.image} />
                    </Button>
                </Col>
            </div>
        </div>
    );
}

export default SkinButton;
