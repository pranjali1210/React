import {Link} from 'react-router-dom'
function NavBar()
{
    return(
        <div>
        <ul>
            {/*<li></li>
            //<li><Link to="/home">Home</Link></li> */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
        </div>
    )
}
export default NavBar