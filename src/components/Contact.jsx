import React from "react";


function Contact() {
  const data = [
    { name: "Naveen", age: 19, gender: "Male" },
    { name: "Neelam", age: 25, gender: "Female" },
    { name: "Umesh", age: 18, gender: "Male" },
    { name: "Jaspal", age: 25, gender: "Other" },
  ];
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val) => {
          return (
            <tr key={val.id}>
              <td
                className={`${val.name === "Anom"
                  ? "text-info bg-success fs-4"
                  : `${val.name === "Subham"
                    ? "text-warning bg-danger fs-4"
                    : "text-danger bg-info fs-3"
                  }`
                  }`}
              >
                {val.name}
              </td>
              <td
                className={`${val.age === 18
                  ? "text-info bg-success fs-4"
                  : `${val.age === 25
                    ? "text-warning bg-danger fs-4"
                    : "text-danger bg-info fs-3"
                  }`
                  }`}
              >
                {val.age}
              </td>
              <td
                className={`${val.gender === "Male"
                  ? "text-info bg-success fs-4"
                  : `${val.gender === "Other"
                    ? "text-warning bg-danger fs-4"
                    : "text-danger bg-info fs-3"
                  }`
                  }`}
              >
                {val.gender}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Contact;
