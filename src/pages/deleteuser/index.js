import { useState } from "react";
import axios from "axios";
import styles from "@/style/deleteUser.module.css"; // Import the CSS module

export default function DeleteUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete")) {
      const response = await axios.delete(
        "https://www.melivecode.com/api/users/delete",
        {
          data: { id: userId },
        }
      );
      if (response.status === 200) {
        setMessage(`Success: ${response.data.message}`);
      }
    } else {
      alert("cancel");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Delete User</h1>
        <form onSubmit={handleDelete} className={styles.form}>
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
          <button type="submit" className={styles.button}>
            Delete User
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
