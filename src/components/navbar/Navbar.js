import Link from "next/link";
import styles from "@/components/navbar/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyWebsite</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/users">users</Link>
        </li>
        <li>
          <Link href="/createuser">CreateUser</Link>
        </li>
        <li>
          <Link href="/updateuser">UpdateUser</Link>
        </li>
        <li>
          <Link href="/deleteuser">DeleteUser</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
