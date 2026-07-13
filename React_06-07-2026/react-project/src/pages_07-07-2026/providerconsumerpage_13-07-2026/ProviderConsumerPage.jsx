import Home from "../../components/providerconsumer_13-07-2026/Home";
import UserContext from "./UserContext";

function ProviderConsumerPage(){
      const user = "Mounika";

  return (
<UserContext.Provider value={{user}}>
    <Home/>
</UserContext.Provider>
  )
}
export default ProviderConsumerPage;
