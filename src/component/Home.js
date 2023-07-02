import { Link } from "react-router-dom"
function Home()
{
    return(
    <div>
        <h1>Home Page !!</h1>
        <p>This is Home Page of our awesome App</p>
        <p>And here we are learning about Router's</p>
        <Link to="/about">go to about page</Link>
    </div>
    )
}
export default Home