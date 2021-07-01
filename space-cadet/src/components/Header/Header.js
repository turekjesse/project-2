import Globe from '../../Globe.svg'
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap/'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header({ apod }) {

    return (
        <header>
            <div className="brand-container">
                <h1>Space</h1>
                <img className="brand-logo spin-right" src={Globe} alt="Space Cadet Brand Logo" />
                <h1>Cadet</h1>
            </div>
            <Nav className="justify-content-center" activeKey="/home">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown onHover title="APODS" id="nav-dropdown">                    
                    <LinkContainer to={`/apod/${apod.date}`}>
                        <Nav.Link>Today's APOD</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/apods">
                        <Nav.Link>Gallery View</Nav.Link>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav>
        </header>
    )
}