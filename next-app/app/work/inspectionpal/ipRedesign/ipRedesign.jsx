import Image from "next/image";
import styles from "./ipRedesign.module.css";

const IPRedesign = () => {
  return (
    <section className={styles.redesignSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.redesignMeta}>
          <span>03</span>
          <p>Design Evolution</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.redesignIntro}>
          <div>
            <p className={styles.redesignEyebrow}>Revisiting the Work</p>

            <h2>
              The idea held up.
              <span> My execution caught up.</span>
            </h2>
          </div>

          <div className={styles.redesignIntroCopy}>
            <p className={styles.redesignLead}>
              About eight months after the original build, I came back to the
              project with a much stronger design eye.
            </p>

            <p>
              The website still worked structurally, but the visual execution no
              longer reflected the standard I was capable of producing. I chose
              to redesign it without discarding the parts that were already
              doing their job.
            </p>
          </div>
        </div>

        {/* =====================================================
            HOMEPAGE BEFORE / AFTER
        ====================================================== */}

        <div className={styles.redesignFeature}>
          <div className={styles.redesignFeatureHeader}>
            <div>
              <span>Homepage Evolution</span>

              <h3>
                Same purpose.
                <em> Stronger visual judgement.</em>
              </h3>
            </div>

            <p>
              The redesign focused less on restructuring the site and more on
              refining hierarchy, colour, spacing, consistency and overall
              visual confidence.
            </p>
          </div>

          <div className={styles.redesignComparison}>
            {/* OLD */}

            <article className={styles.redesignVersion}>
              <div className={styles.versionHeader}>
                <div>
                  <span>Version 01</span>
                  <strong>Original Design</strong>
                </div>

                <p>Earlier Work</p>
              </div>

              <div className={styles.redesignImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/home-old.jpg"
                  alt="Original InspectionPal homepage design"
                  width={1400}
                  height={3000}
                  className={styles.redesignImage}
                />
              </div>

              <div className={styles.versionCaption}>
                <span>What held up</span>

                <p>
                  The overall content structure and many of the original ideas
                  remained useful enough to carry forward.
                </p>
              </div>
            </article>

            {/* ARROW */}

            <div className={styles.redesignArrow} aria-hidden="true">
              <span>→</span>
              <p>Refined</p>
            </div>

            {/* CURRENT */}

            <article className={styles.redesignVersion}>
              <div className={styles.versionHeader}>
                <div>
                  <span>Version 02</span>
                  <strong>Current Design</strong>
                </div>

                <p>Refined Work</p>
              </div>

              <div className={styles.redesignImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/home-current.jpg"
                  alt="Current InspectionPal homepage design"
                  width={1400}
                  height={3000}
                  className={styles.redesignImage}
                />
              </div>

              <div className={styles.versionCaption}>
                <span>What changed</span>

                <p>
                  The visual system became more restrained, intentional and
                  consistent while preserving the core purpose of the page.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            WHAT CHANGED / WHAT STAYED
        ====================================================== */}

        <div className={styles.redesignBreakdown}>
          <div className={styles.breakdownColumn}>
            <div className={styles.breakdownHeader}>
              <span>01</span>
              <p>What Stayed</p>
            </div>

            <h3>
              Good decisions
              <em> did not need replacing.</em>
            </h3>

            <div className={styles.breakdownItems}>
              <div>
                <span>Structure</span>
                <p>
                  The general information hierarchy continued to support the
                  page.
                </p>
              </div>

              <div>
                <span>Purpose</span>
                <p>
                  The site still needed to explain the offering and support
                  inquiries.
                </p>
              </div>

              <div>
                <span>Content Grouping</span>
                <p>
                  Related information remained organized into distinct,
                  scannable sections.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.breakdownColumn}>
            <div className={styles.breakdownHeader}>
              <span>02</span>
              <p>What Changed</p>
            </div>

            <h3>
              The execution became
              <em> more deliberate.</em>
            </h3>

            <div className={styles.breakdownItems}>
              <div>
                <span>Colour</span>
                <p>
                  The palette became more cohesive, using greens derived from
                  the logo alongside complementary blue and neutral tones.
                </p>
              </div>

              <div>
                <span>Hierarchy</span>
                <p>
                  Stronger contrast and clearer visual pacing improved how the
                  page directs attention.
                </p>
              </div>

              <div>
                <span>Spacing + Consistency</span>
                <p>
                  Layout rhythm, component spacing and repeated visual patterns
                  became more controlled across the website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTACT PAGE EVOLUTION
        ====================================================== */}

        <div className={styles.contactEvolution}>
          <div className={styles.contactEvolutionIntro}>
            <div>
              <span>Second Comparison</span>

              <h3>
                The redesign extended
                <em> beyond the homepage.</em>
              </h3>
            </div>

            <p>
              The same visual refinement carried into the contact experience,
              helping the site feel like one cohesive system rather than a
              collection of independently styled pages.
            </p>
          </div>

          <div className={styles.contactComparison}>
            <div>
              <div className={styles.smallVersionLabel}>
                <span>Before</span>
                <p>Original Contact Page</p>
              </div>

              <div className={styles.contactImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/contact-old.jpg"
                  alt="Original InspectionPal contact page design"
                  width={1200}
                  height={1800}
                  className={styles.redesignImage}
                />
              </div>
            </div>

            <div className={styles.contactComparisonMark}>
              <span>→</span>
            </div>

            <div>
              <div className={styles.smallVersionLabel}>
                <span>After</span>
                <p>Current Contact Page</p>
              </div>

              <div className={styles.contactImageFrame}>
                <Image
                  src="/images/projects/inspectionpal/contact-current.jpg"
                  alt="Current InspectionPal contact page design"
                  width={1200}
                  height={1800}
                  className={styles.redesignImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <div className={styles.redesignStatement}>
          <span className={styles.redesignStatementNumber}>08</span>

          <div>
            <p>Months Later</p>

            <h3>
              The redesign wasn&apos;t about replacing the concept.
              <span>
                It was about bringing the execution up to the level of the idea.
              </span>
            </h3>
          </div>
        </div>

        {/* =====================================================
            REFLECTION
        ====================================================== */}

        <div className={styles.redesignReflection}>
          <span>Design Maturity</span>

          <p>
            Revisiting earlier work is part of the process.
            <strong>
              Being able to recognize what still works, what no longer does and
              where better judgement can improve the result is just as valuable
              as designing something new.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPRedesign;
