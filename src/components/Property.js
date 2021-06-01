import React from "react";
import '../w3.css';

export class Property extends React.Component {
    render() {
        return(
            <>
                <div className="w3-container" id="propname-container">
                    <h1 id="propertyName">{this.props.propertyName}</h1>
                </div>

                <div className="w3-container" id="propimg">
                    <img alt={this.props.alt}
                         src={this.props.src} />
                </div>
            </>
        )
    }
}
