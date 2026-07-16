import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages_07-07-2026/Components";
import Props from "./pages_07-07-2026/props_07-07-2026/Props";
import State from "./pages_07-07-2026/state_07-07-2026/State";
import Fragments from "./pages_07-07-2026/fragments_07-07-2026/Fragments";
import CallingFunction from "./pages_07-07-2026/callingfunction_07-07-2026/CallingFunction";
import PropsStatePage from "./pages_07-07-2026/propsstate_08-07-2026/PropsStatePage";
import ParentChildPage from "./pages_07-07-2026/parentchildprops/ParentChildPage";
import ChildToParentPage from "./pages_07-07-2026/childtoparent_08-07-2026/ChildParentPage";
import ChildToChildPage from "./pages_07-07-2026/childtochild_08-07-2026/ChildToChildPages";
import LocalState from "./components/localstate_09-07-2026/LocalState";
import ApiPage from "./pages_07-07-2026/api_10-07-2026/ApiPage";
import AxiosPage from "./pages_07-07-2026/axios_10-07-2026/AxiosPage";
import ASyncApiPage from "./pages_07-07-2026/asyncapi_10-07-2026/AsyncApiPage";
import StudentApiPage from "./pages_07-07-2026/studentapi_10-07-2026/StudentApiPage";
import GlobalStatePage from "./pages_07-07-2026/globalstatepage_13-07-2026/GlobalStatePage";
import ThemeContextPage from "./pages_07-07-2026/themecontextpage_13-07-2026/ThemeContextPage";
import LoginPage from "./pages_07-07-2026/authenticationpage_13-07-2026/LoginPage";
import ProviderConsumerPage from "./pages_07-07-2026/providerconsumerpage_13-07-2026/ProviderConsumerPage";
import ReduxPage from "./pages_07-07-2026/reduxpage_14-07-2026/ReduxPage";
import StudentPage from "./pages_07-07-2026/reduxpage_14-07-2026/StudentPage";
import ReducerPage from "./pages_07-07-2026/reducerpage_15-07-2026/ReducerPage";
import StudentMarksPage from "./pages_07-07-2026/reducerpage_15-07-2026/StudentMarksPage";
import DispatchPage from "./pages_07-07-2026/reducerpage_15-07-2026/DispatchPage";
import StudentReducerPage from "./pages_07-07-2026/reducerpage_15-07-2026/StudentReducerPage";
import FormPage from "./pages_07-07-2026/reducerpage_15-07-2026/FormPage";
import ShoppingCartPage from "./pages_07-07-2026/reducerpage_15-07-2026/ShoppingCartPage";
import CounterPage from "./pages_07-07-2026/reducerpage_15-07-2026/Counterpage";
import TodoListPage from "./pages_07-07-2026/reducerpage_15-07-2026/TodoListPage";
import ThemeContext from "./pages_07-07-2026/themecontextpage_16-07-2026/ThemeContext";
import StudentMarks from "./components/reducer_16-07-2026/StudentMarks";
import CityPage from "./pages_07-07-2026/redux_16-07-2026/CityPage";
import CitySelector from "./components/redux_16-07-2026/CitySelector";


import StudentMPage from "./pages_07-07-2026/minitask_16-07-2026/StudentMPage";





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/components" element={<Components />} />
                <Route path="/props" element={<Props />} />
                <Route path="/state" element={<State />} />
                <Route path="/fragments" element={<Fragments />} />
                <Route path="/callingfunctions" element={<CallingFunction />} />
                <Route path="/propstate" element={<PropsStatePage />} />
                <Route path="/parentchildprops" element={<ParentChildPage />} />
  <Route path="/childparentprops" element={<ChildToParentPage />} />
  <Route path="/childtochild" element={<ChildToChildPage/>} />
      <Route path="/localstate" element={<LocalState/>} />
            <Route path="/apipractice" element={<ApiPage/>} />
 <Route path="/axios" element={<AxiosPage/>} />
 <Route path="/async" element={<ASyncApiPage/>} />
 <Route path="/apistudent" element={<StudentApiPage/>} />
 <Route path="/globalstate" element={<GlobalStatePage/>} />
  <Route path="/themecontext" element={<ThemeContextPage/>} />
  <Route path="/login" element={<LoginPage/>} />
  <Route path="/providerconsumer" element={<ProviderConsumerPage/>} />
  <Route path="/redux" element={<ReduxPage/>} />
  <Route path="/student" element={<StudentPage/>} />
  <Route path="/reducer" element={<ReducerPage/>} />
  <Route path="/marks" element={<StudentMarksPage/>} />
  <Route path="/dispatch" element={<DispatchPage/>} />
  <Route path="/studentreducer" element={<StudentReducerPage/>} />
  <Route path="/form" element={<FormPage/>} />
    <Route path="/shoppingcart" element={<ShoppingCartPage/>} />
    <Route path="/counterpage" element={<CounterPage/>} />
    <Route path="/todolist" element={<TodoListPage/>} />
        <Route path="/themecontext" element={<ThemeContext/>}/>
                <Route path="/studentmarks" element={<StudentMarks/>}/>
                <Route path="/city"element={<CitySelector/>}/>
                 <Route path="studentpage"element={<StudentMPage/>}/>






            </Routes>
        </BrowserRouter>
    );
};

export default App;

