import { Link } from "react-router-dom"
function About() {
    return (
        <div>
            <h1>About Page !!</h1>
            <p>This is About Page of our awesome App</p>
            <p>And here we are learning about Router's</p>
            <Link to="/home">go to home page</Link>
        </div>
    )
}
export default About