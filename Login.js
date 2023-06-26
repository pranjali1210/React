import React,{useState} from "react";
function Login()
{
    const [user,setUser]=useState("")
    const [password,setPass]=useState("")
    const [error,setErr]=useState(false)
    const [error1,setPassw]=useState(false)
    function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("Type correct Values")
        }
        else{
            alert("All Good")
        }
        e.preventDefault()
    }
    function userHandler(e)
    {
        let item=e.target.value;
        if(item.length<3)
        {
            setErr(true)
        }
        else{
            setErr(false)
        }
        setUser(item)
    }
    function passHandler(e)
    {
        let items=e.target.value;
        if(items.length<3)
        {
            setPassw(true)
        }
        else{
            setPassw(false)
        }
        setPass(items)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{error?<span>User Not Valid</span>:""}
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter User Password" onChange={passHandler}/>{error1?<span>Password Not Valid</span>:""}
            <br/><br/>
            <button type="Submit">Login</button>
            </form>
        </div>
    )
}
export default Login