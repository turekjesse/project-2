import Globe from '../../Globe.svg'
import { Nav, NavDropdown } from 'react-bootstrap/'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header( {apod, rovers: {rovers} } ) {

    console.log(apod)
    return (
        <header>
            <div className="brand-header flex-container">
                <h1>Space</h1>
                <img className="brand-logo spin-right" src={Globe} alt="Space Cadet Brand Logo" />
                <h1>Cadet</h1>
            </div>
            <Nav className="justify-content-center" activeKey="/home">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title="APODs" id="nav-dropdown">                    
                    <LinkContainer to={`/apod/${apod.date}`}>
                        <Nav.Link>Today's APOD</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/apods">
                        <Nav.Link>Gallery View</Nav.Link>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Rovers" id="nav-dropdown">                    
                    <LinkContainer to={`/rovers/curiosity/${rovers[0].max_sol}`}>
                        <Nav.Link>Curiosity</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/rovers/opportunity/${ rovers[2].max_sol}`}>
                        <Nav.Link>Opportunity</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/rovers/spirit/${rovers[1].max_sol}`}>
                        <Nav.Link>Spirit</Nav.Link>
                    </LinkContainer>
                    {/* Perseverence endpoint empty */}
                     <LinkContainer to={`/rovers/perseverance/${rovers[3].max_sol}`}>
                        <Nav.Link>Perseverance</Nav.Link>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </header>
    )
}