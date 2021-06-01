import React from "react";
import {Card} from "react-bootstrap";

export class SmHouseCard extends React.Component {
    render() {
        return(
            <Card bg={this.props.backgroundColor} class="sm-house">
               <Card.Img variant="top" src={this.props.src} />
               <Card.Body>
                   <Card.Text>{this.props.houseName}</Card.Text>
                   <Card.Text>{this.props.price}</Card.Text>
               </Card.Body>
            </Card>
        )
    }
}