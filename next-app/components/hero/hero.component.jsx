import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.topMeta}>
          <p className={styles.issue}>Portfolio / 2026</p>

          <p className={styles.location}>
            Nova Scotia, Canada
            <span className={styles.dot}>•</span>
            Available remotely
          </p>
        </div>

        <div className={styles.rule} />

        <div className={styles.mastheadWrap}>
          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>

          <h1 className={styles.masthead}>
            Victoria
            <span>Benoit</span>
          </h1>
        </div>

        <div className={styles.ruleStrong} />

        <div className={styles.heroGrid}>
          <div className={styles.roleBlock}>
            <p className={styles.kicker}>Full-Stack Web Developer</p>

            <h2 className={styles.roleTitle}>
              Designer
              <span className={styles.italic}>&amp; developer</span>
              of thoughtful digital experiences.
            </h2>
          </div>

          <div className={styles.introBlock}>
            {/* <p className={styles.intro}>
              I design and build polished, accessible digital experiences from
              interface to implementation.
            </p> */}
            <p className={styles.intro}>
              Halifax-area web developer and UX/UI designer creating custom
              websites, full-stack web applications and thoughtful digital
              experiences for businesses in Nova Scotia and across Canada.
            </p>

            <div className={styles.actions}>
              <Link href="/work" className={styles.primaryLink}>
                View selected work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/about" className={styles.secondaryLink}>
                More about me
              </Link>
            </div>
          </div>

          <aside className={styles.dispatch}>
            <p className={styles.dispatchLabel}>Currently</p>

            <div className={styles.dispatchItem}>
              <span className={styles.dispatchNumber}>01</span>
              <p>Building full-stack web experiences</p>
            </div>

            <div className={styles.dispatchItem}>
              <span className={styles.dispatchNumber}>02</span>
              <p>Designing accessible, intentional interfaces</p>
            </div>

            <div className={styles.dispatchItem}>
              <span className={styles.dispatchNumber}>03</span>
              <p>Exploring SEO, UX and better digital systems</p>
            </div>
          </aside>
        </div>

        <div className={styles.bottomBar}>
          <p>Design / Development / UX / UI</p>

          <a href="#selected-work" className={styles.scrollLink}>
            Scroll to work
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
