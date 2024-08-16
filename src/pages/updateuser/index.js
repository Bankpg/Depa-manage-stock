import { useState } from "react";
import axios from "axios";
import styles from "@/style/updateUser.module.css"; // Import the CSS module
import Nav from "@/components/navbar/Navbar"; // Import the Nav component

export default function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      "https://www.melivecode.com/api/users/update",
      {
        id: userId,
        lname: newLastName,
      }
    );
    if (response.status === 200) {
      setMessage(`Success: ${response.data.message}`);
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Update User Last Name</h1>
          <form onSubmit={handleUpdate} className={styles.form}>
            <div className={styles.formGroup}>
              <label>User ID:</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className={styles.input}
                placeholder="Enter user ID"
              />
            </div>
            <div className={styles.formGroup}>
              <label>New Last Name:</label>
              <input
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                className={styles.input}
                placeholder="Enter new last name"
              />
            </div>
            <button type="submit" className={styles.button}>
              Update Last Name
            </button>
          </form>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
}
