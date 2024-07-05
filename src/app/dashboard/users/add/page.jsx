"use client";

import styles from "@/app/ui/dashboard/users/addUser/addUser..module.css";
import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    post: "",
    employeeId: "",
    doj: "",
    team: "",
    image: "", // Add image to the state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/addEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle successful submission
      alert("Employee added successfully!");
    } else {
      // Handle error
      alert("Error adding employee");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="post"
          placeholder="Post"
          value={formData.post}
          onChange={handleChange}
        />
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />
        <input
          type="date"
          name="doj"
          placeholder="DOJ"
          value={formData.doj}
          onChange={handleChange}
        />
        <textarea
          name="team"
          placeholder="Team"
          value={formData.team}
          onChange={handleChange}
        ></textarea>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}