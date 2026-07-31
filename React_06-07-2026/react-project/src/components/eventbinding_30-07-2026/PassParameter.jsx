function PassParameter(){
    const showName =(name) =>{
        alert(name);
    }
    return(
        <button
        onClick={()=> showName("mounika")}>
            showme
        </button>
    )

    }
    export default PassParameter;
    