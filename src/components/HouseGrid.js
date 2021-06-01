import React from "react";
import data from '../data/properties.json';
import {Image} from "react-bootstrap";

export function HouseGrid() {
    let randIDs = [];
    let numberGenerator = function(arr, len) { // generate non-repeating random numbers
        if (arr.length >= len) return; // stop when array length is 3
        let newNumber = Math.floor(Math.random() * 12) + 1; // returns a random number between 1-6 (+1 changes range from 0-5 to 1-6)
        if (arr.indexOf(newNumber) < 0) { // if the random number does not have an index in the array
            arr.push(newNumber); // add it to the array
        }
        numberGenerator(arr, len); // otherwise recursively run the function again
    };

    numberGenerator(randIDs, 3);

    const houses = []
    for (let i=0; i < 3; i++) { // repeat for 3 times
        let houseID = randIDs[i];
        let house = data.find((house) => house.id === houseID);
        houses.push(house);
    }

    return (
        <div class="w3-row" id="house-grid-row">
            <div className="w3-third" id="house-grid-col">
                <a href={`/property?id=${houses[0].id}`}>
                    <Image alt={houses[0].alt} src={houses[0].src} />
                </a>
            </div>

            <div className="w3-third" id="house-grid-col">
                <a href={`/property?id=${houses[1].id}`}>
                    <Image alt={houses[1].alt} src={houses[1].src} />
                </a>
            </div>

            <div className="w3-third" id="house-grid-col">
                <a href={`/property?id=${houses[2].id}`}>
                    <Image alt={houses[2].alt} src={houses[2].src} />
                </a>
            </div>
        </div>
    )
}