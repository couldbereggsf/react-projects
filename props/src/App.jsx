// App.jsx
import Student from "./Student";

function App() {
  // 1. Array of student data objects
  const students = [
    { id: 1, name: "John Doe", age: 20, isStudent: true },
    { id: 2, name: "Jane Smith", age: 22, isStudent: false },
    { id: 3, name: "Alex Mwangi", age: 19, isStudent: true },
    { id: 4, name: "Maria Chen", age: 21, isStudent: true }
  ];

  return (
    <div className="app-container">
      {/* 2. Loop through the array and render a Student component for each object */}
      {students.map((student) => (
        <Student
          key={student.id} // Essential for React performance
          name={student.name}
          age={student.age}
          isStudent={student.isStudent}
        />
      ))}
    </div>
  );
}

export default App;