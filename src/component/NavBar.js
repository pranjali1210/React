import {Link} from 'react-router-dom'
function NavBar()
{
    return(
        <div>
        <ul>
            {/*<li><Link to="/about">About</Link></li>
            //<li><Link to="/home">Home</Link></li> */}
            <li><a href='/home'>Home Page</a></li>
            <li><a href='/about'>About Page</a></li>
            <li><a href='/contact'>Contact Page</a></li>
        </ul>
        </div>
    )
}
export default NavBar