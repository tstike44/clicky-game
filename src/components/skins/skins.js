import React, { Component } from "./node_modules/react";





export default class SkinButton extends Component {

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
    }

    render() {
        return (

            <div className="character">
                <img
                    src={this.props.character.img}
                    alt="character"
                    className="profile-pic"
                    onClick={this.handleClick} />
            </div>
        )
    }
}

