import React from "react";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {SplitButtonDropdown} from "./SplitButtonDropdown";
import {Link, Redirect} from 'react-router-dom';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "minPrice": "",
            "maxPrice": "",
            "location": "",
            "redirect": false
        }
    }

    setMinPrice = (price) => { // change the state of the min price filter to update the props
        this.setState({
            "minPrice": price
        });
    }

    setMaxPrice = (price) => { // change the state of the max price filter to update the props
        this.setState({
            "maxPrice": price
        });
    }

    validateInputs = (min, max, location) => { // validation for the inputs
        if (location.length < 1) { // ensure that a location has been searched for
            alert("Please enter a location to search.");
            return false;
        }

        else if (min.length > 1 && max.length > 1){
            if (min > max) { // check to make sure the min price is not larger than the max price
                alert("An Error has occurred with the price filters. Please Try again.");
                return false;
            }
        }
        return true;
    }

    redirectUser = () => { // set the redirect state var to true if the inputs are valid
        // gather input values
        let minPrice = this.state.minPrice;
        let maxPrice = this.state.maxPrice;
        let location = document.getElementById("search-bar-input").value;

        // check input values for validation
        if (this.validateInputs(minPrice, maxPrice, location)) { // if the validation was successful
            this.setState({ // set the redirect state to true so the page will redirect to the results page
                "redirect": true,
                "location": location
            })
        }
    }

    render() {
        if (this.state.redirect) { // if the redirect value is set to true
            return( // redirect the user to the results page with the input values in the query string
                <Redirect to={`/results?location=${this.state.location}&min=${this.state.minPrice}&max=${this.state.maxPrice}`} />
            );
        }

        else {
            return (
                <Navbar bg="light" expand="sm">
                    <Link to='/'>
                        <Navbar.Brand id="navbar-brand">{this.props.brandText}</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <div className="w3-quarter">
                            <SplitButtonDropdown priceCategory="min" categoryText={`Min Price: £${this.state.minPrice}`} setMin={this.setMinPrice} />
                        </div>

                        <div className="w3-quarter">
                            <SplitButtonDropdown priceCategory="max" categoryText={`Max Price: £${this.state.maxPrice}`} setMax={this.setMaxPrice} />
                        </div>
                        <div className="w3-half">
                            <Form inline>
                                <FormControl placeholder="Location" type="text" id="search-bar-input"/>
                                <Button type="button" id="search-bar-button" onClick={this.redirectUser}>Search</Button>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}
