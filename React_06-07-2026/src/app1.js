// Student Object
const student = {
    id: 101,
    name: "Mounika",
    course: "React JS",
    marks: [85, 90, 88]
};

// Arrow Function
const calculateAverage = (...marks) => {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
};

const average = calculateAverage(...student.marks);

// Template Literal
const message = `
Student Report

ID : ${student.id}
Name : ${student.name}
Course : ${student.course}
Average : ${average}
`;

console.log(message);

// Display on Browser
document.body.innerHTML = `
<h1>Student Report</h1>
<p><strong>ID:</strong> ${student.id}</p>
<p><strong>Name:</strong> ${student.name}</p>
<p><strong>Course:</strong> ${student.course}</p>
<p><strong>Average:</strong> ${average}</p>
`;