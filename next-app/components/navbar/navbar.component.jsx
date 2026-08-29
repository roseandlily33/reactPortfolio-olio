"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

const leftLinks = [
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
];

const rightLinks = [
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const allLinks = [...leftLinks, ...rightLinks];

const resumeUrl =
  "https://1drv.ms/w/c/9eb0d1a969eb7134/IQAJviBLZ8IOTotteZbovW6NASqDormKzXI4l4-6i-AVk-Y?e=e4QbMa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        {/* =================================================
            DESKTOP LEFT
        ================================================== */}

        <nav
          className={`${styles.desktopNav} ${styles.leftNav}`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList}>
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* =================================================
            CENTER BRAND
        ================================================== */}

        <div className={styles.brandArea}>
          <span className={styles.brandMark} aria-hidden="true">
            VB
          </span>

          <Link
            href="/"
            className={styles.brand}
            aria-label="Victoria Benoit — Home"
          >
            Victoria Benoit
          </Link>
        </div>

        {/* =================================================
            DESKTOP RIGHT
        ================================================== */}

        <nav
          className={`${styles.desktopNav} ${styles.rightNav}`}
          aria-label="Secondary navigation"
        >
          <ul className={styles.navList}>
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href={resumeUrl}
                className={styles.navLink}
                target="_blank"
                rel="noopener"
              >
                Resume
                <span className={styles.externalIcon} aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* =================================================
            MOBILE BRAND
        ================================================== */}

        <Link
          href="/"
          className={styles.mobileBrand}
          aria-label="Victoria Benoit — Home"
          onClick={() => setMenuOpen(false)}
        >
          Victoria Benoit
        </Link>

        {/* =================================================
            MOBILE BUTTON
        ================================================== */}

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      {/* ===================================================
          MOBILE MENU
      ==================================================== */}

      <div
        id="mobile-navigation"
        className={`${styles.mobileNav} ${
          menuOpen ? styles.mobileNavOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileNavInner}>
          <div className={styles.mobileMeta}>
            <span>Navigation</span>
            <span>Victoria Benoit</span>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              {allLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <span className={styles.mobileNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{link.label}</span>

                    <span className={styles.mobileArrow} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href={resumeUrl}
                  className={styles.mobileNavLink}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className={styles.mobileNumber}>06</span>

                  <span>Resume</span>

                  <span className={styles.mobileArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.mobileMark} aria-hidden="true">
            VB
          </div>
        </div>
      </div>
    </header>
  );
}
