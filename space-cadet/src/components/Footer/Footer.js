import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap/'
import NASA_Worm_logo from '../../NASA_Worm_logo.svg'

export default function Footer () { 
    return (
        <footer className="flex-container">
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <div className="brand-footer">
                <p>Images provided by</p>
                <img className="nasa-logo" width="75" alt="NASA Worm logo (gray)" src={NASA_Worm_logo}/>
            </div>
        </footer>
    )
}