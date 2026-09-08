import styles from "./ipFinal.module.css";

const IPFinal = () => {
  return (
    <section className={styles.inspectionWrapSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.inspectionWrapMeta}>
          <span>06</span>
          <p>Project Wrap-Up</p>
        </div>

        {/* =====================================================
            CLOSING INTRO
        ====================================================== */}

        <div className={styles.inspectionWrapIntro}>
          <div>
            <p className={styles.inspectionWrapEyebrow}>Reflection</p>

            <h2>
              Growth became
              <span> part of the work.</span>
            </h2>
          </div>

          <div className={styles.inspectionWrapCopy}>
            <p className={styles.inspectionWrapLead}>
              InspectionPal became a project I could revisit with sharper
              judgement rather than simply move on from.
            </p>

            <p>
              The redesign gave me the opportunity to preserve the ideas that
              continued to work, refine the parts that no longer reflected my
              abilities and extend the finished system into new pages without
              losing cohesion.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECT TAKEAWAYS
        ====================================================== */}

        <div className={styles.inspectionTakeaways}>
          <article>
            <span>01</span>

            <p>Information Design</p>

            <h3>
              Give complex content
              <em> hierarchy.</em>
            </h3>

            <div>
              Organizing supplied information into clear groups and page
              progression made a specialized offering easier to navigate.
            </div>
          </article>

          <article>
            <span>02</span>

            <p>Design Evolution</p>

            <h3>
              Keep the idea.
              <em> Improve the execution.</em>
            </h3>

            <div>
              Revisiting the original work showed that refinement does not
              always require rebuilding the underlying concept.
            </div>
          </article>

          <article>
            <span>03</span>

            <p>Frontend Craft</p>

            <h3>
              Build patterns
              <em> that can continue.</em>
            </h3>

            <div>
              A repeatable visual language made it easier to introduce new pages
              while keeping the website cohesive.
            </div>
          </article>
        </div>

        {/* =====================================================
            MAIN STATEMENT
        ====================================================== */}

        <div className={styles.inspectionClosingStatement}>
          <div className={styles.inspectionClosingMonogram} aria-hidden="true">
            VB
          </div>

          <p className={styles.inspectionClosingLabel}>
            What this project represents
          </p>

          <blockquote>
            InspectionPal reflects a different part of how I work:
            <span>
              organizing unfamiliar information, defining a visual direction,
              building it into a responsive website and being willing to revisit
              my own work when I know I can make it stronger.
            </span>
          </blockquote>
        </div>

        {/* =====================================================
            VRB HANDOFF
        ====================================================== */}

        <div className={styles.inspectionHandoff}>
          <div>
            <span>Want to see more?</span>

            <h3>
              Explore the broader
              <em> InspectionPal project.</em>
            </h3>
          </div>

          <a
            href="https://www.vrbwebdesignanddev.com/case-study/inspectionpal"
            target="_blank"
            rel="noopener"
            className={styles.inspectionHandoffLink}
          >
            <span>View on VRB</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* =====================================================
            NEXT PROJECT
        ====================================================== */}

        <a href="/work/vrb" className={styles.inspectionNextProject}>
          <div className={styles.inspectionNextMeta}>
            <span>Next Project</span>
            <p>03 / 03</p>
          </div>

          <div className={styles.inspectionNextTitle}>
            <h3>
              VRB
              <span>Web Design and Development</span>
            </h3>

            <span aria-hidden="true">→</span>
          </div>

          <p className={styles.inspectionNextDescription}>
            A book keeping and business operations platform designed to track
            invoices, payments, expenses and client services with a clear user
            experience.
          </p>
        </a>
      </div>
    </section>
  );
};

export default IPFinal;
