import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/duhayildirim" target="_blank">
        Duha Yildirim
      </Link>
    </footer>
  );
}

export default Footer ;
