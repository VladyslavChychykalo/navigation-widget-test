import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper} id="header">
      <nav id="nav">
        <ul className={styles.navList} id="navList">
          <li id="navListItem">Home</li>
          <li id="navListItem">About</li>
          <li id="navListItem">Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
