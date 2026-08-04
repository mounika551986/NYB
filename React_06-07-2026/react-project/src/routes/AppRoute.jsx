import Miniproject from "../components/miniproject_29-07-2026/Miniproject";
import MiniprojectNav from "../components/minitask_04-08-2026/MiniprojectNav";
import MiniNav from "../components/minitask_04-08-2026/MiniprojectNav";
import MiniProtectedRoute from "../components/minitask_04-08-2026/MiniProtectedRoute";
import MiniAbout from "../pages_07-07-2026/minipractice_04-08-2026/MiniAbout";
import MiniDashboard from "../pages_07-07-2026/minipractice_04-08-2026/MiniDashboard";
import MiniHome from "../pages_07-07-2026/minipractice_04-08-2026/MiniHome";
import MiniLogin from "../pages_07-07-2026/minipractice_04-08-2026/MiniLogin";
import MiniNotFound from "../pages_07-07-2026/minipractice_04-08-2026/MiniNotfound";
import MiniProduct from "../pages_07-07-2026/minipractice_04-08-2026/MiniProduct";
import MiniProductDetails from "../pages_07-07-2026/minipractice_04-08-2026/MiniProductDetails";
import MiniProfile from "../pages_07-07-2026/minipractice_04-08-2026/MiniProfile";
import MiniSetting from "../pages_07-07-2026/minipractice_04-08-2026/MiniSetting";
import MiniprojectNav from "../components/minitask_04-08-2026/MiniprojectNav";
function AppRoute() {
  return (
     <Routes>
        <Route path="/MiniHome" element={<MiniHome />} />
        <Route path="/MiniAbout" element={<MiniAbout />} />
        <Route path="/MiniDashboard" element={<MiniDashboard />} />
        <Route path="/MiniLogin" element={<MiniLogin />} />
        <Route path="/MiniNotfound" element={<MiniNotFound/>} />
       <Route path="/MiniProduct" element={<MiniProduct />} />
               <Route path="/MiniProductDetails" element={<MiniProductDetails />} />
                       <Route path="/MiniProfile" element={<MiniProfile />} />
                               <Route path="/MiniSetting" element={<MiniSetting />} />
              <Route path="/MiniProtectedRoute" element={<MiniProtectedRoute />} />
                                <Route path="/MiniprojectNav" element={<MiniprojectNav/>}/>




 </Routes>
  );
}

export default AppRoute;



    