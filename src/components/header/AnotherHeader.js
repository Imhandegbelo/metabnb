import { Container } from "react-bootstrap/Container";
import { Nav } from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap/NavbarBrand";

function AnotherHeader(){
    return(
        <>
        <Navbar>
            <Container>
                <Navbar.Brand>
                <img src={logo} alt="MetaBnb" className="logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link href="/place-to-stay">Place to stay</Nav.Link>
                    <Nav.Link>NFTs</Nav.Link>
                    <Nav.Link>Community</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default AnotherHeader;