import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper} id="header">
      <nav id="nav">
        <ul className={styles.navList} id="navList">
          <li id="navListItem1">Home</li>
          <li id="navListItem2">About</li>
          <li id="navListItem3">Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
