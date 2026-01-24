import {NavLink} from 'react-router-dom'

const Header: React.FC = () => {

    return (
        <header className="d-flex flex-column w-100 top-0 p-0 colored-bg">
            <nav className="nav nav-underline justify-content-center">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/team" className="nav-link">L'Équipe</NavLink>
                <NavLink to="/participation" className="nav-link">Nos Participations</NavLink>
                <NavLink to="/newsletters" className="nav-link">La Newsletter</NavLink>
            </nav>
        </header>
    )
}

export default Header
