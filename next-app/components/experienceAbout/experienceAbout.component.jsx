import Link from 'next/link';
import styles from './experienceAbout.module.css';

const experience = [
  {
    year: '2026 — Present',
    role: 'Owner / Web Developer & Designer',
    company: 'Independent',
    description:
      'Designing and developing custom websites, digital products and brand experiences for businesses and organizations.',
  },
  {
    year: '2024 — Present',
    role: 'Full-Stack Developer & UX/UI Designer',
    company: 'Freelance',
    description:
      'Working across front-end development, full-stack applications, UX/UI design, accessibility and digital strategy.',
  },
  {
    year: 'Earlier Experience',
    role: 'Administrative & Technical Support',
    company: 'Operations',
    description:
      'Built a strong foundation in organization, documentation, client communication and systems-focused problem solving.',
  },
];

const toolkit = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'JavaScript',
  'Figma',
  'Git',
  'REST APIs',
  'Stripe',
  'CSS',
  'SEO',
];

export default function ExperienceAbout() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topMeta}>
          <p>Profile / Experience</p>
          <p>Developer + Designer</p>
        </div>

        <div className={styles.header}>
          <div className={styles.headingWrap}>
            <p className={styles.eyebrow}>A little about me</p>

            <h2 className={styles.title}>
              I like making things
              <span> make sense.</span>
            </h2>
          </div>

          <div className={styles.intro}>
            <p className={styles.introLead}>
              I&apos;m a full-stack developer and UX/UI designer who enjoys
              working where design, development and problem solving overlap.
            </p>

            <p>
              I care about how things look, but just as much about how they
              work. That means thoughtful interfaces, clean implementation,
              accessible experiences and systems that can actually grow.
            </p>

            <Link href="/about" className={styles.aboutLink}>
              Read more about me
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.editorialGrid}>
          <div className={styles.experienceColumn}>
            <div className={styles.columnHeading}>
              <p>Experience</p>
              <span>Selected history</span>
            </div>

            <div className={styles.experienceList}>
              {experience.map((item, index) => (
                <article className={styles.experienceItem} key={item.role}>
                  <div className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className={styles.experienceContent}>
                    <p className={styles.year}>{item.year}</p>

                    <h3 className={styles.role}>{item.role}</h3>

                    <p className={styles.company}>{item.company}</p>

                    <p className={styles.description}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link href="/experience" className={styles.experienceLink}>
              View full experience
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.quoteBlock}>
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>

              <blockquote>
                Design the experience.
                <span> Build the system.</span>
              </blockquote>
            </div>

            <div className={styles.toolkit}>
              <div className={styles.toolkitHeading}>
                <p>Toolkit</p>
                <span>Current favourites</span>
              </div>

              <ul>
                {toolkit.map((tool, index) => (
                  <li key={tool}>
                    <span className={styles.toolNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className={styles.bottomStrip}>
          <p>Based in Nova Scotia, Canada</p>

          <span className={styles.bottomStar} aria-hidden="true">
            ✦
          </span>

          <p>Working locally & remotely</p>
        </div>

        <div className={styles.monogram} aria-hidden="true">
          VB
        </div>
      </div>
    </section>
  );
}