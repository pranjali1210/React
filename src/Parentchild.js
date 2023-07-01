function Parentchild(props)
{
    const data="Asha Shinde"
    return(
        <div>
            <h2>User Name : </h2>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}
export default Parentchild