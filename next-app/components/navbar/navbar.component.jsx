import Link from "next/link";
import styles from "./navbar.module.css";

const navLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          Victoria Benoit
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/Victoria-Benoit-Resume.pdf"
          className={styles.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
