function Student(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default Student;