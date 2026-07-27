import { useEffect, useState } from "react";
import UserList from "./UserList";
import { getUsers } from "./ApiService";
function ReactHome(){
    const[users, setUsers]=useState([]);
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    useEffect(()=>{
        fetchUsers();

    },[]);
    const fetchUsers = async()=>{
        setLoading(true);
        try{
            const response= await getUsers();
            setUsers(response.data);
        }
        catch (err) {
    console.log(err);
    setError(err.message);
}
        finally{
            setLoading(false);

        }
    }
     return(

        <div>

        <h1>React.memo Example</h1>

        <button onClick={()=>setCount(count+1)}>
            Counter : {count}
        </button>
        {
            loading && <h2>Loading...</h2>
        }
        {
            error && <h2> {error}</h2>

        }
        <UserList users= {users}/>
        </div>
     );
}
export default ReactHome;
