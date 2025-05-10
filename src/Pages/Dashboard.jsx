// src/pages/Dashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Custom CSS for styling

function Dashboard({ students }) {
  const [filter, setFilter] = useState("All");

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter((s) => s.course === filter);

  const uniqueCourses = ["All", ...new Set(students.map((s) => s.course))];

  return (
    <div className="container mt-5">
      <div className="card shadow-custom">
        <h2 className="text-center mb-4">Student Dashboard</h2>

        <div className="filter-container">
          <label className="filter-label">Filter by Course:</label>
          <select
            className="form-select custom-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {uniqueCourses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>
        </div>

        <Link to="/add-student" className="btn btn-primary add-btn mb-3">
          ➕ Add Student
        </Link>

        {students.length === 0 ? (
          <p className="text-center">Loading students...</p>
        ) : (
          <div className="table-container">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <Link
                        to={`/student/${student.id}`}
                        className="text-decoration-none text-link"
                      >
                        {student.name}
                      </Link>
                    </td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
