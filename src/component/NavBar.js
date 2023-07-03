import {Link,NavLink} from 'react-router-dom'
function NavBar()
{
    return(
        <div>
        <ul className='navbar'>
            {/*<li></li>
            //<li><Link to="/home">Home</Link></li> */}
            <li><NavLink 
            style={({isActive})=>{return {backgroundColor: isActive ?'green':'red'}}}
            className="navbarLink" to="/home">Home</NavLink></li>
            <li><NavLink 
            style={({isActive})=>{return {backgroundColor: isActive ?'green':'red'}}}
            className="navbarLink" to="/about">About</NavLink></li>
            <li><NavLink 
            style={({isActive})=>{return {backgroundColor: isActive ?'green':'red'}}}
            className="navbarLink" to="/contact">Contact</NavLink></li>
            <li><NavLink style={({isActive})=>{return {backgroundColor: isActive ?'green':'red'}}} 
            className="navbarLink" to="/filter">Filter</NavLink></li>
            <li><NavLink style={({isActive})=>{return {backgroundColor: isActive ?'green':'red'}}} 
            className="navbarLink" to="/login">Login</NavLink></li>
            
        </ul>
        </div>
    )
}
export default NavBar