import {Container, Nav, Navbar} from "react-bootstrap";
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleBrandClick = () => {
        navigate('/');
    };

    const handleLinkClick = (path: string) => {
        navigate(path);
    };

    return (
        <Navbar expand="lg" fixed="top" bg='dark' variant='dark'>
            <Container>
                    <Navbar.Brand onClick={handleBrandClick}>Buddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navlinks" />
                <Navbar.Collapse id="navlinks">
                    <Nav className="me-auto">
                            <Nav.Link onClick={() => handleLinkClick('/')}>Home</Nav.Link>
                        {!isAuthenticated && 
                            <Nav.Link onClick={() => handleLinkClick('/about')}>About</Nav.Link>
                        }
                        {isAuthenticated &&
                            <Nav.Link onClick={() => handleLinkClick('/tasks')}>Tasks</Nav.Link>
                        }
                    </Nav>
                <LoginButton/>
                <LogoutButton/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;