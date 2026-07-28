function WithLoading(WrappedComponent){
    return function LoadingComponent({loading,...props}){
        if(loading){
            return<h2>data loading</h2>
        }
        return<WrappedComponent {...props}/>
    }
}
export default WithLoading;