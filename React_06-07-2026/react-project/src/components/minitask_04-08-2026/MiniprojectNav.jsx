import { Link } from "react-router-dom";

function MiniprojectNav(){


  return (
    
    <nav
    
      style={{
        padding: "15px",
        backgroundColor: "#f2f2f2",
        display: "flex",
        gap: "20px",
      }}
      
    >
         <Link to="/MiniHome">Home</Link>
         <br></br>
         <br></br>
          <Link to="/MiniAbout">About</Link>
          <br></br>
          <br></br>
           <Link to="/MiniDashboard">Dashboard</Link>
           <br></br>
           <br></br>
            <Link to="/MiniLogin">Login</Link>
            <br></br>
            <br></br>
             <Link to="/MiniNotfound">Not found</Link>
             <br></br>
             <br></br>
              <Link to="/MiniProfile">Profile</Link>
              <br></br>
              <br></br>
               <Link to="/MiniProduct">Product</Link>
               <br></br>
               <br></br>
                <Link to="/MiniProductDetails">Product Details</Link>
                <br></br>
                <br></br>
                 <Link to="/MiniSetting">setting</Link>
                 <br></br>
                 <br></br>
                  <Link to="/MiniProtectedRoute">Protected Route</Link>
    </nav>
      );
}

export default MiniprojectNav
