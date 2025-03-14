import { Link } from 'react-router-dom'

function Navigation() {
return (
    <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        padding: '15px' 
    }}>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
    </nav>
)
}

export default Navigation
