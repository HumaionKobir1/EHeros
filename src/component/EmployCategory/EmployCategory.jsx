
import React, { useState, useEffect } from 'react';

import initialEmployees from "../../../public/employees.json"

const EmployCategory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showAllEmployees, setShowAllEmployees] = useState(false);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const limit = showAllEmployees ? initialEmployees.length : 6;
    const filtered = initialEmployees.slice(0, limit).filter(employee =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
      (selectedDepartment === 'all' || employee.department.toLowerCase() === selectedDepartment.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, selectedDepartment, showAllEmployees]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />

      {/* Filter Options */}
      <label htmlFor="departmentFilter" className="mx-2">Filter by Department:</label>
      <select
        id="departmentFilter"
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value="all">All Departments</option>
        <option value="IT">IT</option>
        <option value="SALES">SALES</option>
        <option value="FINANCE">FINACE</option>
        <option value="MARKETING">MARKETING</option>
        <option value="SUPPORT">SUPPORT</option>
]      </select>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="bg-white border border-gray-300 p-4 rounded-lg card relative overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={employee.image}
              alt={employee.name}
              className="w-full h-36 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{employee.position}</p>
            <p className="text-sm text-gray-600 mb-1"><em>Depertment: {employee.department}</em></p>
            <p className="text-sm text-blue-500">Contact: {employee.contact}</p>
          </div>
        ))}
      </div>

      {/* See All Employees Button */}
      {!showAllEmployees && initialEmployees.length > 6 && (
        <button
          onClick={() => setShowAllEmployees(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          See All Employees
        </button>
      )}
    </div>
  );
}

export default EmployCategory;
