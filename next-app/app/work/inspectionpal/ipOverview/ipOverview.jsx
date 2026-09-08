import styles from "./ipOverview.module.css";

const IPOverview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewMonogram} aria-hidden="true">
        VB
      </div>

      <div className={styles.inner}>
        {/* =====================================================
            PROJECT META
        ====================================================== */}

        <div className={styles.projectMeta}>
          <div className={styles.projectNumber}>
            <span>02</span>
            <p>Selected Work</p>
          </div>

          <div className={styles.projectType}>
            <span>Design + Development</span>
            <p>Marketing Website</p>
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className={styles.hero}>
          <div className={styles.heroHeading}>
            <p className={styles.eyebrow}>
              Website Design / Frontend Development
            </p>

            <h1>
              Inspection
              <span>Pal</span>
            </h1>
          </div>

          <div className={styles.heroIntro}>
            <p className={styles.heroLead}>
              Turning a specialized dealership platform into a clear, credible
              digital presence.
            </p>

            <p>
              I independently designed and developed a new website for
              InspectionPal, organizing supplied product information into a
              structured experience designed to explain the offering, establish
              credibility and support dealership inquiries.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECT DETAILS
        ====================================================== */}

        <div className={styles.projectDetails}>
          <div>
            <span>Role</span>
            <p>Designer + Developer</p>
          </div>

          <div>
            <span>Ownership</span>
            <p>Design → Development</p>
          </div>

          <div>
            <span>Technology</span>
            <p>Gatsby</p>
          </div>

          <div>
            <span>Status</span>
            <p>Live Website</p>
          </div>
        </div>

        {/* =====================================================
            PRIMARY WEBSITE VISUAL
        ====================================================== */}

        <div className={styles.websiteFeature}>
          <div className={styles.websiteFeatureHeader}>
            <div>
              <span>Current Website</span>
              <p>InspectionPal</p>
            </div>

            <p>Designed + Developed Independently</p>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className={styles.browserAddress}>inspectionpal.com</div>

              <span className={styles.browserSpacer} />
            </div>

            <div className={styles.websiteImage}>
              <Image
                src="/images/work/IPHome.png"
                alt="InspectionPal website homepage designed and developed by Victoria Benoit"
                width={1600}
                height={3600}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            PROJECT CONTEXT
        ====================================================== */}

        <div className={styles.context}>
          <div className={styles.contextHeading}>
            <span>Starting Point</span>

            <h2>
              A new website with
              <em> room to define the direction.</em>
            </h2>
          </div>

          <div className={styles.contextCopy}>
            <p className={styles.contextLead}>
              The previous website was no longer functional, creating an
              opportunity to rebuild the company&apos;s digital presence from
              the ground up.
            </p>

            <p>
              The client provided the business and product information, while
              the website&apos;s visual direction, content organization,
              interface design and frontend implementation were left largely to
              me.
            </p>
          </div>
        </div>

        {/* =====================================================
            OWNERSHIP
        ====================================================== */}

        <div className={styles.ownership}>
          <div className={styles.ownershipIntro}>
            <span>Project Ownership</span>

            <p>From supplied information to a complete production website.</p>
          </div>

          <div className={styles.ownershipFlow}>
            <div>
              <span>01</span>
              <p>Organize</p>
              <strong>Content + hierarchy</strong>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>02</span>
              <p>Design</p>
              <strong>Visual direction + UI</strong>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>03</span>
              <p>Build</p>
              <strong>Responsive frontend</strong>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>04</span>
              <p>Ship</p>
              <strong>Live website</strong>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING PRINCIPLE
        ====================================================== */}

        <div className={styles.overviewPrinciple}>
          <span>Project Focus</span>

          <p>
            The challenge was not inventing the product.
            <strong>
              It was giving the information structure, hierarchy and visual
              language strong enough to communicate it.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPOverview;
