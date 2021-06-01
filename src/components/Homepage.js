import React from "react";
import '../w3.css';
import {SearchBar} from "./SearchBar";
import {HouseGrid} from "./HouseGrid";
import {SmHouseCard} from "./SmHouseCard";
import data from "../data/properties.json";
import {Link} from "react-router-dom";

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "houses": []
        }
    }

    /*
    Pulls 3 random properties from the json file of data.
     */
    generateRandomHouses = () => {
        let randIDs = [];
        let numberGenerator = function(arr) { // generate non-repeating random numbers
            if (arr.length >= 3) return; // stop when array length is 3
            let newNumber = Math.floor(Math.random() * 12) + 1; // returns a random number between 1-6 (+1 changes range from 0-5 to 1-6)
            if (arr.indexOf(newNumber) < 0) { // if the random number does not have an index in the array
                arr.push(newNumber); // add it to the array
            }
            numberGenerator(arr); // otherwise recursively run the function again
        };

        numberGenerator(randIDs);

        const houses = []
        for (let i=0; i < 3; i++) { // repeat for 3 times
            let houseID = randIDs[i];
            let house = data.find((house) => house.id === houseID); // returns the first data object that meets the condition
            houses.push(house); // adds the item to the list of items
        }
       return houses;
    }


    render() {
        let houses = this.generateRandomHouses();

        return (
            <div>
                <header id="header">
                    <Link to='/'>
                        <h1 id="headerText">rent-a-ccomm</h1>
                    </Link>
                </header>
                <SearchBar brandText="Featured Properties"/>
                <HouseGrid/>
                <div className="w3-row-padding w3-padding-16 w3-center">
                    <div className="skb-sq">
                        <h3>Featured Properties</h3>
                    </div>
                    <div className="w3-row" id="featured-properties-row">
                        <div className="w3-third" id="featured-properties-col">
                            <a href={`/property?id=${houses[0].id}`}>
                                <SmHouseCard houseName={houses[0].name} price={`£${houses[0].pcm} pcm`} src={houses[0].src}/>
                            </a>
                        </div>

                        <div className="w3-third" id="featured-properties-col">
                            <a href={`/property?id=${houses[1].id}`}>
                                <SmHouseCard houseName={houses[1].name} price={`£${houses[1].pcm} pcm`} src={houses[1].src}/>
                            </a>
                        </div>

                        <div className="w3-third" id="featured-properties-col">
                            <a href={`/property?id=${houses[2].id}`}>
                                <SmHouseCard houseName={houses[2].name} price={`£${houses[2].pcm} pcm`} src={houses[2].src}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}