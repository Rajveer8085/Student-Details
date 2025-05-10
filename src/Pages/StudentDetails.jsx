// src/pages/StudentDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockStudents } from "../MockData";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = mockStudents.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="container mt-5">
        <h3>Student not found</h3>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          ⬅️ Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Student Details</h2>
    <ul className="list-group mt-4">
      <li className="list-group-item"><strong>Name:</strong> {student.name}</li>
      <li className="list-group-item"><strong>Email:</strong> {student.email}</li>
      <li className="list-group-item"><strong>Course:</strong> {student.course}</li>
    </ul>
    <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>
      ⬅️ Back
    </button>
  </div>
  
  );
}

export default StudentDetails;
