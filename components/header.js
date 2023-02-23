import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Header.module.scss";

import InstagramLogo from "../public/instagram.svg";
import Menubar from "../public/burger-menu.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <Image
            alt="Company logo"
            src="logo-green.svg"
            width="120"
            height="60"
          ></Image>
        </a>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/chi-siamo">Chi siamo</Link>
            </li>
            <li>
              <a href="#">Eventi</a>
            </li>
            <li>
              <a href="#">Gadget</a>
            </li>
            <li>
              <a href="#">Use Cases</a>
            </li>
            <li>
              <a href="#">Contatti</a>
            </li>
          </ul>
          <div className={styles.menubar}>
            <Menubar></Menubar>
          </div>
        </nav>
        <a
          href="https://www.instagram.com/marina.brognoli/"
          target="_blank"
          className={styles.instagram}
          rel="noopener noreferrer"
        >
          <InstagramLogo></InstagramLogo>
        </a>
      </div>
    </header>
  );
}
