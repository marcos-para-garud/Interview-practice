// import axios from "axios";
// import react from "react";
// import { useState, useEffect } from "react";


// const useFetch = (url)=>{
//     const [data , setData] = useState(null);
//     const [error , setError] = useState(false);
//     const [loading , setLoading] = useState(true);

  
//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(url);
//             setData(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError(err.message);
//         } 
//     };
//     fetchData();
// }, [url]);

//     return {data , error , loading};
// }

// export default useFetch;





import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

 const UseFetch = (url)=>{
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState(null)
    useEffect(()=>{
        const fetch = async ()=>{
            try {
                const response = await axios.get(url)
                setData(response.data);
                setLoading(false)
            } catch (error) {
                 console.log("error fetching data:"+error);
                 setError(true)
            }
        }
        fetch();
       
    } , [])
    return [error , loading , data]
}

export default UseFetch;

