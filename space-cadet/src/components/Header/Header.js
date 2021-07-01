import Globe from '../../Globe.svg'
import { Nav, NavDropdown } from 'react-bootstrap/'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header( {apod, rovers: {rovers} } ) {

    const curiosityMax = rovers[0].max_sol
    const spiritMax = rovers[1].max_sol
    const opportunityMax = rovers[2].max_sol
    const perseveranceMax = rovers[3].max_sol
    

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
                <NavDropdown title="APODS" id="nav-dropdown">                    
                    <LinkContainer to={`/apod/${apod.date}`}>
                        <Nav.Link>Today's APOD</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/apods">
                        <Nav.Link>Gallery View</Nav.Link>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Rovers" id="nav-dropdown">                    
                    <LinkContainer to={`/rovers/curiosity/${curiosityMax}`}>
                        <Nav.Link>Curiosity</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/rovers/opportunity/${opportunityMax}`}>
                        <Nav.Link>Opportunity</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/rovers/spirit/${spiritMax}`}>
                        <Nav.Link>Spirit</Nav.Link>
                    </LinkContainer>
                    {/* Perseverence endpoint empty */}
                    {/* <LinkContainer to={`/rovers/perseverance/${perseveranceMax}`}>
                        <Nav.Link>Perseverance</Nav.Link>
                    </LinkContainer> */}
                </NavDropdown>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav>
        </header>
    )
}