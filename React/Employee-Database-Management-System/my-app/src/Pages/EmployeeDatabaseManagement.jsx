import React from "react";
import { useState } from "react";

const EmployeeDatabaseManagement = () => {

    const details = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 28,
    "designation": "Frontend Developer",
    "department": "Engineering",
    "email": "john.doe@example.com",
    "phone": "+91-9876543210",
    "address": "Bangalore, India",
    "joiningDate": "2021-06-15",
    "salary": 1200000
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 32,
    "designation": "UI/UX Designer",
    "department": "Design",
    "email": "jane.smith@example.com",
    "phone": "+91-9123456780",
    "address": "Hyderabad, India",
    "joiningDate": "2020-04-01",
    "salary": 1000000
  },
  {
    "id": 3,
    "name": "Rajesh Kumar",
    "age": 35,
    "designation": "Backend Engineer",
    "department": "Engineering",
    "email": "rajesh.kumar@example.com",
    "phone": "+91-9988776655",
    "address": "Pune, India",
    "joiningDate": "2019-09-20",
    "salary": 1500000
  },
  {
    "id": 4,
    "name": "Aditi Sharma",
    "age": 29,
    "designation": "HR Manager",
    "department": "Human Resources",
    "email": "aditi.sharma@example.com",
    "phone": "+91-9090909090",
    "address": "Delhi, India",
    "joiningDate": "2018-12-11",
    "salary": 900000
  },
  {
    "id": 5,
    "name": "Michael Lee",
    "age": 40,
    "designation": "Project Manager",
    "department": "Management",
    "email": "michael.lee@example.com",
    "phone": "+91-8080808080",
    "address": "Mumbai, India",
    "joiningDate": "2017-07-05",
    "salary": 1800000
  }
]

const [selectedEmployee, setSelectedEmployee] = useState();
const [updatedDetails, setUpdatedDetails] = useState(details);
const [employeeFormOpen, setEmployeeFormOpen] = useState(false)
const [newEmployee, setNewEmployee] = useState({name:"", age:"", designation:"", department:"", email:"", phone:"", address:"", joiningDate:"", salary:""})

const EmployeeSelection = (e) =>{
    setSelectedEmployee(e);
    console.log(e);
}

const deleteEmployee = (id) =>{
    
    console.log(id);
    setUpdatedDetails(updatedDetails.filter((item) => item.id !== id));
    console.log(updatedDetails);
    
}

const addEmployee = (e) =>{
    e.preventDefault();
    const newId = updatedDetails.length > 0 ? updatedDetails[updatedDetails.length - 1].id + 1 : 1;
    setUpdatedDetails([...updatedDetails, {...newEmployee, id: newId}]);
    setNewEmployee({name:"", age:"", designation:"", department:"", email:"", phone:"", address:"", joiningDate:"", salary:""});
    setEmployeeFormOpen(false);
}

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Employee Database Management</h1>
      <button className="bg-blue-500 text-white px-4 py-1 rounded m-4 mx-auto block"
      onClick={() => setEmployeeFormOpen(!employeeFormOpen)}
      >
        Add Employee +
      </button>
      {employeeFormOpen ?
      (<div className="border-2 p-4 m-4 w-1/2 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <form className="flex flex-col gap-2"
        onSubmit={addEmployee}>
            <input type="text" value={newEmployee.name} onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})} placeholder="Name" className="border p-2 rounded"/>
            <input type="number" value={newEmployee.age} onChange={(e) => setNewEmployee({...newEmployee, age: e.target.value})} placeholder="Age" className="border p-2 rounded"/>
            <input type="text" value={newEmployee.designation} onChange={(e) => setNewEmployee({...newEmployee, designation: e.target.value})} placeholder="Designation" className="border p-2 rounded"/>
            <input type="text" value={newEmployee.department} onChange={(e) => setNewEmployee({...newEmployee, department: e.target.value})} placeholder="Department" className="border p-2 rounded"/>
            <input type="email" value={newEmployee.email} onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})} placeholder="Email" className="border p-2 rounded"/>
            <input type="text" value={newEmployee.phone} onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})} placeholder="Phone" className="border p-2 rounded"/>
            <input type="text" value={newEmployee.address} onChange={(e) => setNewEmployee({...newEmployee, address: e.target.value})} placeholder="Address" className="border p-2 rounded"/>
            <input type="date" value={newEmployee.joiningDate} onChange={(e) => setNewEmployee({...newEmployee, joiningDate: e.target.value})} className="border p-2 rounded"/>
            <input type="number" value={newEmployee.salary} onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})} placeholder="Salary" className="border p-2 rounded"/>
            <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded mt-2 w-1/4">Add Employee</button>
            </form>
        </div>) :
           <div className="flex flex-wrap gap-10 items-center justify-center">
            <div>
            {updatedDetails.map((item)=>(
                <li key={item.id}
                onClick={() => EmployeeSelection(item)}
                className="list-none border-2 p-2 m-2 cursor-pointer flex justify-between w-60">
                    <div>{item.name}</div>
                    <div>
                    <button onClick={(e) =>{
                        e.stopPropagation();
                        deleteEmployee(item.id);
                    }}>🗑</button>
                    </div>
                </li>
            ))
            }
            </div>
            <div>
                <div className="flex flex-col">
                <div>Employee Details</div>
                <div>{selectedEmployee && (
                <div>
                    <p>Name: {selectedEmployee.name}</p>
                    <p>Age: {selectedEmployee.age}</p>
                    <p>Designation: {selectedEmployee.designation}</p>
                    <p>Department: {selectedEmployee.department}</p>
                    <p>Email: {selectedEmployee.email}</p>
                    <p>Phone: {selectedEmployee.phone}</p>
                    <p>Address: {selectedEmployee.address}</p>
                    <p>Joining Date: {selectedEmployee.joiningDate}</p>
                    <p>Salary: {selectedEmployee.salary}</p>
                </div>
                )}</div>
                </div>
            </div>
        </div>}
      {/* Add your components and logic here */}
   
     
    </div>
  );
};

export default EmployeeDatabaseManagement;
