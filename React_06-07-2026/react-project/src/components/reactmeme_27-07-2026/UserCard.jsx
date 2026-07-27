import React from "react";

function UserCard({ user }) {

    console.log("Rendering :", user.name);

    return(
        <div
        style={{
            border:"1px solid gray",
            margin:"10px",
            padding:"10px",
            borderRadius:"8px"
        }}
        >

        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>

        </div>
    )
}

export default React.memo(UserCard);

