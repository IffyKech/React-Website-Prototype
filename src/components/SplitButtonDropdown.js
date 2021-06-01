import React from "react";
import {Button, ButtonGroup, Dropdown} from "react-bootstrap";

export class SplitButtonDropdown extends React.Component {
    updatePrice = (e) => { // update the price prop to show the value of the dropdown item clicked
        let price = e.target.innerText; // get the text of the item clicked
        if (this.props.priceCategory === "min") { // if the price filter is the 'minimum' price filter
            this.props.setMin(price); // set the 'minimum price filter' text
        }

        else { // if the price filter is the 'maximum' price filter
            this.props.setMax(price); // set the 'maximum price filter' text
        }
    }

    render() {
        return(
            <Dropdown as={ButtonGroup}>
                <Button variant="">{this.props.categoryText}</Button>
                <Dropdown.Toggle split variant="" />
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.updatePrice}/>
                    <Dropdown.Item onClick={this.updatePrice}>100</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>200</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>300</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>400</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>500</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>600</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>700</Dropdown.Item>
                    <Dropdown.Item onClick={this.updatePrice}>800</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}