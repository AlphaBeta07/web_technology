import { useState } from "react";

function AddStudent({ students, setStudents }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = { name, age, course };
    setStudents([...students, newStudent]);

    alert("Student added");

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Age" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Course" 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;