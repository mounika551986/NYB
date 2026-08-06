import "./style.css";

import { student } from "./student";
import { marks } from "./marks";
import { calculateTotal } from "./calculate";

const total = calculateTotal(marks);

document.body.innerHTML = `
<div class="card">
    <h1>Student Report</h1>

    <h3>Name : ${student.name}</h3>

    <h3>Course : ${student.course}</h3>

    <h3>Roll No : ${student.rollNo}</h3>

    <hr>

    <p>HTML : ${marks.html}</p>

    <p>CSS : ${marks.css}</p>

    <p>JavaScript : ${marks.javascript}</p>

    <h2>Total Marks : ${total}</h2>

</div>
`;
