import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Yoda Safety Services Case Study',
  description:
    'A full-stack web development case study covering the design and development of a custom online safety training platform using React, Node.js, Express, MongoDB and Stripe.',
  alternates: {
    canonical: '/work/yoda-safety-services',
  },
  openGraph: {
    title: 'Yoda Safety Services Case Study | Victoria Benoit',
    description:
      'Explore the design and full-stack development of a custom online safety training platform built with React, Node.js, Express, MongoDB and Stripe.',
    url: '/work/yoda-safety-services',
    type: 'article',
  },
};

const projectDetails = [
  {
    label: 'Project Type',
    value: 'Full-Stack Web Application',
  },
  {
    label: 'Role',
    value: 'Design + Development',
  },
  {
    label: 'Year',
    value: '2026',
  },
  {
    label: 'Focus',
    value: 'Training + Company Management',
  },
];

const technologies = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Stripe',
  'UX/UI',
  'REST APIs',
  'Authentication',
];

const features = [
  {
    number: '01',
    title: 'Online Course Purchasing',
    description:
      'A streamlined purchase experience for individual users, including course selection, secure Stripe checkout and account-based access.',
  },
  {
    number: '02',
    title: 'Company Training Management',
    description:
      'Company accounts can manage employees, assign training and purchase courses for multiple workers from one centralized workflow.',
  },
  {
    number: '03',
    title: 'Certificate Tracking',
    description:
      'Training completion, certificates and expiry information are tied to user accounts to make ongoing compliance easier to manage.',
  },
  {
    number: '04',
    title: 'Flexible Course System',
    description:
      'The platform supports a growing library of training courses, language variations and structured course data without requiring separate systems.',
  },
];

const decisions = [
  {
    number: '01',
    label: 'Design',
    title: 'Make a complex platform feel simple.',
    description:
      'The interface was designed around clear steps, strong hierarchy and predictable patterns so users could move through purchasing and training workflows without unnecessary friction.',
  },
  {
    number: '02',
    label: 'Development',
    title: 'Build for more than one kind of user.',
    description:
      'The platform supports individual learners as well as companies managing multiple employees, which meant designing data and checkout flows that could accommodate both experiences cleanly.',
  },
  {
    number: '03',
    label: 'System',
    title: 'Keep the architecture flexible.',
    description:
      'Reusable course, user and transaction structures make it easier to add new languages, course formats and company functionality as the platform continues to evolve.',
  },
];

export default function YodaSafetyServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <Link href="/work" className={styles.backLink}>
              ← Work
            </Link>

            <p>Case Study / 01</p>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroHeading}>
              <p className={styles.eyebrow}>
                Full-Stack Development
              </p>

              <h1 className={styles.title}>
                Yoda Safety
                <span>Services.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.heroLead}>
                Designing and developing a custom online safety training
                platform from the interface through the systems behind it.
              </p>

              <p>
                The project brings together e-commerce, course delivery,
                account management and company training workflows in one
                scalable application.
              </p>
            </div>
          </div>

          <div className={styles.detailsGrid}>
            {projectDetails.map((detail) => (
              <div className={styles.detail} key={detail.label}>
                <p>{detail.label}</p>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.featuredImageSection}>
        <div className={styles.inner}>
          <div className={styles.featuredImage}>
            <Image
              src="/images/projects/yoda/yoda-hero.jpg"
              alt="Yoda Safety Services online training platform"
              fill
              priority
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.imageCaption}>
            <p>Yoda Safety Services</p>
            <span>Online Safety Training Platform</span>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>Overview</p>
          </div>

          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>
                One platform,
                <span> a lot happening underneath.</span>
              </h2>
            </div>

            <div className={styles.overviewCopy}>
              <p className={styles.lead}>
                The goal was to create a platform that could support both
                individual learners and businesses purchasing training for
                employees.
              </p>

              <p>
                That meant thinking beyond a typical course website. The
                application needed to handle purchasing, accounts, training
                records, company relationships and certificate information
                while still feeling straightforward to the person using it.
              </p>

              <p>
                I worked across both the interface and the underlying
                application structure, allowing design and development
                decisions to evolve together.
              </p>
            </div>
          </div>

          <div className={styles.techRow}>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.challenge}>
        <div className={styles.inner}>
          <div className={styles.sectionLabelLight}>
            <span>02</span>
            <p>The Challenge</p>
          </div>

          <div className={styles.challengeGrid}>
            <div>
              <p className={styles.largeQuote}>
                A training platform has to work for the learner
                <span> and</span> the organization managing them.
              </p>
            </div>

            <div className={styles.challengeCopy}>
              <p>
                Individual users need a simple way to purchase courses,
                complete training and access their records.
              </p>

              <p>
                Companies need a very different level of control, including
                selecting employees, assigning training and keeping track of
                who has completed what.
              </p>

              <p>
                The challenge was making those two experiences share the same
                platform without making either one feel unnecessarily
                complicated.
              </p>
            </div>
          </div>

          <div className={styles.challengeMonogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <p>Feature Highlights</p>
          </div>

          <div className={styles.featuresHeader}>
            <h2 className={styles.sectionTitle}>
              Built around
              <span> real workflows.</span>
            </h2>

            <p>
              Each major feature was designed around something users actually
              needed to accomplish rather than adding functionality for its
              own sake.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article className={styles.featureCard} key={feature.number}>
                <span className={styles.featureNumber}>
                  {feature.number}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.imageSpread}>
        <div className={styles.inner}>
          <div className={styles.imageLarge}>
            <Image
              src="/images/projects/yoda/yoda-dashboard.jpg"
              alt="Yoda Safety Services training dashboard"
              fill
              className={styles.image}
              sizes="(max-width: 800px) 100vw, 65vw"
            />
          </div>

          <div className={styles.imageSmall}>
            <Image
              src="/images/projects/yoda/yoda-checkout.jpg"
              alt="Yoda Safety Services course checkout"
              fill
              className={styles.image}
              sizes="(max-width: 800px) 100vw, 35vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.decisions}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <p>Design + Development Decisions</p>
          </div>

          <div className={styles.decisionsHeader}>
            <h2 className={styles.sectionTitle}>
              Decisions that shaped
              <span> the system.</span>
            </h2>
          </div>

          <div className={styles.decisionList}>
            {decisions.map((decision) => (
              <article
                className={styles.decision}
                key={decision.number}
              >
                <div className={styles.decisionMeta}>
                  <span>{decision.number}</span>
                  <p>{decision.label}</p>
                </div>

                <h3>{decision.title}</h3>

                <p className={styles.decisionDescription}>
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.result}>
        <div className={styles.inner}>
          <div className={styles.sectionLabelLight}>
            <span>05</span>
            <p>The Result</p>
          </div>

          <div className={styles.resultGrid}>
            <h2>
              A platform designed to
              <span> keep growing.</span>
            </h2>

            <div className={styles.resultCopy}>
              <p className={styles.resultLead}>
                The result is a custom training system that brings purchasing,
                learning and company administration into one connected
                experience.
              </p>

              <p>
                Because the application was built around reusable data
                structures and workflows, new courses, languages and features
                can be introduced without rebuilding the platform from the
                beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.inner}>
          <p className={styles.nextLabel}>Next Project / 02</p>

          <Link href="/work/inspectionpal" className={styles.nextLink}>
            <span>InspectionPal</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}