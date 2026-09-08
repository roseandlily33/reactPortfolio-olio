import styles from "./yodaHero.module.css";
import Image from "next/image";
import Link from "next/link";

const YodaHero = () => {
  return (
    <section className={styles.caseHero}>
      <div className={styles.inner}>
        <div className={styles.heroTopMeta}>
          <Link href="/work" className={styles.backLink}>
            ← Work
          </Link>

          <p>Design Engineering Case Study / 01</p>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroHeading}>
            <p className={styles.eyebrow}>
              Design Engineering / Full-Stack Product
            </p>

            <h1 className={styles.title}>
              Yoda Safety
              <span> Services.</span>
            </h1>
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.heroLead}>
              Designing and engineering an online training platform from the
              ground up.
            </p>

            <p>
              I independently designed and developed Yoda Safety Services&apos;
              production training platform, translating business requirements
              into the product structure, interface systems and full-stack
              functionality used by individual learners, companies and
              administrators.
            </p>
          </div>
        </div>

        <div className={styles.projectMeta}>
          <div className={styles.metaItem}>
            <p>Role</p>
            <span>Solo Designer + Developer</span>
          </div>

          <div className={styles.metaItem}>
            <p>Timeline</p>
            <span>2024 → Present</span>
          </div>

          <div className={styles.metaItem}>
            <p>Product</p>
            <span>Online Training Platform</span>
          </div>

          <div className={styles.metaItem}>
            <p>Scope</p>
            <span>Design → Frontend → Full Stack</span>
          </div>
        </div>

        <div className={styles.productVisual}>
          <div className={styles.dashboardFrame}>
            <div className={styles.frameTop}>
              <div className={styles.frameDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <p>Individual User Dashboard</p>

              <span className={styles.frameLabel}>Production Interface</span>
            </div>

            <div className={styles.dashboardImage}>
              <Image
                src="/images/work/YodaHome.png"
                alt="Yoda Safety Services individual user training dashboard"
                fill
                priority
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 82vw"
              />
            </div>
          </div>

          <aside className={styles.dashboardCallout}>
            <div className={styles.calloutNumber}>01</div>

            <p className={styles.calloutLabel}>User Dashboard</p>

            <h2>
              Designed around priority,
              <span> not navigation.</span>
            </h2>

            <p>
              The dashboard surfaces what needs attention first, then gives
              learners fast access to training, forms and completion status.
            </p>

            <div className={styles.engineeringNote}>
              <span />
              <p>Built from reusable, state-driven React components.</p>
            </div>
          </aside>
        </div>

        <div className={styles.scaleStrip}>
          <div className={styles.scaleItem}>
            <strong>70+</strong>

            <div>
              <p>Courses</p>
              <span>Live training catalogue</span>
            </div>
          </div>

          <div className={styles.scaleItem}>
            <strong>3</strong>

            <div>
              <p>User Contexts</p>
              <span>Individual · Company · Admin</span>
            </div>
          </div>

          <div className={styles.scaleItem}>
            <strong>Live</strong>

            <div>
              <p>Production Platform</p>
              <span>Checkout · Forms · Certificates</span>
            </div>
          </div>
        </div>

        <div className={styles.heroMark} aria-hidden="true">
          VB
        </div>
      </div>
    </section>
  );
};

export default YodaHero;
