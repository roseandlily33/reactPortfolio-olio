import Link from 'next/link';
import CertificateCard from './certificateCard.component';
import { certificates } from '../data/Certs.info';
import styles from './page.module.css';

export const metadata = {
  title: 'Web Development & UX/UI Certificates',

  description:
    'Professional certificates and continued learning across full-stack web development, UX/UI design, accessibility, SEO and digital strategy.',

  alternates: {
    canonical: '/certificates',
  },

  openGraph: {
    title: 'Certificates | Victoria Benoit',
    description:
      'Continued learning across web development, UX/UI design, accessibility, SEO and digital strategy.',
    url: '/certificates',
    type: 'website',
  },
};
export default function CertificatesPage() {
  const sortedCertificates = [...certificates].sort((a, b) => {
    if (a.important !== b.important) {
      return Number(b.important) - Number(a.important);
    }

    return Number(b.date) - Number(a.date);
  });

  const featuredCount = certificates.filter(
    (certificate) => certificate.important
  ).length;

  const providerCount = new Set(
    certificates.map((certificate) => certificate.provider)
  ).size;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>Archive / Credentials</p>

            <p>Continued Learning</p>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.headingWrap}>
              <p className={styles.eyebrow}>
                Certificates + Education
              </p>

              <h1 className={styles.title}>
                Always
                <span> learning.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.heroLead}>
                Development changes. Design changes. The web changes.
              </p>

              <p>
                This archive collects the courses, certifications and
                professional development that have helped shape how I approach
                development, UX/UI, accessibility, SEO and digital products.
              </p>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>{certificates.length}</span>
              <p>Credentials</p>
            </div>

            <div className={styles.stat}>
              <span>{featuredCount}</span>
              <p>Featured</p>
            </div>

            <div className={styles.stat}>
              <span>{providerCount}</span>
              <p>Learning Providers</p>
            </div>

            <div className={styles.stat}>
              <span>∞</span>
              <p>Still Learning</p>
            </div>
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.archive}>
        <div className={styles.inner}>
          <div className={styles.archiveHeader}>
            <div className={styles.archiveLabel}>
              <span>01</span>
              <p>Certificate Archive</p>
            </div>

            <p className={styles.archiveIntro}>
              A growing collection of technical, design and digital
              certifications.
            </p>
          </div>

          <div className={styles.grid}>
            {sortedCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.learning}>
        <div className={styles.inner}>
          <div className={styles.learningMeta}>
            <p>02 / Philosophy</p>
          </div>

          <div className={styles.learningGrid}>
            <div>
              <h2>
                The certificate isn&apos;t
                <span> the finish line.</span>
              </h2>
            </div>

            <div className={styles.learningCopy}>
              <p className={styles.learningLead}>
                I care more about what I can apply than what I can collect.
              </p>

              <p>
                Courses and certifications give me structured ways to explore
                new techniques, strengthen existing skills and stay current,
                but the real learning happens when those ideas make their way
                into actual products and projects.
              </p>

              <Link href="/work" className={styles.workLink}>
                See the work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className={styles.learningMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
    </main>
  );
}