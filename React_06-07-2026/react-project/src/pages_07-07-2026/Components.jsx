import FunctionalComponent from "../components/components 07_07_2026/FunctionalComponent";
import ClassComponent from "../components/components 07_07_2026/ClassComponent";
import Header from "../components/components 07_07_2026/Header";
import Home from "../components/components 07_07_2026/Home";
import Footer from "../components/components 07_07_2026/Footer";

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