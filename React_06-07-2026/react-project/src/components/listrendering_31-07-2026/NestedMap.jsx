function NestedMap() {

  const departments = [
    {
      id: 1,
      name: "IT",
      employees: ["John", "David"]
    },
    {
      id: 2,
      name: "HR",
      employees: ["Sara", "Mike"]
    }
  ];

  return (

    <div>

      {departments.map(department => (

        <div key={department.id}>

          <h2>{department.name}</h2>

          <ul>

            {department.employees.map((employee, index) => (

              <li key={index}>
                {employee}
              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>

  );

}

export default NestedMap;