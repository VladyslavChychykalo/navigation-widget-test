import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <h3 id="footerTitle">Contact us</h3>
      <ul id="footerList">
        <li id="footerListItem1">Social media</li>
        <li id="footerListItem2">Social media</li>
        <li id="footerListItem3">Social media</li>
      </ul>
    </footer>
  );
};

export default Footer;
