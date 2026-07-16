import { useContext } from "react";
import { StudentContext } from "../../context_16-07-2026/StudentContext";

function SearchStudent(){
    const{search,setSearch}=useContext(StudentContext);
    

return(

<input
type="text"
placeholder="Search Student"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

)

}

export default SearchStudent;
