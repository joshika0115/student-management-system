
import React, { useState } from "react";
import "./App.css";

// Child Component
function Student({ id, name, email, department, year, cgpa }) {
  return (
    <tr>
      <td>{id}</td>
      <td className="student-name">{name}</td>
      <td>{email}</td>
      <td>{department}</td>
      <td>{year}</td>
      <td>
        <span className="cgpa">{cgpa}</span>
      </td>
    </tr>
  );
}

// Parent Component
function App() {

  const students = [
    { id: "BT001", name: "Joshika", email: "joshika@gmail.com", department: "Biotechnology", year: "2nd Year", cgpa: "8.9" },
    { id: "BT002", name: "Priya Sharma", email: "priya@gmail.com", department: "Biotechnology", year: "2nd Year", cgpa: "9.1" },
    { id: "BT003", name: "Rahul Kumar", email: "rahul@gmail.com", department: "Computer Science", year: "2nd Year", cgpa: "8.5" },
    { id: "BT004", name: "Sneha Reddy", email: "sneha@gmail.com", department: "Biotechnology", year: "3rd Year", cgpa: "9.2" },
    { id: "BT005", name: "Arjun Rao", email: "arjun@gmail.com", department: "Information Technology", year: "2nd Year", cgpa: "8.3" },
    { id: "BT006", name: "Ananya", email: "ananya@gmail.com", department: "Biotechnology", year: "1st Year", cgpa: "9.0" },
    { id: "BT007", name: "Karthik", email: "karthik@gmail.com", department: "Computer Science", year: "3rd Year", cgpa: "8.7" },
    { id: "BT008", name: "Divya", email: "divya@gmail.com", department: "Electronics", year: "2nd Year", cgpa: "8.8" },
    { id: "BT009", name: "Manoj", email: "manoj@gmail.com", department: "Biotechnology", year: "4th Year", cgpa: "8.4" },
    { id: "BT010", name: "Keerthi", email: "keerthi@gmail.com", department: "Mechanical", year: "1st Year", cgpa: "9.3" }
  ];

  // State for search input
  const [search, setSearch] = useState("");

  // Filter student records
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase()) ||
    student.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      <header className="header">
        <div>
          <h1>Student Management System</h1>
          <p>Academic Information Dashboard</p>
        </div>
        <div className="admin">ADMIN PANEL</div>
      </header>

      <main className="container">

        <section className="welcome">
          <h2>Student Records</h2>
          <p>View and search student academic information.</p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <h3>6</h3>
            <p>Departments</p>
          </div>

          <div className="stat-card">
            <h3>2026-27</h3>
            <p>Academic Year</p>
          </div>
        </section>

        <section className="table-section">

          <div className="table-heading">
            <h2>Student Details</h2>

            <input
              type="text"
              placeholder="Search by name, ID or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-box"
            />
          </div>

          <p className="result-count">
            Showing {filteredStudents.length} of {students.length} students
          </p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>CGPA</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <Student
                      key={student.id}
                      id={student.id}
                      name={student.name}
                      email={student.email}
                      department={student.department}
                      year={student.year}
                      cgpa={student.cgpa}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-results">
                      No student records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </section>

        <footer>
          Student Management System | Developed using React Props
        </footer>

      </main>
    </div>
  );
}

export default App;
