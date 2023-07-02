import { Link } from "react-router-dom"
function Page404()
{
    return(
        <div>
            <h1>404 Page</h1>
            <p>This URL is not Present</p>
            <Link to="/home">Go to Home Page</Link>
        </div>
    )
}
export default Page404