import React from "react";
import '../w3.css'
import {NavBar} from "./NavBar";
import {Property} from "./Property";
import {NearbyLocations} from "./NearbyLocations";
import train from  '../assets/silhoutte-train.jpg';
import gradHat from '../assets/graduation-hat.png';
import locationPin from '../assets/location-pin.jpg';
import poundSign from '../assets/pound-sign.jpg';
import phone from '../assets/phone.png';
import mail from '../assets/mail.jpg';
import {SmHouseCard} from "./SmHouseCard";
import data from '../data/properties.json';
import {useLocation} from "react-router-dom";
import queryString from 'query-string';

export function PropertyPage() {
    const {search} = useLocation(); // returns the URL of the current page
    const houseID = parseInt(queryString.parse(search).id, 10); // convert the houseID from the URL to an int
    const property = data.find((house) => house.id === houseID);

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

    return(
        <div>
            <NavBar brandText="rent-a-ccomm"/>
            <div class="property-bdy">
                <div className="w3-row-padding w3-center">
                    <div className="w3-half">
                        <div id="property">
                            <Property propertyName={property.name} alt={property.alt} src={property.src} />
                        </div>

                        <div id="nearby-locations">
                            <NearbyLocations alt="A depiction of a train" src={train}
                                             locationName="Bournemouth Station"
                                             distanceAway={`${property.distanceFromStation}`} hideDistance={false} />

                            <hr id="prop-page-hr" />

                            <NearbyLocations alt="A depiction of a graduation hat" src={gradHat}
                                             locationName="Bournemouth University"
                                             distanceAway={`${property.distanceFromUniversity}`} hideDistance={false} />
                        </div>
                    </div>

                    <div className="w3-half">
                        <div className="w3-container">
                            <h1>Description</h1>
                            <NearbyLocations alt="A depiction of a location pin" src={locationPin}
                                             locationName={property.address} hideDistance={true} />
                            <NearbyLocations alt="A depiction of a the GBP sign in black" src={poundSign}
                                             locationName={`${property.pcm} pcm`}  hideDistance={true} />
                            <div id="property-description">
                                <p>{property.description}</p>
                            </div>

                            <hr id="prop-page-hr" />

                            <h1>Landlord Contact</h1>
                            <NearbyLocations alt="A depiction of a black telephone clipart" src={phone}
                                             locationName={property.landlordNumber} hideDistance={true} />
                            <NearbyLocations alt="A depiction of a black letter representing mail" src={mail}
                                             locationName={property.landlordEmail}  hideDistance={true} />
                        </div>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div id="results-container">
                        <h1>More Results</h1>
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

            </div>
        </div>
    )
}