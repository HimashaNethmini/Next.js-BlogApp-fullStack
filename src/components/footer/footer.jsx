import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogApp</div>
      <div className={styles.text}>
        Blogapp © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
