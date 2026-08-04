import { Link } from "react-router-dom";
function NaviCreate(){
    return(
        <div>
         <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                Sorry! The page you are looking for doesn't exist.
            </p>

            <Link to="/NaviAbout">
                Go Back to Home
            </Link>

        </div>

    );

}

export default NaviCreate;
        