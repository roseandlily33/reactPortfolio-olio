import styles from "./yodaFinal.module.css";

const YodaFinal = () => {
  return (
    <section className={styles.wrapUpSection}>
      <div className={styles.inner}>
        {/* =====================================================
        SECTION META
    ====================================================== */}

        <div className={styles.wrapUpMeta}>
          <span>07</span>
          <p>Project Wrap-Up</p>
        </div>

        {/* =====================================================
        INTRO
    ====================================================== */}

        <div className={styles.wrapUpIntro}>
          <div>
            <p className={styles.wrapUpEyebrow}>Design Engineering</p>

            <h2>
              One product,
              <span> end to end.</span>
            </h2>
          </div>

          <div className={styles.wrapUpIntroCopy}>
            <p>
              Yoda Safety Services spans product design, frontend engineering,
              backend systems and long-term product evolution. The project
              reflects how I work across disciplines rather than handing work
              from one phase to another.
            </p>
          </div>
        </div>

        {/* =====================================================
        SCOPE GRID
    ====================================================== */}

        <div className={styles.scopeGrid}>
          <article className={styles.scopeItem}>
            <div className={styles.scopeHeader}>
              <span>01</span>
              <p>Design</p>
            </div>

            <h3>Shape the experience.</h3>

            <ul>
              <li>Product structure</li>
              <li>Interface design</li>
              <li>Responsive behaviour</li>
              <li>Information hierarchy</li>
            </ul>
          </article>

          <article className={styles.scopeItem}>
            <div className={styles.scopeHeader}>
              <span>02</span>
              <p>Engineering</p>
            </div>

            <h3>Build the product.</h3>

            <ul>
              <li>React</li>
              <li>Node + Express</li>
              <li>MongoDB</li>
              <li>APIs</li>
              <li>Authentication + authorization</li>
            </ul>
          </article>

          <article className={styles.scopeItem}>
            <div className={styles.scopeHeader}>
              <span>03</span>
              <p>Systems</p>
            </div>

            <h3>Connect the moving parts.</h3>

            <ul>
              <li>Reusable components</li>
              <li>Role-based access</li>
              <li>Stripe</li>
              <li>S3</li>
              <li>Email workflows</li>
            </ul>
          </article>

          <article className={styles.scopeItem}>
            <div className={styles.scopeHeader}>
              <span>04</span>
              <p>Product</p>
            </div>

            <h3>Support real workflows.</h3>

            <ul>
              <li>70+ course catalogue</li>
              <li>Individual + company purchasing</li>
              <li>Digital safety forms</li>
              <li>Certificates</li>
              <li>Administration tools</li>
            </ul>
          </article>
        </div>

        {/* =====================================================
        CLOSING STATEMENT
    ====================================================== */}

        <div className={styles.wrapUpStatement}>
          <div className={styles.wrapUpMonogram} aria-hidden="true">
            VB
          </div>

          <p className={styles.wrapUpStatementLabel}>
            What this project represents
          </p>

          <blockquote>
            Yoda Safety Services is the clearest example of how I work:
            <span>
              translating business requirements into product decisions,
              designing the interface system, engineering the underlying
              functionality, and continuing to refine the product as its needs
              evolve.
            </span>
          </blockquote>
        </div>

        {/* =====================================================
        MORE PROJECT / HANDOFF
    ====================================================== */}

        <div className={styles.projectHandoff}>
          <div>
            <span>Want to see more?</span>

            <h3>
              Explore the broader
              <em> Yoda project.</em>
            </h3>
          </div>

          <a
            href="YOUR_VRB_YODA_URL"
            target="_blank"
            rel="noopener"
            className={styles.projectHandoffLink}
          >
            <span>View on VRB</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* =====================================================
        NEXT PROJECT
    ====================================================== */}

        <a href="/work/inspectionpal" className={styles.nextProject}>
          <div className={styles.nextProjectMeta}>
            <span>Next Project</span>
            <p>02 / 03</p>
          </div>

          <div className={styles.nextProjectTitle}>
            <h3>InspectionPal</h3>

            <span aria-hidden="true">→</span>
          </div>

          <p className={styles.nextProjectDescription}>
            Designing and developing a dealership-focused digital platform
            website.
          </p>
        </a>
      </div>
    </section>
  );
};

export default YodaFinal;
