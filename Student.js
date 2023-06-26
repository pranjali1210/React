function Student(p)
{
    return(
        <div style={{backgroundColor:"skyblue", margin:10}}>
            <h1>Hello {p.name}</h1>
            <h2>Email : {p.email}</h2>
        </div>

    )
}
export default Student