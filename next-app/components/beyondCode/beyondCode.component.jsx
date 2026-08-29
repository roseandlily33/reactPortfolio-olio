import Link from 'next/link';
import styles from './beyondCode.module.css';

const features = [
  {
    number: '01',
    label: 'Always Learning',
    title: 'Curiosity is part of the process.',
    description:
      'I keep building on my skills across development, UX/UI, accessibility, SEO and the constantly changing world of the web.',
    detail: 'Development / UX / SEO',
  },
  {
    number: '02',
    label: 'Accessibility',
    title: 'Good design should work for more people.',
    description:
      'Accessibility is something I consider throughout design and development, from structure and interaction to responsive behaviour.',
    detail: 'Inclusive by design',
  },
  {
    number: '03',
    label: 'The Details',
    title: 'Tiny decisions add up.',
    description:
      'Typography, spacing, performance, hierarchy and interaction details are often what turn something functional into something that feels finished.',
    detail: 'Design / Systems / Polish',
  },
];

export default function BeyondCode() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topLine}>
          <p>Beyond the Code</p>
          <span>Notes from the desk</span>
        </div>

        <div className={styles.headingGrid}>
          <div>
            <p className={styles.eyebrow}>A few more things</p>

            <h2 className={styles.title}>
              The work is more than
              <span> writing code.</span>
            </h2>
          </div>

          <div className={styles.headingAside}>
            <span className={styles.star} aria-hidden="true">
              ✦
            </span>

            <p>
              The best digital experiences come from paying attention to the
              pieces around the code too.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.feature} key={feature.number}>
              <div className={styles.featureTop}>
                <span className={styles.number}>{feature.number}</span>

                <span className={styles.label}>{feature.label}</span>
              </div>

              <h3>{feature.title}</h3>

              <p className={styles.description}>
                {feature.description}
              </p>

              <p className={styles.detail}>
                {feature.detail}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.closing}>
          <div className={styles.closingText}>
            <p className={styles.closingLabel}>
              Want the longer version?
            </p>

            <p className={styles.closingStatement}>
              There&apos;s more to the story.
            </p>
          </div>

          <Link href="/about" className={styles.link}>
            About me
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}