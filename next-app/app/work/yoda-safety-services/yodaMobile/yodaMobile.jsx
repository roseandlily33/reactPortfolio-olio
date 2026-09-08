import Image from "next/image";
import styles from "./yodaMobile.module.css";
const YodaMobile = () => {
  return (
    <section className={styles.responsiveSection}>
      <div className={styles.inner}>
        <div className={styles.responsiveMeta}>
          <span>03</span>
          <p>Responsive Behaviour</p>
        </div>

        <div className={styles.responsiveIntro}>
          <div>
            <p className={styles.responsiveEyebrow}>
              Designing for smaller screens
            </p>

            <h2>
              Responsive didn&apos;t mean
              <span> shrinking the dashboard.</span>
            </h2>
          </div>

          <div className={styles.responsiveIntroCopy}>
            <p className={styles.responsiveLead}>
              The desktop dashboard is designed to expose breadth. Mobile needed
              to prioritize speed, clarity and the next useful action.
            </p>

            <p>
              Rather than forcing the desktop layout into a narrow viewport, I
              created a dedicated mobile composition using the same underlying
              product data while changing how that information is grouped and
              surfaced.
            </p>
          </div>
        </div>

        <div className={styles.responsiveComparison}>
          <div className={styles.desktopExample}>
            <div className={styles.exampleHeader}>
              <span>01 / Desktop</span>
              <p>Broader context</p>
            </div>

            <div className={styles.exampleVisual}>
              <Image
                src="/images/projects/yoda/user-dashboard.jpg"
                alt="Desktop version of the Yoda Safety Services user dashboard"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className={styles.mobileExample}>
            <div className={styles.exampleHeader}>
              <span>02 / Mobile</span>
              <p>Focused actions</p>
            </div>

            <div className={styles.mobileFrame}>
              <Image
                src="/images/projects/yoda/user-dashboard-mobile.jpg"
                alt="Mobile version of the Yoda Safety Services user dashboard"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 70vw, 24vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.adaptationGrid}>
          <article className={styles.adaptation}>
            <span>01</span>

            <p className={styles.adaptationLabel}>Summary</p>

            <h3>
              Keep the status.
              <em> Remove the weight.</em>
            </h3>

            <p>
              Desktop summary items include counts, labels and direct links.
              Mobile condenses the same information into compact metrics so the
              learner can understand their current training status immediately.
            </p>

            <div className={styles.transform}>
              <span>Desktop</span>
              <span aria-hidden="true">→</span>
              <strong>Compact mobile metrics</strong>
            </div>
          </article>

          <article className={styles.adaptation}>
            <span>02</span>

            <p className={styles.adaptationLabel}>Priority</p>

            <h3>
              Preserve what needs
              <em> attention first.</em>
            </h3>

            <p>
              High-priority actions remain prominent on mobile, but move from a
              horizontal card grid into a vertical list that is easier to scan
              and scroll with limited screen width.
            </p>

            <div className={styles.transform}>
              <span>Card grid</span>
              <span aria-hidden="true">→</span>
              <strong>Vertical attention list</strong>
            </div>
          </article>

          <article className={styles.adaptation}>
            <span>03</span>

            <p className={styles.adaptationLabel}>Content Density</p>

            <h3>
              Show enough to act,
              <em> not everything available.</em>
            </h3>

            <p>
              Training and forms become compact list rows with clear actions and
              links to the complete views, reducing visual density without
              hiding access to the larger system.
            </p>

            <div className={styles.transform}>
              <span>Dashboard panels</span>
              <span aria-hidden="true">→</span>
              <strong>Action-focused lists</strong>
            </div>
          </article>
        </div>

        <div className={styles.responsiveEngineering}>
          <div>
            <p className={styles.responsiveEngineeringLabel}>
              Engineering Approach
            </p>

            <h3>
              Same product state.
              <span> Different composition.</span>
            </h3>
          </div>

          <div>
            <p>
              The mobile interface still responds to the same training, company,
              forms and attention data as desktop. The difference is
              presentation: mobile-specific components control density,
              hierarchy and interaction for the smaller viewport.
            </p>

            <div className={styles.responsiveCodeNotes}>
              <span>MobileSummary</span>
              <span>MobileAttentionItem</span>
              <span>MobileTrainingRow</span>
              <span>MobileFormRow</span>
              <span>MobileEmptyState</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YodaMobile;
