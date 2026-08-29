import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Victoria Benoit for web development, UX/UI design and digital project inquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Victoria Benoit',
    description:
      'Get in touch with Victoria Benoit for web development, UX/UI design and digital project inquiries.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>Contact / Inquiries</p>
            <p>Professional Projects</p>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>
                Let&apos;s Work Together
              </p>

              <h1 className={styles.title}>
                Have something
                <span> in mind?</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.lead}>
                I handle professional project inquiries through VRB Web Design
                & Development.
              </p>

              <p>
                If you&apos;re looking for web design, full-stack development,
                UX/UI work or ongoing digital support, you can find project
                information and get in touch there.
              </p>
            </div>
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.handoff}>
        <div className={styles.inner}>
          <div className={styles.handoffTop}>
            <span>01</span>
            <p>Professional Inquiries</p>
          </div>

          <div className={styles.handoffGrid}>
            <div className={styles.handoffHeading}>
              <h2>
                Project inquiries live
                <span> over at VRB.</span>
              </h2>
            </div>

            <div className={styles.handoffCopy}>
              <p>
                I keep my personal portfolio focused on my work, experience and
                continued learning, while VRB is where I manage services,
                project details and client inquiries.
              </p>

              <p>
                That&apos;s the best place to start if you have a project in
                mind.
              </p>

              <a
                href="https://vrbwebdesignanddev.com/contact"
                className={styles.primaryLink}
                // target="_blank"
                rel="noopener"
              >
                Visit VRB Web Design and Development
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.secondary}>
        <div className={styles.inner}>
          <div className={styles.secondaryTop}>
            <span>02</span>
            <p>Elsewhere</p>
          </div>

          <div className={styles.secondaryGrid}>
            <div>
              <h2>
                Prefer a different
                <span> route?</span>
              </h2>
            </div>

            <div className={styles.links}>
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href="mailto:YOUR-EMAIL@example.com">
                <span>Email</span>
                <span aria-hidden="true">↗</span>
              </a>

              <Link href="/work">
                <span>View Work</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.inner}>
          <p className={styles.closingLabel}>
            Victoria Benoit / Portfolio
          </p>

          <h2>
            Thanks for
            <span> stopping by.</span>
          </h2>

          <div className={styles.closingMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
    </main>
  );
}