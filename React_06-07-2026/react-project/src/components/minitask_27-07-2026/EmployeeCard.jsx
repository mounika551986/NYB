import React from "react";

function EmployeeCard({ employee }) {

    console.log("Rendering :", employee.name);

    return (

        <div
            style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px"
            }}
        >

            <h2>{employee.name}</h2>

            <p>Email : {employee.email}</p>

            <p>Phone : {employee.phone}</p>

            <p>Company : {employee.company.name}</p>

        </div>

    );

}

export default React.memo(EmployeeCard);