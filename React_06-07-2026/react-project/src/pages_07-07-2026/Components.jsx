import FunctionalComponent from "../components 07_07_2026/FunctionalComponent";
import ClassComponent from "../components 07_07_2026/ClassComponent";
import Header from "../components 07_07_2026/Header";
import Home from "../components 07_07_2026/Home";
import Footer from "../components 07_07_2026/Footer";

function Components() {
    return (
        <>
        <Header/>
        <Home/>
            <FunctionalComponent />
            <ClassComponent />
            <Footer />
        </>
    );
}

export default Components;