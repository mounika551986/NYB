function MultipleParameter(){
    const student=(name,id)=>{
        alert (`${name}, ${id}`);
    };
    return(
        <button
        onClick={()=>student("myra","234")}>
            click me
        </button>
    )
}
export default MultipleParameter;
