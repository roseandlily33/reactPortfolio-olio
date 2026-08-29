import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Ariel Boesener Performance Horses Case Study",
  description:
    "A website design and development case study for Ariel Boesener Performance Horses, focused on visual hierarchy, responsive design and a stronger digital brand presence.",
  alternates: {
    canonical: "/work/ariel-boesener-performance-horses",
  },
  openGraph: {
    title: "Ariel Boesener Performance Horses Case Study | Victoria Benoit",
    description:
      "Explore the website design and development process behind a polished, responsive equestrian website.",
    url: "/work/ariel-boesener-performance-horses",
    type: "article",
  },
};

const projectDetails = [
  {
    label: "Project Type",
    value: "Website Design & Development",
  },
  {
    label: "Role",
    value: "Design + Development",
  },
  {
    label: "Year",
    value: "2025",
  },
  {
    label: "Focus",
    value: "Brand + Responsive UX",
  },
];

const services = [
  "Web Design",
  "Responsive Development",
  "UX/UI",
  "Content Hierarchy",
  "Visual Direction",
  "Front-End Development",
];

const goals = [
  {
    number: "01",
    title: "Create a stronger first impression.",
    description:
      "The website needed to feel established, professional and visually aligned with the quality of the business.",
  },
  {
    number: "02",
    title: "Make information easier to navigate.",
    description:
      "Services, horses and business information needed clearer hierarchy so visitors could quickly understand what was available.",
  },
  {
    number: "03",
    title: "Bring consistency across the site.",
    description:
      "Typography, imagery, spacing and page structure were brought into one visual system to make the overall experience feel more intentional.",
  },
];

export default function ArielCaseStudyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <Link href="/work" className={styles.backLink}>
              ← Work
            </Link>

            <p>Case Study / 03</p>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.titleWrap}>
              <p className={styles.eyebrow}>Website Design + Development</p>

              <h1 className={styles.title}>
                Ariel Boesener
                <span>Performance Horses.</span>
              </h1>
            </div>

            <div className={styles.heroAside}>
              <p className={styles.lead}>
                A more polished digital presence for an equestrian business
                built around performance, trust and presentation.
              </p>

              <p>
                The redesign focused on clearer hierarchy, refined visual
                direction and a responsive experience that felt more
                professional across every screen size.
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

      <section className={styles.heroVisual}>
        <div className={styles.inner}>
          <div className={styles.heroImage}>
            <Image
              src="/images/work/ArielHome.png"
              alt="Ariel Boesener Performance Horses website homepage"
              fill
              priority
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.caption}>
            <span>Ariel Boesener Performance Horses</span>
            <span>Responsive Website</span>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>Project Overview</p>
          </div>

          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.sectionTitle}>
                Refined,
                <span> clear and confident.</span>
              </h2>
            </div>

            <div className={styles.copy}>
              <p className={styles.largeCopy}>
                The website needed to communicate professionalism without
                feeling overly corporate or disconnected from the equestrian
                world.
              </p>

              <p>
                The design direction balanced strong imagery with restrained
                typography and generous spacing, allowing the horses, services
                and business story to remain the focus.
              </p>

              <p>
                The goal was not simply to make the website look newer. It was
                to make the business easier to understand and more credible from
                the first interaction.
              </p>
            </div>
          </div>

          <div className={styles.services}>
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.visualStatement}>
        <div className={styles.inner}>
          <div className={styles.statementCopy}>
            <p className={styles.statementNumber}>02 / Visual Direction</p>

            <h2>
              Let the imagery
              <span> do some of the talking.</span>
            </h2>

            <p>
              Strong photography became a key part of the visual hierarchy,
              supported by a quieter layout system rather than competing with
              it.
            </p>
          </div>

          <div className={styles.statementImage}>
            <Image
              src="/images/work/ArielHome.png"
              alt="Editorial website section for Ariel Boesener Performance Horses"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.goals}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <p>Design Goals</p>
          </div>

          <div className={styles.goalsHeader}>
            <h2 className={styles.sectionTitle}>
              A site that feels
              <span> considered.</span>
            </h2>

            <p>
              The redesign focused on a small number of decisions that would
              have the biggest impact on how the business was perceived and how
              easily the site could be used.
            </p>
          </div>

          <div className={styles.goalGrid}>
            {goals.map((goal) => (
              <article className={styles.goal} key={goal.number}>
                <span className={styles.goalNumber}>{goal.number}</span>

                <h3>{goal.title}</h3>

                <p>{goal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.designDetails}>
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <p>Design Details</p>
          </div>

          <div className={styles.detailGrid}>
            <div className={styles.detailCopy}>
              <p className={styles.detailKicker}>Typography</p>

              <h2>Editorial enough to feel elevated.</h2>

              <p>
                Typography was used to introduce personality without
                overpowering the content, with larger display moments balanced
                by clean supporting text.
              </p>
            </div>

            <div className={styles.detailCopy}>
              <p className={styles.detailKicker}>Hierarchy</p>

              <h2>Less competing for attention.</h2>

              <p>
                Stronger spacing, section structure and content grouping helped
                make the page easier to scan and gave important information more
                room to breathe.
              </p>
            </div>

            <div className={styles.detailCopy}>
              <p className={styles.detailKicker}>Responsiveness</p>

              <h2>Designed for the change in context.</h2>

              <p>
                Mobile layouts were treated as their own experience rather than
                simply compressing desktop sections into narrower columns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.finalVisual}>
        <div className={styles.inner}>
          <div className={styles.finalImage}>
            <Image
              src="/images/projects/ariel/ariel-pages.jpg"
              alt="Ariel Boesener Performance Horses website pages"
              fill
              className={styles.image}
              sizes="100vw"
            />
          </div>
        </div>
      </section> */}

      <section className={styles.result}>
        <div className={styles.inner}>
          <div className={styles.resultTop}>
            <p>05 / The Result</p>
          </div>

          <div className={styles.resultGrid}>
            <div>
              <h2>
                A clearer digital
                <span> identity.</span>
              </h2>
            </div>

            <div className={styles.resultCopy}>
              <p className={styles.resultLead}>
                The finished website gives the business a more confident,
                professional and cohesive online presence.
              </p>

              <p>
                The new structure improves how visitors move through the site
                while the visual direction better reflects the quality and
                personality of the business.
              </p>
            </div>
          </div>

          <div className={styles.resultMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
      <section className={styles.moreProject}>
        <div className={styles.inner}>
          <div className={styles.moreProjectMeta}>
            <span>Continue Exploring</span>
            <span>Ariel Boesener Performance Horses</span>
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
                Explore the full Ariel Boesener Performance Horses project on
                VRB for a closer look at the website, design decisions and
                development behind the finished experience.
              </p>

              <a
                href="https://vrbwebdesignanddev.com/case-study/ariel-performance-horses"
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

      <section className={styles.nextProject}>
        <div className={styles.inner}>
          <p>Next Project / 04</p>

          <Link href="/work/yoda-safety-services" className={styles.nextLink}>
            <span>
              Yoda Safety Services
              <em> Case Study</em>
            </span>

            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
