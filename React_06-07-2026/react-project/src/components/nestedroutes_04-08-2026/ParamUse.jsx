import { useParams } from "react-router-dom";

function ParamUse() {

    const { id } = useParams();

    const users = [
        { id: 1, name: "John", city: "Hyderabad" },
        { id: 2, name: "David", city: "Mumbai" },
        { id: 3, name: "Smith", city: "Delhi" }
    ];

    const user = users.find(
        (u) => u.id === Number(id)
    );

    if (!user) {
        return <h2>User Not Found</h2>;
    }

    return (

        <div>

            <h2>ID : {user.id}</h2>

            <h2>Name : {user.name}</h2>

            <h2>City : {user.city}</h2>

        </div>

    );

}

export default ParamUse;