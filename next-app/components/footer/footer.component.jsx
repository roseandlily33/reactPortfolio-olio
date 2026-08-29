import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaMark} aria-hidden="true">
            ✦
          </div>

          <div className={styles.ctaContent}>
            <p className={styles.eyebrow}>Have a project in mind?</p>

            <h2 className={styles.ctaTitle}>
              Let&apos;s build something
              <span className={styles.ctaItalic}> meaningful.</span>
            </h2>
          </div>

          <div className={styles.ctaAction}>
            <p className={styles.ctaText}>
              Have a project in mind or just want to say hi? I&apos;d love to
              hear from you.
            </p>

            <Link href="/contact" className={styles.ctaLink}>
              Get in touch
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.name}>
            Victoria Benoit
          </Link>

          <nav className={styles.socialNav} aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/roseandlily33"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="mailto:victoria@vrbwebdesignanddev.com"
              className={styles.socialLink}
            >
              Email
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Victoria Benoit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
