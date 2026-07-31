function BlurEvent(){
    return(
        <>
        <h2>Blur Example</h2>
        <input
        type="text"
        onBlur={()=>  alert("input lost Focus")} />

        </>
    )
}
export default BlurEvent;
