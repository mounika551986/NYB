function SimpleList(){
    const fruits=["Apple","Banana","Mango","Grapes"];
    return(
        <>
        <h2>Fruit List</h2>
        <ul>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        </>
    )
}
export default SimpleList;
