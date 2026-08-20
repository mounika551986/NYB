import React, { Suspense, lazy } from "react";

const About =React.lazy(()=> import ("./AboutLazy"));
const Home= React.lazy(() => import("./HomeLazy"));
function Lazy(){
    return(
        <>
        <h1>Lazy Loading Page</h1>
        <Suspense fallback={<p>Loading...</p>}>
        <About />
        <Home/>
      </Suspense>
        </>
    )

}
export default Lazy;

