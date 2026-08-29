import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'InspectionPal Website Case Study',
  description:
    'Website design and development case study for InspectionPal, a dealership-focused digital platform. Designed and developed with Gatsby by Victoria Benoit.',
  alternates: {
    canonical: '/work/inspectionpal',
  },
  openGraph: {
    title: 'InspectionPal Website Case Study | Victoria Benoit',
    description:
      'Explore the design and Gatsby development of a website for a dealership-focused digital platform.',
    url: '/work/inspectionpal',
    type: 'article',
  },
};

const projectDetails = [
  {
    label: 'Project Type',
    value: 'Website',
  },
  {
    label: 'Role',
    value: 'Design + Development',
  },
  {
    label: 'Year',
    value: '2025',
  },
  {
    label: 'Focus',
    value: 'Product + Brand',
  },
];

const toolkit = [
  'Gatsby',
  'JavaScript',
  'UX/UI',
  'Responsive Design',
  'Web Design',
  'Front-End Development',
];

const workflow = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Start with the product, its audience and the information the website needs to communicate clearly.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'Organize the content into a clear hierarchy that introduces the product before moving into its benefits and supporting information.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Build a visual direction around the existing brand while giving each section enough distinction to keep a long page engaging.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Translate the design into a responsive Gatsby website with reusable front-end patterns and layouts.',
  },
];

const designPrinciples = [
  {
    number: '01',
    title: 'Make the product understandable.',
    copy:
      'The website needed to communicate what InspectionPal offers without overwhelming visitors with too much information at once.',
  },
  {
    number: '02',
    title: 'Give a long page rhythm.',
    copy:
      'Alternating layouts, typography, product visuals and supporting sections help break the content into smaller, easier-to-scan moments.',
  },
  {
    number: '03',
    title: 'Keep the brand consistent.',
    copy:
      'Repeated typography, spacing, colour and interface patterns create continuity as visitors move through different parts of the website.',
  },
];

export default function InspectionPalPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

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
                Website Design + Development
              </p>

              <h1 className={styles.title}>
                Inspection
                <span>Pal.</span>
              </h1>
            </div>

            <div className={styles.heroIntro}>
              <p className={styles.lead}>
                Creating a clear digital home for a dealership-focused
                platform.
              </p>

              <p>
                InspectionPal needed a website that could introduce its
                product, communicate its value and guide visitors through
                the platform in a way that felt approachable and easy to
                understand.
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

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <section className={styles.heroImageSection}>
        <div className={styles.inner}>
          <div className={styles.heroImage}>
            <Image
              src="/images/work/IPHome.png"
              alt="InspectionPal website homepage"
              fill
              priority
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.caption}>
            <span>InspectionPal</span>
            <span>Website Design / Gatsby Development</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className={styles.introduction}>
        <div className={styles.inner}>
          <SectionLabel number="01" label="The Website" />

          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.sectionTitle}>
                A technical product needs
                <span> a clear introduction.</span>
              </h2>
            </div>

            <div className={styles.copy}>
              <p className={styles.largeCopy}>
                The website needed to explain the product without making
                the experience feel overly technical.
              </p>

              <p>
                The design uses a strong content hierarchy to move from the
                primary product message into supporting benefits, features
                and additional information.
              </p>

              <p>
                Rather than presenting everything with the same visual
                weight, the page is broken into distinct sections that help
                visitors understand the product piece by piece.
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

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className={styles.workflow}>
        <div className={styles.inner}>
          <div className={styles.workflowHeader}>
            <div>
              <p className={styles.lightEyebrow}>
                02 / Design + Development
              </p>

              <h2>
                From information
                <span> to experience.</span>
              </h2>
            </div>

            <p>
              The project combined UX/UI design with front-end development,
              allowing the structure, visual direction and final Gatsby
              implementation to be considered as one connected experience.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {workflow.map((item) => (
              <article
                className={styles.workflowItem}
                key={item.number}
              >
                <div className={styles.workflowNumber}>
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span
                  className={styles.workflowArrow}
                  aria-hidden="true"
                >
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

      {/* =====================================================
          WEBSITE SPREAD
      ====================================================== */}

      <section className={styles.productSpread}>
        <div className={styles.inner}>
          <div className={styles.spreadTop}>
            <div className={styles.largeScreenshot}>
              <Image
                src="/images/work/IPHome.png"
                alt="InspectionPal responsive website design"
                fill
                className={styles.image}
                sizes="(max-width: 850px) 100vw, 65vw"
              />
            </div>

            <div className={styles.annotation}>
              <p className={styles.annotationNumber}>01</p>

              <p className={styles.annotationLabel}>
                Content Hierarchy
              </p>

              <h2>
                Lead with the message, then support it.
              </h2>

              <p>
                The homepage establishes the product and its purpose early,
                then uses supporting sections to introduce more information
                as the visitor moves through the page.
              </p>
            </div>
          </div>

          <div className={styles.spreadBottom}>
            <div className={styles.annotationSecond}>
              <p className={styles.annotationNumber}>02</p>

              <p className={styles.annotationLabel}>
                Visual Direction
              </p>

              <h2>
                Give each section its own moment.
              </h2>

              <p>
                A long product page can become repetitive quickly. Changes
                in layout, scale and content presentation create visual
                rhythm while keeping the overall design cohesive.
              </p>
            </div>

            <div className={styles.smallScreenshot}>
              <Image
                src="/images/work/IPHome.png"
                alt="InspectionPal website content sections"
                fill
                className={styles.image}
                sizes="(max-width: 850px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGN PRINCIPLES
      ====================================================== */}

      <section className={styles.principles}>
        <div className={styles.inner}>
          <SectionLabel
            number="03"
            label="Design Decisions"
          />

          <div className={styles.principlesHeading}>
            <h2 className={styles.sectionTitle}>
              Designing around
              <span> the message.</span>
            </h2>

            <p>
              The visual design supports the content rather than competing
              with it, using consistent patterns to make a detailed product
              website easier to navigate.
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


      {/* =====================================================
          OUTCOME
      ====================================================== */}

      <section className={styles.outcome}>
        <div className={styles.inner}>
          <div className={styles.outcomeHeader}>
            <p>04 / Outcome</p>
          </div>

          <div className={styles.outcomeGrid}>
            <div>
              <h2>
                A clearer home for
                <span> the product.</span>
              </h2>
            </div>

            <div className={styles.outcomeCopy}>
              <p className={styles.outcomeLead}>
                The finished website gives InspectionPal a structured,
                professional way to introduce the platform and communicate
                its value.
              </p>

              <p>
                Designed and developed as one connected project, the site
                combines responsive layouts, clear content hierarchy and
                Gatsby development into a cohesive digital experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.moreProject}>
  <div className={styles.inner}>
    <div className={styles.moreProjectMeta}>
      <span>Continue Exploring</span>
      <span>InspectionPal</span>
    </div>

    <div className={styles.moreProjectGrid}>
      <div className={styles.moreProjectHeading}>
        <h2>
          Want to see more
          <span> of this project?</span>
        </h2>
      </div>

      <div className={styles.moreProjectContent}>
        <p className={styles.moreProjectLead}>
          There&apos;s more behind the build.
        </p>

        <p>
          Explore the full InspectionPal project on VRB for a closer look
          at the website, design decisions and development behind the
          finished experience.
        </p>

        <a
          href="https://vrbwebdesignanddev.com/case-study/inspection-pal"
          target="_blank"
          rel="noopener"
          className={styles.moreProjectLink}
        >
          View the full project on VRB
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div className={styles.moreProjectMark} aria-hidden="true">
      VB
    </div>
  </div>
</section>

      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

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