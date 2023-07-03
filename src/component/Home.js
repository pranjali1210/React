import { Link, useNavigate } from "react-router-dom"
function Home()
{
    const navigate=useNavigate()
    const navTopage=(URL)=>{
        navigate(URL)
        
    }
    return(
    <div>
        <h1>Home Page !!</h1>
        <p>This is Home Page of our awesome App</p>
        <p>And here we are learning about Router's</p>
        <Link to="/about">go to about page</Link><br />
        <button onClick={()=> navTopage('/about')}>Go to About Page</button><br /><br />
        <button onClick={()=> navTopage('/filter')}>Go to Filter Page</button>
    </div>
    )
}
export default Home