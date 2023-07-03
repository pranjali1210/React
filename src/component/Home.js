import { Link, useLocation} from "react-router-dom"
function Home()
{
    const location=useLocation()
    console.log(location)
    return(
    <div>
        <h1>Home Page !!</h1>
        <p>This is Home Page of our awesome App</p>
        <p>And here we are learning about Router's</p>
        <Link to="/about">go to about page</Link><br />
        
    </div>
    )
}
export default Home