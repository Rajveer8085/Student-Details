
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css"; 

function AddStudent({ addStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.course.trim()) newErrors.course = "Course is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Create new student object
    const newStudent = { ...formData, id: Date.now() }; // Unique ID based on current time
    addStudent(newStudent); // Add the new student to parent component's state

    setFormData({ name: "", email: "", course: "" }); // Clear form after adding

    alert("Student added successfully!");
    navigate("/dashboard"); // Navigate back to dashboard
  };

  return (
    <div className="container mt-5">
      <div className="form-card p-4 shadow-lg rounded-lg">
        <h2 className="text-center">Add New Student</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label>Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name && "is-invalid"}`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <label>Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-4">
            <label>Course:</label>
            <input
              type="text"
              className={`form-control ${errors.course && "is-invalid"}`}
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            />
            {errors.course && <div className="invalid-feedback">{errors.course}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
