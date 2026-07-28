function WithAuth(WrappedComponent){
    return function AuthComponent(props){
        const isLoggedIn =true;
        if(!isLoggedIn){
            return<h2>please login</h2>
        }
        return<WrappedComponent{...props}/>
    }
}
export default WithAuth;
