import { useState } from "react";
import axios from "axios";
import styles from "@/style/createUser.module.css";
import Navbar from "@/components/navbar/Navbar";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://www.melivecode.com/api/users/create",
      formData
    );
    if (response.status === 200) {
      setMessage(`User created successfully: ${response.data.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Create User</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>First Name:</label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name:</label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Avatar URL:</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.button}>
              Create User
            </button>
          </form>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
}
