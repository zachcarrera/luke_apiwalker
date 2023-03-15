import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const starterPlanetData = {
    name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical",
    gravity: "1 standard",
    terrain: "jungle, rainforests",
    surface_water: "8",
    population: "1000",
    residents: [],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-10T11:37:19.144000Z",
    edited: "2014-12-20T20:58:18.421000Z",
    url: "https://swapi.dev/api/planets/3/",
};

export const Planet = (props) => {
    const { id } = useParams();
    const [planetData, setPlanetData] = useState(starterPlanetData);
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => setPlanetData(response.data));
    }, [id]);

    return (
        <div>
            <h1>{planetData.name}</h1>
            <p>
                <span style={{ fontWeight: 700 }}>Climate: </span>
                {planetData.climate}
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Terrain: </span>
                {planetData.terrain}
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Surface Water: </span>
                {planetData.surface_water}
            </p>

            <p>
                <span style={{ fontWeight: 700 }}>Population: </span>
                {planetData.population}
            </p>
        </div>
    );
};

export default Planet;
