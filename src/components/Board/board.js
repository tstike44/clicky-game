import React from "react";
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import "./skins.css";


function SkinButton(props) {

    return (
        <div className="img-div">
                <Button className="img-button">
                    <Col xs={6} md={4}>
                        <img alt={props.name} src={props.image} />
                    </Col>
                </Button>          
        </div>
    );
}


export default SkinButton;
