function WithMessage(WrappedComponent){
    return function EnhancedComponent (props){
        return(
            <>
            <h1>Hoc example</h1>
            <WrappedComponent {...props}/>
            </>
        )

    }
}
export default WithMessage;
