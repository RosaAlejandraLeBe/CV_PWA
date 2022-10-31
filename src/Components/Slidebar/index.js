import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import './index.scss'

const SideBar = ()=>{
    
    <div className='nav-bar'>
        <Link className>

        </Link>
        <nav>
            <NavLink exact="true" activeclassname= "active" to="/">
                <FontAwesomeIcon icon={faHome} color= " rgba(163, 121, 206, 0.534)"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="about" to="/about">
                <FontAwesomeIcon icon={faUser} color= " rgba(163, 121, 206, 0.534)"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="contact" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= " rgba(163, 121, 206, 0.534)"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" to="/">
                <FontAwesomeIcon icon={faHome} color= " rgba(163, 121, 206, 0.534)"/>
            </NavLink>
        </nav>

    </div>

}

export default SideBar
