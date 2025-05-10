// src/App.js
import React, { useEffect, useState } from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import AddStudent from './Pages/AddStudent';
import StudentDetails from './Pages/StudentDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Authentication/Firebase';
import { mockStudents } from './MockData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const [students, setStudents] = useState(mockStudents); // Initial state with mock data

  // Function to add new student
  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage onLogin={setUser} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard students={students} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <ProtectedRoute user={user}>
              <AddStudent addStudent={addStudent} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/:id"
          element={
            <ProtectedRoute user={user}>
              <StudentDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
