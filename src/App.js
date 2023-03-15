import "./App.css";
import { Planet } from "./components/Planet";
import { Person } from "./components/Person";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { SearchForm } from "./components/SearchForm";
import { NoneFound } from "./components/NoneFound";

function App() {
    return (
        <div className="App">
            <SearchForm />
            <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/test" element={<Link to="/">test</Link>} />
                <Route path="/people/:id" element={<Person />} />
                <Route path="/planets/:id" element={<Planet />} />
                <Route path="/not_found" element={<NoneFound />} />
            </Routes>
        </div>
    );
}

export default App;
