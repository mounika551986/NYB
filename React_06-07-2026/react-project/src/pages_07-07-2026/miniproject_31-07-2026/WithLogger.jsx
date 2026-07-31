const WithLogger = (WrappedComponent) => {

    return function(){

        console.log("Component Rendered");

        return <WrappedComponent />;
    };

};

export default WithLogger;
