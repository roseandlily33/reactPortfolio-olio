import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Full-Stack Developer Portfolio & Case Studies",

  description:
    "Explore Victoria Benoit’s full-stack developer portfolio featuring React applications, web development projects, UX/UI design and custom website case studies.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Full-Stack Developer Portfolio | Victoria Benoit",
    description:
      "Full-stack development, React, UX/UI and website design case studies by Victoria Benoit.",
    url: "/work",
    type: "website",
  },
};

const projects = [
  {
    number: "01",
    title: "Yoda Safety Services",
    category: "Full-Stack Platform",
    year: "2026",
    description:
      "A custom online safety training platform with course purchasing, user accounts, company management, employee assignments, certificate tracking and Stripe checkout workflows.",
    href: "/work/yoda-safety-services",
    image: "/images/work/YodaHome.png",
    alt: "Yoda Safety Services online training platform interface",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "UX/UI"],
    featured: true,
  },
  {
    number: "02",
    title: "InspectionPal",
    category: "Web Design & Development",
    year: "2026",
    description:
      "A forms-based digital platform designed around streamlined inspections, configurable inputs, management workflows and clear user experiences.",
    href: "/work/inspectionpal",
    image: "/images/work/IPHome.png",
    alt: "InspectionPal digital forms platform interface",
    tags: ["Gatsby", "UX/UI", "Web Design"],
    featured: true,
  },
  {
    number: "03",
    title: "Ariel Boesener Performance Horses",
    category: "Website Design",
    year: "2025",
    description:
      "A design project helping to organize the UI, improve hierarchy and present services and horses more clearly.",
    href: "/work/ariel-boesener-performance-horses",
    image: "/images/work/ArielHome.png",
    alt: "Ariel Boesener Performance Horses website",
    tags: ["Web Design", "Development", "Responsive UI"],
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>Work / Selected Projects</p>
            <p>Development · UX/UI · Digital Products</p>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroTitleWrap}>
              <p className={styles.eyebrow}>Portfolio</p>

              <h1 className={styles.title}>
                Selected
                <span> work.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.lead}>
                A full-stack developer portfolio spanning web applications,
                websites, UX/UI design and digital product work.
              </p>

              <p>
                My projects often sit somewhere between design and development,
                bringing together interface decisions, technical systems and
                real-world user needs.
              </p>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>{String(projects.length).padStart(2, "0")} projects</span>

            <span>Nova Scotia / Canada / Remote</span>
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.archive}>
        <div className={styles.inner}>
          <div className={styles.archiveHeader}>
            {/* <div> */}
            <p>Project Archive</p>

            {/* </div> */}
            <span>Case Studies / Selected Builds</span>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article
                className={`${styles.project} ${
                  project.featured ? styles.featured : ""
                }`}
                key={project.title}
              >
                <div className={styles.projectMeta}>
                  <span className={styles.number}>{project.number}</span>

                  <div className={styles.metaDetails}>
                    <p>{project.category}</p>
                    <p>{project.year}</p>
                  </div>
                </div>

                <Link href={project.href} className={styles.imageLink}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className={styles.image}
                      sizes="
                        (max-width: 700px) 100vw,
                        (max-width: 1100px) 75vw,
                        65vw
                      "
                    />

                    <div className={styles.imageAction}>
                      <span>Open case study</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </div>
                </Link>

                <div className={styles.projectContent}>
                  <div className={styles.projectHeading}>
                    <h2>
                      <Link href={project.href}>{project.title}</Link>
                    </h2>

                    <Link
                      href={project.href}
                      className={styles.arrow}
                      aria-label={`View ${project.title} case study`}
                    >
                      ↗
                    </Link>
                  </div>

                  <p className={styles.description}>{project.description}</p>

                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.archiveFooter}>
            <p>Designing interfaces.</p>
            <span>✦</span>
            <p>Building the systems behind them.</p>
          </div>
        </div>
      </section>
      <section className={styles.moreWork}>
        <div className={styles.moreWorkInner}>
          <div className={styles.moreWorkMeta}>
            <span>04</span>
            <p>More Work</p>
          </div>

          <div className={styles.moreWorkGrid}>
            <div>
              <h2>
                Looking for
                <span> the full archive?</span>
              </h2>
            </div>

            <div className={styles.moreWorkCopy}>
              <p className={styles.moreWorkLead}>
                These case studies are a curated look at my development and
                UX/UI work.
              </p>

              <p>
                For a broader collection of client projects, website design,
                digital design and other professional work, visit my studio, VRB
                Web Design & Development.
              </p>

              <a
                href="https://vrbwebdesignanddev.com"
                // target="_blank"
                rel="noopener"
                className={styles.moreWorkLink}
              >
                Explore more work at VRB
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.moreWorkMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
      {/* 
      <section className={styles.closing}>
        <div className={styles.inner}>
          <div className={styles.closingGrid}>
            <div>
              <p className={styles.closingEyebrow}>More than screenshots</p>

              <h2 className={styles.closingTitle}>
                The thinking behind
                <span> the work.</span>
              </h2>
            </div>

            <div className={styles.closingCopy}>
              <p>
                Each project page goes beyond the finished interface to cover
                the problem, design decisions, development approach and systems
                behind the final result.
              </p>

              <Link href="/about" className={styles.closingLink}>
                About my approach
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
