import Student from "../../components/propstate_08_07_2026/Counter";
import Header from "../../components/propstate_08_07_2026/Header";
import Counter from "../../components/propstate_08_07_2026/Student";

function PropsStatePage() {
    return (
        <>
        <Header/>
        <Student
        name="Myra"
        course="Computer Science"
        />
        <Counter/>
        </>
    );
}
export default PropsStatePage;
