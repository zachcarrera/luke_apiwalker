import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { SearchForm } from "./components/SearchForm";
import { Person } from "./components/Person";
import { Planet } from "./components/Planet";
import { NoneFound } from "./components/NoneFound";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm={6}>
                        <SearchForm />
                        <Routes>
                            <Route path="/" element={<div></div>} />
                            <Route
                                path="/test"
                                element={<Link to="/">test</Link>}
                            />
                            <Route path="/people/:id" element={<Person />} />
                            <Route path="/planets/:id" element={<Planet />} />
                            <Route path="/not_found" element={<NoneFound />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
