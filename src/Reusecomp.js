function Reusecomp(props)
{
    function popup()
    {
        alert(props.data.name)
    }
    return(
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <button onClick={popup}>Hello {props.data.address} </button>
        </div>
        
    )
}
export default Reusecomp