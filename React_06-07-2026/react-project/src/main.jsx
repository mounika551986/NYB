import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/reduxstorereducer_14-07-2026/Store";
import { ThemeProvider } from "./pages_07-07-2026/themecontextpage_16-07-2026/ThemeContext";
import EmployeeProvider from "./context_17-07-2026/EmployeeContext";



// import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        
        <EmployeeProvider>
 <App />  
 
   
 
        </EmployeeProvider>
      
      </ThemeProvider>
    </Provider>
   </React.StrictMode>
);
        


