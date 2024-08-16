import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/style/user.module.css"; // Corrected import statement
import Navbar from "@/components/navbar/Navbar";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://www.melivecode.com/api/users").then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>User List</h1>
          {users.length > 0 && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>Avatar</th>
                  <th className={styles.th}>First Name</th>
                  <th className={styles.th}>Last Name</th>
                  <th className={styles.th}>Username</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className={styles.td}>{user.id}</td>
                    <td className={styles.td}>
                      <img
                        src={user.avatar}
                        alt={user.fname}
                        className={styles.avatar}
                      />
                    </td>
                    <td className={styles.td}>{user.fname}</td>
                    <td className={styles.td}>{user.lname}</td>
                    <td className={styles.td}>{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
