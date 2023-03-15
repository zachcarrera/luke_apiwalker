import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const startPersonData = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
    ],
    starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/",
};

export const Person = (props) => {
    const { id } = useParams();
    const [personData, setPersonData] = useState(startPersonData);
    const [homePlanet, setHomePlanet] = useState({ url: "placeholder" });
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setPersonData(response.data);
                axios.get(response.data.homeworld).then((planetResponse) => {
                    setHomePlanet(planetResponse.data);
                    console.log(planetResponse.data);
                    console.log(
                        planetResponse.data.url.slice(
                            21
                            // planetResponse.data.url.indexOf("/planets")
                        )
                    );
                });
            })
            .catch((err) => navigate("/not_found"));
    }, [id, navigate]);

    return (
        <div>
            <h1>{personData.name}</h1>
            <p>
                <span style={{ fontWeight: 700 }}>Height: </span>
                {personData.height} cm
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Mass: </span>
                {personData.mass} kg
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Hair Color: </span>
                {personData.hair_color}
            </p>

            <p>
                <span style={{ fontWeight: 700 }}>Skin Color: </span>
                {personData.skin_color}
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Homeworld: </span>
                <Link
                    to={homePlanet.url.slice(
                        homePlanet.url.indexOf("/planets")
                    )}
                >
                    {homePlanet.name}
                </Link>
            </p>
        </div>
    );
};

export default Person;
