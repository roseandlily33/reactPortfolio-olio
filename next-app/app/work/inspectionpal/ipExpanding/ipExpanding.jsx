import Image from "next/image";
import styles from "./ipExpanding.module.css";

const IPExpanding = () => {
  return (
    <section className={styles.expansionSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.expansionMeta}>
          <span>05</span>
          <p>Website Expansion</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.expansionIntro}>
          <div>
            <p className={styles.expansionEyebrow}>Growing the Website</p>

            <h2>
              The system held
              <span> as the site grew.</span>
            </h2>
          </div>

          <div className={styles.expansionIntroCopy}>
            <p className={styles.expansionLead}>
              The website continued to expand after the redesign.
            </p>

            <p>
              New training and product pages were introduced alongside the
              existing homepage and contact experience, extending the site
              without requiring a new visual direction each time functionality
              or content was added.
            </p>
          </div>
        </div>

        {/* =====================================================
            PAGE EXPANSION
        ====================================================== */}

        <div className={styles.expansionPages}>
          <div className={styles.expansionPagesHeading}>
            <span>Current Site</span>

            <h3>
              Different destinations.
              <em> One visual language.</em>
            </h3>
          </div>

          <div className={styles.expansionPageGrid}>
            {/* TRAINING */}

            <article className={styles.expansionPage}>
              <div className={styles.expansionPageHeader}>
                <div>
                  <span>01</span>
                  <p>Training</p>
                </div>

                <span>External Pathway</span>
              </div>

              <div className={styles.expansionImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/training.jpg"
                  alt="InspectionPal training page"
                  width={1100}
                  height={1800}
                  className={styles.expansionImage}
                />
              </div>

              <div className={styles.expansionPageCopy}>
                <h4>Connect visitors with training.</h4>

                <p>
                  The training page gives the offering its own place within the
                  website while directing visitors toward the appropriate
                  training destination.
                </p>
              </div>
            </article>

            {/* PRODUCTS */}

            <article className={styles.expansionPage}>
              <div className={styles.expansionPageHeader}>
                <div>
                  <span>02</span>
                  <p>Products</p>
                </div>

                <span>External Pathway</span>
              </div>

              <div className={styles.expansionImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/products.jpg"
                  alt="InspectionPal products page"
                  width={1100}
                  height={1800}
                  className={styles.expansionImage}
                />
              </div>

              <div className={styles.expansionPageCopy}>
                <h4>Extend the product offering.</h4>

                <p>
                  The products page creates a clear path from the main
                  InspectionPal website into the related product offering while
                  maintaining the site&apos;s established visual language.
                </p>
              </div>
            </article>

            {/* CONTACT */}

            <article className={styles.expansionPage}>
              <div className={styles.expansionPageHeader}>
                <div>
                  <span>03</span>
                  <p>Contact</p>
                </div>

                <span>Inquiry Pathway</span>
              </div>

              <div className={styles.expansionImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/contact-current.jpg"
                  alt="Current InspectionPal contact page"
                  width={1100}
                  height={1800}
                  className={styles.expansionImage}
                />
              </div>

              <div className={styles.expansionPageCopy}>
                <h4>Bring the journey to an action.</h4>

                <p>
                  The contact experience supports the site&apos;s primary
                  business goal by giving interested dealerships a clear place
                  to continue the conversation.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            SYSTEM CONTINUITY
        ====================================================== */}

        <div className={styles.continuitySection}>
          <div className={styles.continuityHeading}>
            <span>System Continuity</span>

            <h3>
              New content didn&apos;t mean
              <em> new design rules.</em>
            </h3>
          </div>

          <div className={styles.continuityGrid}>
            <article>
              <span>01</span>

              <h4>Shared hierarchy</h4>

              <p>
                Page headings, supporting copy and calls to action follow the
                same visual relationships throughout the website.
              </p>
            </article>

            <article>
              <span>02</span>

              <h4>Reusable patterns</h4>

              <p>
                Existing cards, spacing, icon treatments and section structures
                provide building blocks for additional pages.
              </p>
            </article>

            <article>
              <span>03</span>

              <h4>Consistent navigation</h4>

              <p>
                New destinations could be introduced within the existing site
                architecture without changing how visitors move through it.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            EXPANSION FLOW
        ====================================================== */}

        <div className={styles.expansionFlow}>
          <div className={styles.expansionFlowLabel}>
            <span>Website Growth</span>
            <p>Same foundation, broader reach</p>
          </div>

          <div className={styles.expansionFlowItems}>
            <div>
              <span>01</span>
              <p>Core Website</p>
              <strong>Explain + establish credibility</strong>
            </div>

            <div className={styles.expansionFlowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>02</span>
              <p>Training</p>
              <strong>Connect to learning resources</strong>
            </div>

            <div className={styles.expansionFlowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>03</span>
              <p>Products</p>
              <strong>Extend the offering</strong>
            </div>

            <div className={styles.expansionFlowArrow} aria-hidden="true">
              →
            </div>

            <div>
              <span>04</span>
              <p>Contact</p>
              <strong>Support inquiry</strong>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <div className={styles.expansionStatement}>
          <div className={styles.expansionStatementMonogram} aria-hidden="true">
            VB
          </div>

          <span>Design + Development</span>

          <p>
            A useful design system does more than make the first version
            consistent.
            <strong>It gives the next page somewhere to belong.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPExpanding;
