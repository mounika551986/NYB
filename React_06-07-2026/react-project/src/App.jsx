import { BrowserRouter, Routes, Route, UNSAFE_getPatchRoutesOnNavigationFunction } from "react-router-dom";
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
import CitySelector from "./components/redux_16-07-2026/CitySelector";
import StudentMPage from "./pages_07-07-2026/minitask_16-07-2026/StudentMPage";
import HomePage from "./pages_07-07-2026/EmployeePage_17-07-2026/HomePage";
import AddEmployee from "./pages_07-07-2026/EmployeePage_17-07-2026/AddEmployee";
import Greeting from "./conditionalrendendering_20-07-2026/Greeting";
import TernaryOperator from "./conditionalrendendering_20-07-2026/TernaryOperator";
import Logical from "./conditionalrendendering_20-07-2026/Logical";
import LogicalOr from "./conditionalrendendering_20-07-2026/LogicalOr";
import ElementVariables from "./conditionalrendendering_20-07-2026/ElementVariables";
import RealProblem from "./conditionalrendendering_20-07-2026/RealProblem";
import Switch from "./conditionalrendendering_20-07-2026/Switch";
import ShowHide from "./conditionalrendendering_20-07-2026/ShowHide";
import RoleBased from "./conditionalrendendering_20-07-2026/RoleBased";
import Authentication from "./conditionalrendendering_20-07-2026/Authentication";
import LoadingExample from "./conditionalrendendering_20-07-2026/LoadingExample";
import EmptyState from "./conditionalrendendering_20-07-2026/EmptyState";
import Dashboard from "./minitask_20-07-2026/Dashboard";
import DashboardSwitch from "./minitask_20-07-2026/DashboardSwitch";
import LoginLogout from "./minitask_20-07-2026/LoginLogout";
import WithoutDependency from "./components/useeffect_21-07-2026/WithoutDependency";
import EmptyArray from "./components/useeffect_21-07-2026/EmptyArray";
import SingleDependency from "./components/useeffect_21-07-2026/SingleDependency";
import MultipleDependency from "./components/useeffect_21-07-2026/MultipleDependency";
import FetchDataDependency from "./components/useeffect_21-07-2026/FetchDataDependency";
import Cleanup from "./components/useeffect_21-07-2026/Cleanup";
import TimeCleaner from "./components/useeffect_21-07-2026/TimeCleaner";
import EventListener from "./components/useeffect_21-07-2026/EventListener";
import ParentToggle from "./components/useeffect_21-07-2026/ParentToggle";
import FetchApi from "./components/useeffect_21-07-2026/FetchApi";
import FetchAsync from "./components/useeffect_21-07-2026/FetchAsync";
import AxiosGet from "./components/useeffect_21-07-2026/AxiosGet";
import LoadingEffect from "./components/useeffect_21-07-2026/LoadingEffect";
import ErrorHandlingEffect from "./components/useeffect_21-07-2026/ErrorHandlingEffect";
import RealExample from "./components/useeffect_21-07-2026/RealExample";
import Map from "./components/useeffect_21-07-2026/Map";
import FilterMap from "./components/useeffect_21-07-2026/FilterMap";
import NotesApp from "./components/useeffect_21-07-2026/NoteApp";
import DynamicForm from "./components/dynamicform_22-07-2026/DynamicForm";
import AddSkill from "./components/dynamicform_22-07-2026/AddSkill";
import RemoveSkill from "./components/dynamicform_22-07-2026/RemoveSkill";
import TextField from "./components/dynamicform_22-07-2026/TextField";
import TextArea from "./components/dynamicform_22-07-2026/TextArea";
import Dropdown from "./components/dynamicform_22-07-2026/Dropdown";
import RadioButtons from "./components/dynamicform_22-07-2026/RadioButtons";
import SingleCheckbox from "./components/dynamicform_22-07-2026/SingleCheckbox";
import MultipleCheckbox from "./components/dynamicform_22-07-2026/MultipleCheckbox";
import FileInput from "./components/dynamicform_22-07-2026/FileInput";
import FormExample from "./components/dynamicform_22-07-2026/FormExample";
import FormReal from "./components/dynamicform_22-07-2026/FormReal";
import FormErrors from "./components/dynamicform_22-07-2026/FormErrors";
import SingleHandler from "./components/dynamicform_22-07-2026/SingleHandler";
import RegistrationPage from "./components/dynamicform_22-07-2026/minipractice_22-07-2026/RegistrationPage";
import Hoc from "./pages_07-07-2026/hoc_23-07-2026/Hoc";
import Composition from "./components/hoc_23-07-2026/Composition";
import Counter from "./components/hoc_23-07-2026/Counter";
import AxiosHome from "./components/reactmemo_27-7-2026/AxiosHome";
import Parent from "./components/reactmemo_27-7-2026/Parent";
import ReactHome from "./components/reactmeme_27-07-2026/ReactHome";
import EmployeeHome from "./components/minitask_27-07-2026/EmployeeHome";
import Home from "./pages_07-07-2026/minitask_24-07-2026/Home";
import ReactFragment from "./components/reactfragments_28-07-2026/ReactFragment";
import ReactDetails from "./components/reactfragments_28-07-2026/ReactDetails";
import Message from "./components/reacthoc_28-07-2026/Message";
import AuthDashboard from "./components/reacthoc_28-07-2026/AuthDashboard";
import AppHoc from "./components/reacthoc_28-07-2026/AppHoc";
import ComponentComposition from "./components/reacthoc_28-07-2026/ComponentComposition";
import WithFragment from "./components/reactfragments_28-07-2026/WithFragment";
import Employee from "./components/customhook_28-07-2026/Employee";
import ContactForm from "./components/customhook_28-07-2026/ContactForm";
import WindowInfo from "./customhook_28-07-2026/WindowInfo";
import ThemeComponent from "./components/customhook_28-07-2026/ThemeComponent";
import Project from "./components/miniproject_28-07-2026/Project";
import NormalComponent from "./components/purecomponent_29-07-2026/NormalComponent";
import PureComp from "./components/purecomponent_29-07-2026/PureCompo";
import PureComponent from "./components/purecomponent_29-07-2026/PureComponent";
import PureEmployee from "./components/purecomponent_29-07-2026/PureEmployee";
import ChildReact from "./components/Reactmemo_29-07-2026/ChildReact";
import WithoutMemo from "./components/usememo_29-07-2026/WithoutMemo";
import WithuseMemo from "./components/usememo_29-07-2026/WithuseMemo";
import UseCallback from "./components/callback_29-07-2026/UseCallback";
import Miniproject from "./components/miniproject_29-07-2026/Miniproject";
import ReactModal from "./components/reactportals_30-07-2026/ReactModal";
import EventFunction from "./components/eventbinding_30-07-2026/EventFunction";
import InlineEvent from "./components/eventbinding_30-07-2026/InlineEvent";
import PassParameter from "./components/eventbinding_30-07-2026/PassParameter";
import MultipleParameter from "./components/eventbinding_30-07-2026/MultipleParameter";
import ClickEvent from "./components/eventbinding_30-07-2026/ClickEvent";
import ChangeEvent from "./components/eventbinding_30-07-2026/ChangeEvent";
import SubmitEvent from "./components/eventbinding_30-07-2026/SubmitEvent";
import FocusEvent from "./components/eventbinding_30-07-2026/FocusEvent";
import BlurEvent from "./components/eventbinding_30-07-2026/BlurEvent";
import ClassBinding from "./components/eventbinding_30-07-2026/ClassBinding";
import Minitask from "./components/minitask_30-07-2026/Minitask";





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
                 <Route path="studentpage"element={<StudentMPage/>}/>
                 <Route path="homepage"element={<HomePage/>}/>
                 <Route path="addEmployee"element={<AddEmployee/>}/>
 <Route path="greeting"element={<Greeting/>}/>
  <Route path="TernaryOperator"element={<TernaryOperator/>}/>
  <Route path="Logical"element={<Logical/>}/>
  <Route path="LogicalOr"element={<LogicalOr/>}/>
  <Route path="ElementVariables"element={<ElementVariables/>}/>
  <Route path="RealProblem"element={<RealProblem/>}/>
  <Route path="Switch"element={<Switch/>}/>
  <Route path="ShowHide"element={<ShowHide/>}/>
  <Route path="RoleBased"element={<RoleBased/>}/>
  <Route path="Authentication"element={<Authentication/>}/>
  <Route path="LoadingExample"element={<LoadingExample/>}/>
  <Route path="EmptyState"element={<EmptyState/>}/>
  <Route path="Dashboard"element={<Dashboard/>}/>
  <Route path="DashboardSwitch"element={<DashboardSwitch/>}/>
  <Route path="LoginLogout"element={<LoginLogout/>}/>
  <Route path="WithoutDependency"element={<WithoutDependency/>}/>
  <Route path="EmptyArray"element={<EmptyArray/>}/>
  <Route path="SingleDependency"element={<SingleDependency/>}/>
  <Route path="MultipleDependency"element={<MultipleDependency/>}/>
  <Route path="FetchDataDependency"element={<FetchDataDependency/>}/>
  <Route path="Cleanup"element={<Cleanup/>}/>
  <Route path="TimeCleaner"element={<TimeCleaner/>}/>
  <Route path="EventListener"element={<EventListener/>}/>
  <Route path="ParentToggle"element={<ParentToggle/>}/>
  <Route path="FetchApi"element={<FetchApi/>}/>
  <Route path="FetchAsync"element={<FetchAsync/>}/>
  <Route path="AxiosGet"element={<AxiosGet/>}/>
  <Route path="LoadingEffect"element={<LoadingEffect/>}/>
  <Route path="ErrorHandlingEffect"element={<ErrorHandlingEffect/>}/>
  <Route path="RealExample"element={<RealExample/>}/>
  <Route path="Map"element={<Map/>}/>
  <Route path="FilterMap"element={<FilterMap/>}/>
      <Route path="NoteApp"element={<NotesApp/>}/>
 <Route path="DynamicForm"element={<DynamicForm/>}/>
 <Route path="AddSkill"element={<AddSkill/>}/>
 <Route path="RemoveSkill"element={<RemoveSkill/>}/>
  <Route path="TextField"element={<TextField/>}/>
  <Route path="TextArea"element={<TextArea/>}/>
  <Route path="Dropdown"element={<Dropdown/>}/>
  <Route path="RadioButtons"element={<RadioButtons/>}/>
    <Route path="SingleCheckbox"element={<SingleCheckbox/>}/>
        <Route path="MultipleCheckbox"element={<MultipleCheckbox/>}/>
 <Route path="FileInput"element={<FileInput/>}/>
 <Route path="FormExample"element={<FormExample/>}/>
 <Route path="FormReal"element={<FormReal/>}/>
 <Route path="FormErrors"element={<FormErrors/>}/>
 <Route path="SingleHandler"element={<SingleHandler/>}/>
 <Route path="RegistrationPage"element={<RegistrationPage/>}/>
  <Route path="Composition"element={<Composition/>}/>
  <Route path="Counter"element={<Counter/>}/>
  <Route path="AxiosHome"element={<AxiosHome/>}/>
  <Route path="Parent"element={<Parent/>}/>
  <Route path="ReactHome"element={<ReactHome/>}/>
  <Route path="EmployeeHome"element={<EmployeeHome/>}/>
  <Route path="Home"element={<Home/>}/>
  <Route path="ReactFragment"element={<ReactFragment/>}/>
  <Route path="ReactDetails"element={<ReactDetails/>}/>
  <Route path="Message"element={<Message/>}/>
  <Route path="AuthDashboard"element={<AuthDashboard/>}/>
  <Route path="AppHoc"element={<AppHoc/>}/>
  <Route path="ComponentComposition"element={<ComponentComposition/>}/>
  <Route path="WithFragment"element={<WithFragment/>}/>
  <Route path="Employee"element={<Employee/>}/>
  <Route path="ContactForm"element={<ContactForm/>}/>
  <Route path="WindowInfo"element={<WindowInfo/>}/>
  <Route path="ThemeComponent"element={<ThemeComponent/>}/>
  <Route path="Project"element={<Project/>}/>
  <Route path="NormalComponent"element={<NormalComponent/>}/>
  <Route path="PureComp"element={<PureComp/>}/>
  <Route path="PureComponent"element={<PureComponent/>}/>
  <Route path="PureEmployee"element={<PureEmployee/>}/>
  <Route path="ChildReact"element={<ChildReact/>}/>
  <Route path="WithoutMemo"element={<WithoutMemo/>}/>
  <Route path="WithuseMemo"element={<WithuseMemo/>}/>
  <Route path="Miniproject"element={<Miniproject/>}/>
  <Route path="ReactModal"element={<ReactModal/>}/>
  <Route path="EventFunction"element={<EventFunction/>}/>
  <Route path="InlineEvent"element={<InlineEvent/>}/>
  <Route path="PassParameter"element={<PassParameter/>}/>
  <Route path="MultipleParameter"element={<MultipleParameter/>}/>
  <Route path="ClickEvent"element={<ClickEvent/>}/>
  <Route path="ChangeEvent"element={<ChangeEvent/>}/>
  <Route path="SubmitEvent"element={<SubmitEvent/>}/>
  <Route path="FocusEvent"element={<FocusEvent/>}/>
  <Route path="BlurEvent"element={<BlurEvent/>}/>
  <Route path="ClassBinding"element={<ClassBinding/>}/>
  <Route path="Minitask"element={<Minitask/>}/>






            </Routes>
        </BrowserRouter>
    );
};

export default App;

