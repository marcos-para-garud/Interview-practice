// import react from "react";
// import UseFetch from "../CustomHooks/UseFetch";


// function Fetch() {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const {data , loading , error} = UseFetch(url);
    
//     if(loading) return <div>...loading</div>
//     if (error) return <div style={{ color: "red" }}>{error}</div>;
//     return(
//         <div>
//             {data.map((ele)=>(<div>{ele.username}</div>))}
//         </div>
//     )
// }

// export default Fetch;





import react from "react";
import UseFetch from "../CustomHooks/UseFetch";

const Fetch = ()=>{
    const url = "https://jsonplaceholder.typicode.com/users";
    const [error , loading ,  data] = UseFetch(url);

  if(error) return <div>...error</div>
  if(loading) return <div>...loading</div>
  return (
    <div>
        {data.length>0 && 
        data.map((data)=>(
            <li>{data.username}</li>
        ))}
    </div>
  )
}
export default Fetch;
