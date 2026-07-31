import React, { Suspense } from "react";

import Counter from "../../components/miniproject_31-07-2026/Counter";
import EmployeeList from "../../components/miniproject_31-07-2026/EmployeeList";
import Header from "../../components/miniproject_31-07-2026/Header";
import Modal from "../../components/miniproject_31-07-2026/Modal";
import PureCounter from "../../components/miniproject_31-07-2026/PureCounter";
import WithLogger from "./WithLogger";

const Dashboard= React.lazy(()=> import("./Dashboard"));

function Mini(){
    return(
        <div>
            <Header/>
            <EmployeeList/>
            <Counter/>
            <WithLogger/>
            <PureCounter/>
            <Modal/>
            <Suspense fallback={<h2>Loading Dashboard...</h2>}>
            <Dashboard/>
            </Suspense>
        </div>
    )
}
export default Mini
;
