function FocusEvent(){
    return(
        <>
        <h2>Focus event</h2>
        <input
        type="text"
        onFocus={()=>alert("input focused")}
        />
        </>
    )
}
export default FocusEvent;
