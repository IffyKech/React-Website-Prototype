import React from "react";
import '../w3.css';
import {NavBar} from "./NavBar";
import {SmHouseCard} from "./SmHouseCard";
import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import data from '../data/properties.json';

export function ResultsPage() {
    const {search} = useLocation(); // get the queries from the current URL
    const query = queryString.parse(search); // parses the query into an Object
    console.log(query);
    console.log("Min length" + query.min.length);
    console.log("Max length" + query.max.length);

    let results = data.filter(function (property) {
            return property.location.match(query.location);
        } // filter the data list to return properties that match the same location
    );

    if (query.min.length > 1 && query.max.length > 1) { // if there is input in both filters
        // filter results between the range
        results = results.filter(result => result.pcm >= parseInt(query.min, 10) && result.pcm <= parseInt(query.max, 10) );
    }

    else if (query.min.length > 1 && query.max.length < 1) { // if there is input in min filter (but not max)
        results = results.filter(result => !(result.pcm < parseInt(query.min, 10) )); // filter results smaller than the minimum
    }

    else if (query.min.length < 1 && query.max.length > 1) { // if there is input in max filter (but not min)
        results = results.filter(result => !(result.pcm > parseInt(query.max, 10) )); // filter results larger than the maximum
    }

    return(
        <div>
            <NavBar brandText="rent-a-ccomm" />
            <div className="w3-row-padding">
                <div className="w3-half" id="search-results">
                    <h1>Search Results</h1>
                    {results.map((result) => {
                        return(
                            <a href={`/property?id=${result.id}`}>
                                <SmHouseCard houseName={result.name} price={`£${result.pcm} pcm`} backgroundColor="secondary" src={result.src} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}