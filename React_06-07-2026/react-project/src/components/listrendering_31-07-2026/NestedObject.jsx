const companies = [
  {
    id:1,
    company:"Google",
    employees:[
      {id:1,name:"John"},
      {id:2,name:"Sara"}
    ]
  },
  {
    id:2,
    company:"Microsoft",
    employees:[
      {id:3,name:"David"},
      {id:4,name:"Alex"}
    ]
  }
];
function NestedObject() {
  return (
    <>
      {companies.map(company => (
        <div key={company.id}>
          <h2>{company.company}</h2>

          {company.employees.map(employee => (
            <p key={employee.id}>
              {employee.name}
            </p>
          ))}

        </div>
      ))}
    </>
  );
}
export default NestedObject;