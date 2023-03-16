import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export const Planet = (props) => {
    const { id } = useParams();
    // const [planetData, setPlanetData] = useState(starterPlanetData);
    const [planetData, setPlanetData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => setPlanetData(response.data))
            .catch((err) => navigate("/not_found"))
            .finally(() => {
                setIsLoading(false);
            });
    }, [id, navigate]);

    if (planetData === null || isLoading) {
        return <Spinner animation="border" />;
    }

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
