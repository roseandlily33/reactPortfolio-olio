import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Web Designer & Developer',

  description:
    'Meet Victoria Benoit, a web designer and full-stack developer working across UX/UI, React development and thoughtful digital experiences in Canada.',

  alternates: {
    canonical: '/about',
  },

  openGraph: {
    title: 'About Victoria Benoit | Web Designer & Developer',
    description:
      'Web designer, full-stack developer and UX/UI designer creating thoughtful digital experiences.',
    url: '/about',
    type: 'profile',
  },
};

const principles = [
  {
    number: '01',
    title: 'Make it clear.',
    copy:
      'Good digital experiences should feel understandable. I care about hierarchy, flow, language and removing unnecessary friction wherever possible.',
  },
  {
    number: '02',
    title: 'Make it useful.',
    copy:
      'Visual polish matters, but it has to support something real. I like solving practical problems and building things people can actually use.',
  },
  {
    number: '03',
    title: 'Make it hold up.',
    copy:
      'I think beyond the first screen or launch day. Structure, scalability, responsiveness and maintainability are all part of the experience.',
  },
];

const interests = [
  'Full-stack web applications',
  'Responsive websites',
  'UX/UI systems',
  'Dashboards and internal tools',
  'E-commerce and payments',
  'Forms and structured workflows',
  'Accessibility',
  'SEO and performance',
];

const details = [
  {
    label: 'Based',
    value: 'Nova Scotia, Canada',
  },
  {
    label: 'Working Across',
    value: 'Design + Development',
  },
  {
    label: 'Interested In',
    value: 'Useful digital products',
  },
  {
    label: 'Always',
    value: 'Learning',
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>About / Victoria Benoit</p>
            <p>Design + Development</p>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.headingWrap}>
              <p className={styles.eyebrow}>
                A little more about me
              </p>

              <h1 className={styles.title}>
                I like making
                <span> things make sense.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.lead}>
                I&apos;m a web designer and developer working across full-stack
                development, UX/UI design and digital product experiences.
              </p>

              <p>
                I enjoy the point where visual thinking and technical problem
                solving meet — figuring out how something should work, how it
                should feel and how to build it in a way that lasts.
              </p>
            </div>
          </div>

          <div className={styles.heroDetails}>
            {details.map((detail) => (
              <div
                className={styles.detail}
                key={detail.label}
              >
                <span>{detail.label}</span>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>

          <div className={styles.heroMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className={styles.intro}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>The Short Version</p>
          </div>

          <div className={styles.introGrid}>
            <div>
              <h2>
                Part designer.
                <span> Part developer.</span>
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p className={styles.introLead}>
                I&apos;ve always been drawn to work that combines structure
                with creativity.
              </p>

              <p>
                That&apos;s probably why web development and UX/UI ended up
                being such a natural fit. I like being able to think about the
                bigger picture while still getting into the details — from the
                layout and interaction of an interface to the logic, data and
                systems underneath it.
              </p>

              <p>
                I&apos;m especially interested in projects where there&apos;s
                something to untangle: a confusing workflow, a dated interface,
                a process that needs simplifying or an idea that needs to become
                something real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ====================================================== */}

      <section className={styles.principles}>
        <div className={styles.inner}>
          <div className={styles.darkMeta}>
            <p>02 / How I Think</p>
          </div>

          <div className={styles.principlesHeader}>
            <div>
              <h2>
                A few things I
                <span> care about.</span>
              </h2>
            </div>

            <p>
              The tools change. The projects change. These are the ideas I keep
              coming back to.
            </p>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((principle) => (
              <article
                className={styles.principle}
                key={principle.number}
              >
                <span>{principle.number}</span>

                <h3>{principle.title}</h3>

                <p>{principle.copy}</p>
              </article>
            ))}
          </div>

          <div className={styles.darkMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERESTS
      ====================================================== */}

      <section className={styles.interests}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <p>The Work I Gravitate Toward</p>
          </div>

          <div className={styles.interestsGrid}>
            <div className={styles.interestsHeading}>
              <h2>
                I like projects with
                <span> something to solve.</span>
              </h2>

              <p>
                The most interesting work usually has a little complexity in
                it — something that needs organizing, simplifying, connecting
                or improving.
              </p>
            </div>

            <div className={styles.interestList}>
              {interests.map((interest, index) => (
                <div
                  className={styles.interest}
                  key={interest}
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p>{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS / PERSONALITY
      ====================================================== */}

      <section className={styles.process}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <p>Working Style</p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processQuote}>
              <p>
                “Design the experience.
                <span> Build the system.”</span>
              </p>
            </div>

            <div className={styles.processCopy}>
              <p className={styles.processLead}>
                I&apos;m detail-oriented, but I don&apos;t like complexity for
                complexity&apos;s sake.
              </p>

              <p>
                I tend to work by breaking things down, asking a lot of
                questions and looking for the cleanest path forward. Sometimes
                that means refining the interface. Sometimes it means changing
                the data structure. Sometimes it means realizing the original
                idea can be much simpler.
              </p>

              <p>
                I also like being close to the full process. Being able to move
                between design, development and strategy gives me a better
                understanding of how one decision affects everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEYOND WORK
      ====================================================== */}

      <section className={styles.beyond}>
        <div className={styles.inner}>
          <div className={styles.beyondMeta}>
            <p>05 / Beyond the Screen</p>
          </div>

          <div className={styles.beyondGrid}>
            <div>
              <h2>
                There&apos;s more to me than
                <span> a tech stack.</span>
              </h2>
            </div>

            <div className={styles.beyondCopy}>
              <p className={styles.beyondLead}>
                I like the details — in work and outside of it.
              </p>

              <p>
                I&apos;m naturally curious, always learning something new and
                usually paying attention to the little things that make an
                experience feel more thoughtful.
              </p>

              <p>
                That same curiosity is probably what keeps me interested in
                development, design and everything in between.
              </p>
            </div>
          </div>

          <div className={styles.beyondMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className={styles.closing}>
        <div className={styles.inner}>
          <div className={styles.closingMeta}>
            <p>06 / Keep Exploring</p>
          </div>

          <div className={styles.closingGrid}>
            <div>
              <h2>
                Curious what that
                <span> looks like in practice?</span>
              </h2>
            </div>

            <div className={styles.closingLinks}>
              <Link href="/work">
                <span>View my work</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/experience">
                <span>View experience</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/certificates">
                <span>View certificates</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}