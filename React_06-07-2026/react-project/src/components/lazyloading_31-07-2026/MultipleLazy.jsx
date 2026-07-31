import { lazy, Suspense } from "react";

const Home= lazy(()=>import("../../pages_07-07-2026/lazyloading_31-07-2026/Home"));
const About =lazy(()=>import("../../pages_07-07-2026/lazyloading_31-07-2026/About"));
const Profile =lazy(()=>import("../../pages_07-07-2026/lazyloading_31-07-2026/Profile"));
function MultipleLazy(){
    return(
        <>
        <Suspense fallback ={<h2>Multiple Loading...</h2>}>
        
        <Home/>
        <About/>
        <Profile/>
        </Suspense>
        </>

    )
}
export default MultipleLazy; 
