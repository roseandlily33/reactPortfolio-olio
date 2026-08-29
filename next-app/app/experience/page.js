import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Experience | Full-Stack Developer & UX/UI Designer',
  description:
    'Explore Victoria Benoit’s experience across full-stack web development, React, UX/UI design, digital products, client work and technical systems.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Experience | Victoria Benoit',
    description:
      'Experience across full-stack development, UX/UI design, web design, digital products and client-facing technical work.',
    url: '/experience',
    type: 'website',
  },
};

const experience = [
  {
    period: '2026 — Present',
    role: 'Owner / Web Developer & Designer',
    company: 'VRB Web Design & Development',
    description:
      'Designing and developing websites, digital products and supporting systems for businesses, with work spanning strategy, UX/UI, development and launch.',
    highlights: [
      'Custom website design and development',
      'Full-stack application development',
      'UX/UI and responsive interface design',
      'SEO and technical site improvements',
      'Client strategy and project delivery',
    ],
  },
  {
    period: '2024 — Present',
    role: 'Full-Stack Developer & UX/UI Designer',
    company: 'Independent',
    description:
      'Building web applications and digital experiences across front-end development, back-end systems, interface design and product problem solving.',
    highlights: [
      'React and Next.js interfaces',
      'Node.js and Express APIs',
      'MongoDB data architecture',
      'Authentication and account systems',
      'Stripe payment integrations',
    ],
  },
  {
    period: 'Earlier Experience',
    role: 'Administrative & Technical Support',
    company: 'Operations',
    description:
      'Previous administrative work built a foundation in organization, documentation, data accuracy, structured processes and working within operational systems.',
    highlights: [
      'Data entry and record management',
      'Certificate administration',
      'Documentation and organization',
      'Process-focused support',
      'Quality and operational workflows',
    ],
  },
];

const disciplines = [
  {
    number: '01',
    title: 'Full-Stack Development',
    copy:
      'Building complete web applications across interface development, APIs, databases, authentication, payments and application logic.',
  },
  {
    number: '02',
    title: 'UX/UI Design',
    copy:
      'Turning complex workflows into interfaces that feel understandable, intentional and consistent across devices.',
  },
  {
    number: '03',
    title: 'Web Design',
    copy:
      'Creating responsive websites where visual direction, content hierarchy and development work together rather than being treated as separate stages.',
  },
  {
    number: '04',
    title: 'Digital Systems',
    copy:
      'Working beyond brochure websites with accounts, dashboards, forms, training systems, admin tools and structured workflows.',
  },
  {
    number: '05',
    title: 'SEO + Accessibility',
    copy:
      'Considering search visibility, semantic structure, performance and accessibility as part of the build rather than something added at the end.',
  },
  {
    number: '06',
    title: 'Client Work',
    copy:
      'Translating business needs into practical digital decisions, then carrying those decisions through design, development and launch.',
  },
];

const toolkit = [
  {
    category: 'Build',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
  {
    category: 'Design',
    items: [
      'Figma',
      'UX/UI',
      'Responsive Design',
      'Accessibility',
      'Design Systems',
    ],
  },
  {
    category: 'Systems',
    items: [
      'REST APIs',
      'Authentication',
      'Stripe',
      'Forms',
      'Data Workflows',
    ],
  },
  {
    category: 'Workflow',
    items: [
      'Git',
      'GitHub',
      'SEO',
      'Analytics',
      'Deployment',
      'Client Strategy',
    ],
  },
];

const stories = [
  {
    number: '01',
    label: 'Design → Production',
    title: 'I like seeing the whole thing through.',
    copy:
      'I enjoy working across both the design and development sides of a project. That means decisions made in the interface can carry through into the actual product instead of being lost between disciplines.',
  },
  {
    number: '02',
    label: 'Systems Thinking',
    title: 'Not everything is just a page.',
    copy:
      'Some of the most interesting work happens behind the interface: authentication, checkout flows, account logic, data structures, admin tools and the systems connecting everything together.',
  },
  {
    number: '03',
    label: 'Business + Technology',
    title: 'The technical solution still has to make sense.',
    copy:
      'Working directly with businesses has reinforced that the most complicated solution is rarely automatically the best one. The goal is to build something useful, maintainable and appropriate for the people actually using it.',
  },
];

export default function ExperiencePage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>Experience / Profile</p>
            <p>Development + Design</p>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>
                Experience
              </p>

              <h1 className={styles.title}>
                Built through
                <span> doing.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.lead}>
                My experience sits at the intersection of design, development
                and problem solving.
              </p>

              <p>
                I work across the full digital process — thinking through the
                experience, designing the interface, building the system and
                figuring out what needs to happen underneath it.
              </p>
            </div>
          </div>

          <div className={styles.heroFooter}>
            <p>Full-Stack Development</p>
            <p>UX/UI Design</p>
            <p>Web Design</p>
            <p>Digital Products</p>
          </div>

          <div className={styles.heroMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE TIMELINE
      ====================================================== */}

      <section className={styles.timeline}>
        <div className={styles.inner}>
          <SectionLabel
            number="01"
            label="Professional Experience"
          />

          <div className={styles.timelineIntro}>
            <h2>
              Work that has shaped
              <span> how I build.</span>
            </h2>

            <p>
              Each stage of my experience has added something different —
              technical depth, design thinking, client communication,
              organization and an understanding of how real workflows operate.
            </p>
          </div>

          <div className={styles.experienceList}>
            {experience.map((item, index) => (
              <article
                className={styles.experienceItem}
                key={`${item.role}-${item.period}`}
              >
                <div className={styles.experienceNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className={styles.experienceDate}>
                  <p>{item.period}</p>
                </div>

                <div className={styles.experienceMain}>
                  <p className={styles.company}>
                    {item.company}
                  </p>

                  <h3>{item.role}</h3>

                  <p className={styles.experienceDescription}>
                    {item.description}
                  </p>
                </div>

                <div className={styles.highlights}>
                  {item.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCIPLINES
      ====================================================== */}

      <section className={styles.disciplines}>
        <div className={styles.inner}>
          <div className={styles.darkHeader}>
            <p>02 / Experience Across</p>

            <div className={styles.darkHeading}>
              <h2>
                More than one
                <span> lane.</span>
              </h2>

              <p>
                My work crosses disciplines, which lets me think about a
                project as a connected system rather than a collection of
                isolated deliverables.
              </p>
            </div>
          </div>

          <div className={styles.disciplineGrid}>
            {disciplines.map((discipline) => (
              <article
                className={styles.discipline}
                key={discipline.number}
              >
                <span>{discipline.number}</span>

                <h3>{discipline.title}</h3>

                <p>{discipline.copy}</p>
              </article>
            ))}
          </div>

          <div className={styles.darkMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLKIT
      ====================================================== */}

      <section className={styles.toolkit}>
        <div className={styles.inner}>
          <SectionLabel
            number="03"
            label="Technical Experience"
          />

          <div className={styles.toolkitHeader}>
            <div>
              <h2>
                Tools are part of
                <span> the process.</span>
              </h2>
            </div>

            <p>
              I choose technologies based on what the project needs, but these
              are the tools and areas I work with most often.
            </p>
          </div>

          <div className={styles.toolGroups}>
            {toolkit.map((group, index) => (
              <div
                className={styles.toolGroup}
                key={group.category}
              >
                <div className={styles.toolGroupHeader}>
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{group.category}</h3>
                </div>

                <div className={styles.toolList}>
                  {group.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE STORIES
      ====================================================== */}

      <section className={styles.stories}>
        <div className={styles.inner}>
          <SectionLabel
            number="04"
            label="How I Work"
          />

          <div className={styles.storiesIntro}>
            <h2>
              Experience changes
              <span> how you think.</span>
            </h2>
          </div>

          <div className={styles.storyList}>
            {stories.map((story) => (
              <article
                className={styles.story}
                key={story.number}
              >
                <div className={styles.storyMeta}>
                  <span>{story.number}</span>
                  <p>{story.label}</p>
                </div>

                <h3>{story.title}</h3>

                <p className={styles.storyCopy}>
                  {story.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING
      ====================================================== */}

      <section className={styles.learning}>
        <div className={styles.inner}>
          <div className={styles.learningMeta}>
            <p>05 / Education + Continued Learning</p>
          </div>

          <div className={styles.learningGrid}>
            <div>
              <h2>
                Learning didn&apos;t stop
                <span> with the first course.</span>
              </h2>
            </div>

            <div className={styles.learningCopy}>
              <p className={styles.learningLead}>
                Development and design both move too quickly to treat learning
                as something that eventually ends.
              </p>

              <p>
                My continued education spans full-stack development, UX/UI,
                accessibility, SEO and digital strategy, with additional
                training added as the work evolves.
              </p>

              <Link
                href="/certificates"
                className={styles.learningLink}
              >
                View certificates
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ====================================================== */}

      <section className={styles.closing}>
        <div className={styles.inner}>
          <div className={styles.closingMeta}>
            <p>06 / Continue</p>
          </div>

          <div className={styles.closingGrid}>
            <div>
              <h2>
                The work tells
                <span> the rest.</span>
              </h2>
            </div>

            <div className={styles.closingLinks}>
              <Link href="/work">
                <span>View selected work</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="/Victoria-Benoit-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View résumé</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.closingMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ number, label }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}