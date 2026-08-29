import Image from 'next/image';
import Link from 'next/link';
import styles from './inspectionpal.module.css';

export const metadata = {
  title: 'InspectionPal Case Study',
  description:
    'A product design and web development case study for InspectionPal, a digital forms and inspection management platform focused on configurable workflows, usability and structured data.',
  alternates: {
    canonical: '/work/inspectionpal',
  },
  openGraph: {
    title: 'InspectionPal Case Study | Victoria Benoit',
    description:
      'Explore the UX/UI and development of a digital forms and inspection management platform.',
    url: '/work/inspectionpal',
    type: 'article',
  },
};

const projectDetails = [
  {
    label: 'Project Type',
    value: 'Digital Product',
  },
  {
    label: 'Role',
    value: 'UX/UI + Development',
  },
  {
    label: 'Year',
    value: '2026',
  },
  {
    label: 'Focus',
    value: 'Forms + Workflows',
  },
];

const toolkit = [
  'React',
  'UX/UI',
  'JavaScript',
  'Forms',
  'Responsive Design',
  'Product Design',
  'Data Workflows',
];

const workflow = [
  {
    number: '01',
    title: 'Create',
    description:
      'Administrators can build structured forms using configurable input types and define what information needs to be collected.',
  },
  {
    number: '02',
    title: 'Publish',
    description:
      'Forms can be activated when they are ready for use, creating a clear distinction between setup and live workflows.',
  },
  {
    number: '03',
    title: 'Complete',
    description:
      'Users can open active forms, enter information and work through a consistent interface designed for clarity.',
  },
  {
    number: '04',
    title: 'Manage',
    description:
      'Completed submissions can be stored, reviewed and surfaced later as part of a larger management workflow.',
  },
];

const designPrinciples = [
  {
    number: '01',
    title: 'Keep the interface predictable.',
    copy:
      'Forms can become complicated quickly, so repeated interaction patterns and consistent visual hierarchy help users understand what to do next.',
  },
  {
    number: '02',
    title: 'Separate creation from completion.',
    copy:
      'The experience for administrators building forms is fundamentally different from the experience for users completing them, so each workflow needs its own priorities.',
  },
  {
    number: '03',
    title: 'Design for repeat use.',
    copy:
      'Inspection and form software is often used repeatedly, which makes speed, familiar controls and low-friction navigation especially important.',
  },
];

export default function InspectionPalPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <Link href="/work" className={styles.backLink}>
              ← Work
            </Link>

            <p>Case Study / 02</p>
          </div>

          <div className={styles.heroContent}>
            <div>
              <p className={styles.eyebrow}>
                Product Design + Development
              </p>

              <h1 className={styles.title}>
                Inspection
                <span>Pal.</span>
              </h1>
            </div>

            <div className={styles.heroIntro}>
              <p className={styles.lead}>
                Turning configurable forms and inspection workflows into a
                product that feels straightforward to use.
              </p>

              <p>
                InspectionPal is designed around creating, managing and
                completing digital forms while keeping the experience clear
                for different types of users.
              </p>
            </div>
          </div>

          <div className={styles.projectDetails}>
            {projectDetails.map((detail) => (
              <div className={styles.detail} key={detail.label}>
                <p>{detail.label}</p>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.heroImageSection}>
        <div className={styles.inner}>
          <div className={styles.heroImage}>
            <Image
              src="/images/projects/inspectionpal/inspectionpal-hero.jpg"
              alt="InspectionPal digital forms dashboard"
              fill
              priority
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.caption}>
            <span>InspectionPal</span>
            <span>Digital Forms / Product Interface</span>
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.inner}>
          <SectionLabel number="01" label="The Product" />

          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.sectionTitle}>
                Forms are simple.
                <span> Form systems aren&apos;t.</span>
              </h2>
            </div>

            <div className={styles.copy}>
              <p className={styles.largeCopy}>
                What looks like a form on the surface can involve several
                different workflows behind the scenes.
              </p>

              <p>
                Administrators need to define fields and manage which forms are
                available. Users need a fast, understandable way to complete
                them. Managers need the resulting information to remain useful
                after submission.
              </p>

              <p>
                The design challenge was making those connected workflows feel
                like parts of one coherent product.
              </p>
            </div>
          </div>

          <div className={styles.toolkit}>
            {toolkit.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={styles.inner}>
          <div className={styles.workflowHeader}>
            <div>
              <p className={styles.lightEyebrow}>
                02 / Core Workflow
              </p>

              <h2>
                From setup
                <span> to submission.</span>
              </h2>
            </div>

            <p>
              Instead of treating each screen as an isolated interface, the
              product was designed around the full lifecycle of a form.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {workflow.map((item) => (
              <article className={styles.workflowItem} key={item.number}>
                <div className={styles.workflowNumber}>
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className={styles.workflowArrow} aria-hidden="true">
                  ↘
                </span>
              </article>
            ))}
          </div>

          <div className={styles.darkMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.productSpread}>
        <div className={styles.inner}>
          <div className={styles.spreadTop}>
            <div className={styles.largeScreenshot}>
              <Image
                src="/images/projects/inspectionpal/form-builder.jpg"
                alt="InspectionPal configurable form builder"
                fill
                className={styles.image}
                sizes="(max-width: 850px) 100vw, 65vw"
              />
            </div>

            <div className={styles.annotation}>
              <p className={styles.annotationNumber}>01</p>

              <p className={styles.annotationLabel}>
                Administrator Experience
              </p>

              <h2>
                Build the structure without making the interface feel
                technical.
              </h2>

              <p>
                The form-building experience needs enough flexibility to
                configure useful data while still being understandable to
                people who are not developers.
              </p>
            </div>
          </div>

          <div className={styles.spreadBottom}>
            <div className={styles.annotationSecond}>
              <p className={styles.annotationNumber}>02</p>

              <p className={styles.annotationLabel}>
                User Experience
              </p>

              <h2>
                Keep completion focused.
              </h2>

              <p>
                Once a form is active, the user experience shifts away from
                configuration and toward completing the task as efficiently as
                possible.
              </p>
            </div>

            <div className={styles.smallScreenshot}>
              <Image
                src="/images/projects/inspectionpal/form-completion.jpg"
                alt="InspectionPal form completion interface"
                fill
                className={styles.image}
                sizes="(max-width: 850px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.inner}>
          <SectionLabel
            number="03"
            label="Product Decisions"
          />

          <div className={styles.principlesHeading}>
            <h2 className={styles.sectionTitle}>
              Designing for
              <span> repeated use.</span>
            </h2>

            <p>
              This kind of software succeeds when it gets out of the user&apos;s
              way. The design system needed to feel familiar enough that
              repeated tasks required less thought over time.
            </p>
          </div>

          <div className={styles.principleList}>
            {designPrinciples.map((principle) => (
              <article
                className={styles.principle}
                key={principle.number}
              >
                <span className={styles.principleNumber}>
                  {principle.number}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.detailSpread}>
        <div className={styles.inner}>
          <div className={styles.detailIntro}>
            <p className={styles.eyebrow}>
              Interface Details
            </p>

            <h2 className={styles.sectionTitle}>
              Small patterns,
              <span> clearer systems.</span>
            </h2>
          </div>

          <div className={styles.detailImages}>
            <div className={styles.detailImageLarge}>
              <Image
                src="/images/projects/inspectionpal/forms-list.jpg"
                alt="InspectionPal forms management interface"
                fill
                className={styles.image}
                sizes="(max-width: 800px) 100vw, 60vw"
              />
            </div>

            <div className={styles.detailImageSmall}>
              <Image
                src="/images/projects/inspectionpal/form-detail.jpg"
                alt="InspectionPal form detail interface"
                fill
                className={styles.image}
                sizes="(max-width: 800px) 100vw, 35vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.outcome}>
        <div className={styles.inner}>
          <div className={styles.outcomeHeader}>
            <p>04 / Outcome</p>
          </div>

          <div className={styles.outcomeGrid}>
            <div>
              <h2>
                A flexible product without
                <span> a cluttered experience.</span>
              </h2>
            </div>

            <div className={styles.outcomeCopy}>
              <p className={styles.outcomeLead}>
                InspectionPal brings form creation, activation, completion and
                management into one connected system.
              </p>

              <p>
                The interface is built around reusable patterns so the product
                can expand while preserving consistency for the people using
                it repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.inner}>
          <p>Next Project / 03</p>

          <Link
            href="/work/ariel-boesener-performance-horses"
            className={styles.nextLink}
          >
            <span>
              Ariel Boesener
              <em> Performance Horses</em>
            </span>

            <span aria-hidden="true">↗</span>
          </Link>
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