// import React, { useState } from "react";

// const EmployeeManagement = ()=>{

//     const initialEmployees = [
//   { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Developer" },
//   { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Designer" },
//   { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Manager" },
// ];

// const [list , setList] = useState(initialEmployees)

// const [selected , setSelected] = useState({})

// const del = (id)=>{
//     setList(list.filter((data)=>(data.id!==id)))
// }

// const employeeData = (id)=>{
//     setSelected(list.find((data)=>(data.id===id)))
// }

//     return(
//         <div>
//             <h1>Employee Management System</h1>

//             <div className="flex flex-row">
//                 <div>
//                     {
//                     list.length>0 &&
//                     list.map((data)=>(
//                         <li key={data.id}>
//                             <div className="flex flex-row">
//                             <span
//                             onClick={()=>employeeData(data.id)}>
//                                 {data.name} 
//                             </span>
//                             <span
//                             onClick={()=>del(data.id)}>
//                                 X
//                             </span>
//                             </div>
                            
//                         </li>
//                     ))
//                     }
//                 </div>
//                 <div>
//                     <li>{selected.id}</li>
//                     <li>{selected.name}</li>
//                     <li>{selected.email}</li>
//                     <li>{selected.role}</li>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EmployeeManagement
















import React, { useState } from "react";

const EmployeeManagement = () => {
  const initialEmployees = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Developer" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Designer" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Manager" },
  ];

  const [list, setList] = useState(initialEmployees);
  const [selected, setSelected] = useState(null);
  const [modalOpen , setModalOpen] = useState(false)
//  const [newId , setNewId] = useState(0);
  const [newName , setNewName] = useState("");
  const [newEmail , setNewEmail] = useState("");
  const [newRole , setNewRole] = useState("");
 
  const newEmployee = (e)=>{
    e.preventDefault();
    const newOne = {
        // id: newId,
        id: list.length ? list[list.length - 1].id + 1 : 1,
        name: newName,
        email: newEmail,
        role: newRole
    }
    setList([...list , newOne]);
    // setNewId(0)
    setNewName("")
    setNewEmail("")
    setNewRole("")
    setModalOpen(false)
  }

  const del = (id) => {
    setList(list.filter((data) => data.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const employeeData = (id) => {
    setSelected(list.find((data) => data.id === id));
  };

  return (
    <div>
       

        {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
          <form
            onSubmit={newEmployee}
            className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-700">Add Employee</h2>

            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Email"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              placeholder="Role"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              required
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}

    
    <div className={modalOpen ? "backdrop-blur bg-white/30 z-1": "p-6 bg-gray-100 min-h-screen"}>
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Employee Management System
      </h1>
        <button 
        onClick={()=>(setModalOpen(!modalOpen))}>
            Add Employee
        </button>
       
      <div className="flex flex-row gap-8">
        {/* Left Panel */}
        <div className="w-1/3 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Employees</h2>
          <ul className="space-y-3">
            {list.length > 0 ? (
              list.map((data) => (
                <li
                  key={data.id}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-blue-50 transition"
                >
                  <span
                    className="cursor-pointer text-blue-600 font-medium"
                    onClick={() => employeeData(data.id)}
                  >
                    {data.name}
                  </span>
                  <button
                    onClick={() => del(data.id)}
                    className="text-red-500 font-bold hover:text-red-700"
                  >
                    ✕
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No employees available</p>
            )}
          </ul>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Details</h2>
          {selected ? (
            <div className="space-y-2 text-gray-800">
              <p>
                <span className="font-semibold">ID:</span> {selected.id}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {selected.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {selected.email}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {selected.role}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Select an employee to view details</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeeManagement;
