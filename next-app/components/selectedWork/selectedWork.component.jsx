import Link from "next/link";
import styles from "./selectedWork.module.css";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Yoda Safety Services",
    type: "Full-Stack Platform",
    year: "2026",
    description:
      "A custom safety training platform built with React, Node.js, Express, MongoDB and Stripe, including course purchasing, company management and employee training workflows.",
    href: "/work/yoda-safety-services",
    image: "/images/projects/yoda-safety-services.jpg",
    alt: "Yoda Safety Services training platform interface",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "UX/UI"],
  },
  {
    number: "02",
    title: "Ariel Boesener Performance Horses",
    type: "Website Design & Development",
    year: "2025",
    description:
      "A polished equestrian website focused on clear content hierarchy, responsive design and a stronger visual identity.",
    href: "/work/ariel-boesener-performance-horses",
    image: "/images/projects/ariel-boesener.jpg",
    alt: "Ariel Boesener Performance Horses website",
    technologies: ["Web Design", "Development", "Responsive UI"],
  },
  {
    number: "03",
    title: "InspectionPal",
    type: "Product Design & Development",
    year: "2026",
    description:
      "A forms-based digital product designed to make inspections, submissions and management workflows easier to navigate.",
    href: "/work/inspectionpal",
    image: "/images/projects/inspectionpal.jpg",
    alt: "InspectionPal application interface",
    technologies: ["React", "UX/UI", "Forms", "Product Design"],
  },
];

export default function SelectedWork() {
  return (
    <section className={styles.section} id="selected-work">
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Selected Work</p>

            <h2 className={styles.title}>
              A few things I&apos;ve
              <span> designed &amp; built.</span>
            </h2>
          </div>

          <div className={styles.headerMeta}>
            <p>
              Full-stack development, UX/UI and digital product work across
              client and independent projects.
            </p>

            <Link href="/work" className={styles.viewAll}>
              View all work
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <div className={styles.projectMeta}>
                <span>{project.number}</span>

                <span>{project.type}</span>

                <span>{project.year}</span>
              </div>

              <Link href={project.href} className={styles.imageLink}>
                <div className={styles.imageWrap}>
                  <Image
                    width={600}
                    height={400}
                    priority
                    quality={100}
                    src={project.image}
                    alt={project.alt}
                    className={styles.image}
                  />

                  <div className={styles.imageOverlay}>
                    <span>View project</span>
                    <span aria-hidden="true">↗</span>
                  </div>

                  <div className={styles.imageMonogram} aria-hidden="true">
                    VB
                  </div>
                </div>
              </Link>

              <div className={styles.projectContent}>
                <div className={styles.projectTitleWrap}>
                  <h3 className={styles.projectTitle}>
                    <Link href={project.href}>{project.title}</Link>
                  </h3>

                  <Link
                    href={project.href}
                    className={styles.projectArrow}
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </Link>
                </div>

                <p className={styles.description}>{project.description}</p>

                <ul
                  className={styles.technologies}
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomNote}>
          <span>03 / Selected Projects</span>
          <span>Development · Design · UX/UI</span>
        </div>
      </div>
    </section>
  );
}
