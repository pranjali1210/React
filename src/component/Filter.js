import {useSearchParams} from 'react-router-dom'
function Filter()
{
    const [searchParams,setSearchParams]=useSearchParams()
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age=searchParams.get('age')
    const city=searchParams.get('city')
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>My Age is : {age}</h3>
            <h3>My City is : {city}</h3>
            <button onClick={()=>setSearchParams({age:40})}>Set Age in Query Params</button>
        </div>
    )
}
export default Filter