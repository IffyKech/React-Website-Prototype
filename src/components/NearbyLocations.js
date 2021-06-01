import React from "react";
import '../w3.css';
import {Image} from "react-bootstrap";

export class NearbyLocations extends React.Component {
    render() {
        if (this.props.hideDistance) { // set hideDistance to true to hide the distance text container
            return (
                <div id="new-location-container">
                    <div id="location-image-container">
                        <Image id="location-image" alt={this.props.alt} src={this.props.src} roundedCircle />
                    </div>

                    <div id="location-text-container" >
                        <h2><strong>{this.props.locationName}</strong></h2>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div id="new-location-container">
                    <div id="location-image-container">
                        <Image id="location-image" alt={this.props.alt} src={this.props.src} roundedCircle />
                    </div>

                    <div id="location-text-container" >
                        <h2><strong>{this.props.locationName}</strong></h2>
                        <h3>{this.props.distanceAway} miles away</h3>
                    </div>
                </div>
            )
        }
    }
}
