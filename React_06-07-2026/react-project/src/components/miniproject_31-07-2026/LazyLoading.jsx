import React,{Suspense} from "react";

const Dashboard=React.lazy(()=>import("./pages/Dashboard"));
<Suspense fallback={<h2>Loading...</h2>}>

<Dashboard/>

</Suspense>
