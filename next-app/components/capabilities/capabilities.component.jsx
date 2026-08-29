import styles from './capabilities.module.css';

const capabilities = [
  {
    number: '01',
    title: 'Development',
    description:
      'I build responsive, scalable web experiences with modern front-end and full-stack technologies.',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'Stripe',
    ],
  },
  {
    number: '02',
    title: 'UX & UI',
    description:
      'I design interfaces that feel intentional, intuitive and easy to use across devices.',
    items: [
      'UX/UI Design',
      'Wireframing',
      'Responsive Design',
      'Design Systems',
      'Accessibility',
      'Prototyping',
      'Figma',
    ],
  },
  {
    number: '03',
    title: 'Digital Strategy',
    description:
      'I think beyond individual screens to how content, search, structure and user journeys work together.',
    items: [
      'SEO',
      'Information Architecture',
      'Content Structure',
      'User Flows',
      'Performance',
      'Analytics',
      'Conversion Thinking',
    ],
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topLine}>
          <p className={styles.issue}>Capabilities</p>

          <p className={styles.meta}>
            Development / Design / Strategy
          </p>
        </div>

        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <p className={styles.eyebrow}>What I Do</p>

            <h2 className={styles.title}>
              Somewhere between
              <span> design &amp; code.</span>
            </h2>
          </div>

          <div className={styles.headerCopy}>
            <p>
              I work across design and development, bringing the visual,
              technical and strategic pieces of a digital experience together.
            </p>
          </div>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <article
              className={styles.capability}
              key={capability.title}
            >
              <div className={styles.capabilityHeader}>
                <span className={styles.number}>
                  {capability.number}
                </span>

                <span className={styles.star} aria-hidden="true">
                  ✦
                </span>
              </div>

              <h3 className={styles.capabilityTitle}>
                {capability.title}
              </h3>

              <p className={styles.description}>
                {capability.description}
              </p>

              <ul className={styles.list}>
                {capability.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.bottomLine}>
          <p>
            Full-stack development with a designer&apos;s eye.
          </p>

          <span>Est. 2024</span>
        </div>

        <div className={styles.monogram} aria-hidden="true">
          VB
        </div>
      </div>
    </section>
  );
}