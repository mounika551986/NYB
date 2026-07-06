import React from "react";
function Components(){
    const navigate = useNavigate();

    return (
       <> <h1>Hello</h1>
        <h2 onClick={() => navigate('/components')}>Text</h2>
        </>
    )
}
export default Components;
