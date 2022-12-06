import { Container, Row, Col } from "react-bootstrap";
import NavigationButton from "./NavigationButton";
import "./Navbar.css";

const Navbar = () => {
    return (
        <Container className="Navbar pt-2">
            <Row>
                <Col>
                    <NavigationButton to="uploadImage" content="Color" />
                </Col>
                <Col>
                    <NavigationButton to="/" content="Home" />
                </Col>
                <Col>
                    <NavigationButton to="/" content="About" />
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;