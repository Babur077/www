import {Link} from 'react-router-dom'
import './styles/header.css'


function Header(){
    return(
        <header className="header">
            <div className="container">
                <nav>
                    <h1>Logo</h1>

                    <div className="nav-links">
                         <ul className="nav-links_List">
                             <li className="link">
                                  <Link to="/"> Home </Link>
                             </li>
                             <li className="link">
                                  <Link to="/signin"> Sign-in </Link>
                             </li> <li className="link">
                                  <Link to="/signup"> Signup </Link>
                             </li>
                         </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;