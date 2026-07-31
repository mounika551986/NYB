import { lazy, Suspense } from "react";

const Dashboard =lazy(()=>import ("./Dashboard"));
function SingleLazy(){
    return(
        <>
        <Suspense fallback={<h2>Loading...</h2>}>
        <Dashboard/>
        </Suspense>
        </>
    )
}
export default SingleLazy;
