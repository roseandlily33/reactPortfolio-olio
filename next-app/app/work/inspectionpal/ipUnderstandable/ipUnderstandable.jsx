import styles from './ipUnderstandable.module.css';

const IPUnderstandable = () => {
  return (
    <section className={styles.informationSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.informationMeta}>
          <span>02</span>
          <p>Information Design</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.informationIntro}>
          <div>
            <p className={styles.informationEyebrow}>
              Organizing the Message
            </p>

            <h2>
              Structure before
              <span> decoration.</span>
            </h2>
          </div>

          <div className={styles.informationIntroCopy}>
            <p className={styles.informationLead}>
              The website needed to make a specialized offering easier to
              understand before asking visitors to get in touch.
            </p>

            <p>
              The client supplied the product and business information. I
              organized that material into related groups, established the
              hierarchy between them and designed the page around a clearer
              progression from introduction to inquiry.
            </p>
          </div>
        </div>

        {/* =====================================================
            RAW INFORMATION → STRUCTURE
        ====================================================== */}

        <div className={styles.structureFeature}>
          <div className={styles.structureHeading}>
            <span>Content Transformation</span>

            <h3>
              From supplied information
              <em> to a page with direction.</em>
            </h3>
          </div>

          <div className={styles.structureTransformation}>
            {/* INPUT */}

            <div className={styles.structureInput}>
              <div className={styles.structureColumnHeader}>
                <span>Input</span>
                <p>Client-Supplied Information</p>
              </div>

              <div className={styles.contentFragments}>
                <span>Platform Information</span>
                <span>Dealership Benefits</span>
                <span>Safety + Compliance</span>
                <span>Product Features</span>
                <span>Support</span>
                <span>Company Information</span>
                <span>Contact Details</span>
              </div>
            </div>

            {/* TRANSFORMATION */}

            <div className={styles.structureProcess}>
              <span aria-hidden="true">→</span>

              <div>
                <p>Group</p>
                <p>Prioritize</p>
                <p>Sequence</p>
              </div>
            </div>

            {/* OUTPUT */}

            <div className={styles.structureOutput}>
              <div className={styles.structureColumnHeader}>
                <span>Output</span>
                <p>Website Hierarchy</p>
              </div>

              <div className={styles.pageSequence}>
                <article>
                  <span>01</span>

                  <div>
                    <p>Introduce</p>
                    <strong>What is InspectionPal?</strong>
                  </div>
                </article>

                <article>
                  <span>02</span>

                  <div>
                    <p>Establish Value</p>
                    <strong>Why it matters to dealerships</strong>
                  </div>
                </article>

                <article>
                  <span>03</span>

                  <div>
                    <p>Explain</p>
                    <strong>How the platform supports the work</strong>
                  </div>
                </article>

                <article>
                  <span>04</span>

                  <div>
                    <p>Build Confidence</p>
                    <strong>Capabilities + support</strong>
                  </div>
                </article>

                <article>
                  <span>05</span>

                  <div>
                    <p>Convert</p>
                    <strong>Move toward an inquiry</strong>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PAGE RHYTHM
        ====================================================== */}

        <div className={styles.pageRhythm}>
          <div className={styles.pageRhythmHeading}>
            <span>Homepage Rhythm</span>

            <h3>
              Each section had
              <em> a job to do.</em>
            </h3>
          </div>

          <div className={styles.pageRhythmFlow}>
            <article>
              <span>01</span>
              <p>Position</p>
              <strong>Introduce the platform</strong>
            </article>

            <div className={styles.rhythmLine} />

            <article>
              <span>02</span>
              <p>Value</p>
              <strong>Surface the benefits</strong>
            </article>

            <div className={styles.rhythmLine} />

            <article>
              <span>03</span>
              <p>Explain</p>
              <strong>Break down the offering</strong>
            </article>

            <div className={styles.rhythmLine} />

            <article>
              <span>04</span>
              <p>Reassure</p>
              <strong>Build credibility</strong>
            </article>

            <div className={styles.rhythmLine} />

            <article>
              <span>05</span>
              <p>Action</p>
              <strong>Invite the inquiry</strong>
            </article>
          </div>
        </div>

        {/* =====================================================
            DESIGN DECISION
        ====================================================== */}

        <div className={styles.informationDecision}>
          <div className={styles.informationDecisionNumber}>
            01
          </div>

          <div className={styles.informationDecisionContent}>
            <span>Design Decision</span>

            <h3>
              Explain first.
              <em> Ask second.</em>
            </h3>

            <p>
              For a specialized offering, the contact action is more useful
              after the visitor has enough context to understand what the
              company provides. The page hierarchy progressively introduces
              the offering, its value and its capabilities before ending with
              the inquiry path.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.informationPrinciple}>
          <span>Information Design</span>

          <p>
            I didn&apos;t need to become the subject-matter expert.
            <strong>
              I needed to understand the relationships between the information
              well enough to give it hierarchy.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPUnderstandable;