import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Search for:</label>
            <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id=""
            >
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <input
                type="number"
                name="id"
                id=""
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
