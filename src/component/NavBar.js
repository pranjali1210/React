import {Link,NavLink} from 'react-router-dom'
function NavBar()
{
    return(
        <div>
        <ul className='navbar'>
            {/*<li></li>
            //<li><Link to="/home">Home</Link></li> */}
            <li><NavLink className="navbarLink" to="/home">Home</NavLink></li>
            <li><NavLink className="navbarLink" to="/about">About</NavLink></li>
            <li><NavLink className="navbarLink" to="/contact">Contact</NavLink></li>
            
        </ul>
        </div>
    )
}
export default NavBar