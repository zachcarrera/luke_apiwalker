import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}/${id}`);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className=" gap-3 d-flex justify-content-between align-items-center"
        >
            <Form.Label htmlFor="">Search for:</Form.Label>
            <Form.Select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id=""
            >
                <option value="people">people</option>
                <option value="planets">planets</option>
            </Form.Select>
            <Form.Control
                type="number"
                name="id"
                id=""
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default SearchForm;
