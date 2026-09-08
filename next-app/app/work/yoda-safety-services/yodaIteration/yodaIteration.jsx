import styles from "./yodaIteration.module.css";
import Image from "next/image";

const YodaIteration = () => {
  return (
    <section className={styles.evolutionSection}>
      <div className={styles.inner}>
        {/* =====================================================
        SECTION HEADER
    ====================================================== */}

        <div className={styles.evolutionMeta}>
          <span>06</span>
          <p>Iteration + Product Evolution</p>
        </div>

        {/* =====================================================
        INTRO
    ====================================================== */}

        <div className={styles.evolutionIntro}>
          <div>
            <p className={styles.evolutionEyebrow}>2024 → Present</p>

            <h2>
              Designed
              <span> to evolve.</span>
            </h2>
          </div>

          <div className={styles.evolutionIntroCopy}>
            <p className={styles.evolutionLead}>
              Shipping was never the end of the design process.
            </p>

            <p>
              Yoda has continued to grow as new workflows, product areas and
              requirements have been introduced. Rather than treating the
              original interface as permanent, I use implementation and
              continued testing as feedback for what should be simplified,
              separated or expanded.
            </p>
          </div>
        </div>

        {/* =====================================================
        DASHBOARD EVOLUTION
    ====================================================== */}

        <div className={styles.dashboardEvolution}>
          <div className={styles.evolutionStoryHeader}>
            <div>
              <span className={styles.storyNumber}>01</span>

              <p className={styles.evolutionLabel}>Dashboard Hierarchy</p>

              <h3>
                From showing everything
                <em> to showing what matters now.</em>
              </h3>
            </div>

            <div className={styles.evolutionStoryCopy}>
              <p>
                The original learner dashboard reflected the product that
                existed at the time: training. Three primary areas surfaced
                incomplete, completed and all available courses.
              </p>

              <p>
                As the platform expanded, that structure became less useful.
                Company training, forms and more nuanced course states
                introduced new demands on the dashboard.
              </p>
            </div>
          </div>

          <div className={styles.dashboardComparison}>
            <div className={styles.dashboardVersion}>
              <div className={styles.versionHeader}>
                <div>
                  <span>Earlier</span>
                  <strong>Course-Centric</strong>
                </div>

                <p>Initial Product</p>
              </div>

              <div className={styles.dashboardImage}>
                <Image
                  src="/images/projects/yoda/dashboard-old.jpg"
                  alt="Earlier version of the Yoda Safety Services learner dashboard"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>

              <div className={styles.versionDetails}>
                <span>Incomplete</span>
                <span>Completed</span>
                <span>All Courses</span>
              </div>
            </div>

            <div className={styles.comparisonArrow} aria-hidden="true">
              <span>→</span>
              <p>Evolved</p>
            </div>

            <div className={styles.dashboardVersion}>
              <div className={styles.versionHeader}>
                <div>
                  <span>Current</span>
                  <strong>Priority-Centric</strong>
                </div>

                <p>Expanded Product</p>
              </div>

              <div className={styles.dashboardImage}>
                <Image
                  src="/images/projects/yoda/dashboard-current.jpg"
                  alt="Current Yoda Safety Services learner dashboard"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>

              <div className={styles.versionDetails}>
                <span>Needs Attention</span>
                <span>Current Training</span>
                <span>Forms + Company Context</span>
              </div>
            </div>
          </div>

          <div className={styles.dashboardDecision}>
            <span>Design Shift</span>

            <p>
              Completed training and the full catalogue no longer need to
              dominate the dashboard. The current experience prioritizes
              incomplete or expiring training and the actions that require the
              learner&apos;s attention now.
            </p>
          </div>
        </div>

        {/* =====================================================
        FORMS ITERATION
    ====================================================== */}

        <div className={styles.formsEvolution}>
          <div className={styles.formsEvolutionHeading}>
            <span className={styles.storyNumber}>02</span>

            <p className={styles.evolutionLabel}>Workflow Iteration</p>

            <h3>
              When one screen started doing two jobs,
              <em> I separated the jobs.</em>
            </h3>
          </div>

          <div className={styles.formsEvolutionIntro}>
            <p>
              Digital forms introduced one of the most complex interaction
              problems in the platform. A reusable form template can produce
              many individual entries, which means the interface has to
              distinguish between managing the template, accessing previous
              entries and completing the form itself.
            </p>
          </div>

          <div className={styles.formsComparison}>
            {/* ORIGINAL */}

            <article className={styles.formsVersion}>
              <div className={styles.formsVersionTop}>
                <span>Original Approach</span>
                <p>Too many responsibilities</p>
              </div>

              <div className={styles.formsDiagram}>
                <div className={styles.diagramPrimary}>
                  <span>Form Experience</span>
                  <strong>Template + Completion</strong>
                </div>

                <div className={styles.diagramDivider} />

                <div className={styles.instanceStack}>
                  <span>Previous Entries</span>

                  <div>Entry 01</div>
                  <div>Entry 02</div>
                  <div>Entry 03</div>
                  <div>Entry 04</div>

                  <small>+ more as usage grows</small>
                </div>
              </div>

              <div className={styles.problemList}>
                <div>
                  <span>01</span>
                  <p>Completion and management competed for attention.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Entry volume made the screen increasingly dense.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Application state became unnecessarily difficult to manage.
                  </p>
                </div>
              </div>
            </article>

            {/* TRANSITION */}

            <div className={styles.formsTransition}>
              <span>→</span>
              <p>Test</p>
              <p>Refine</p>
              <p>Separate</p>
            </div>

            {/* REFINED */}

            <article
              className={`${styles.formsVersion} ${styles.formsVersionRefined}`}
            >
              <div className={styles.formsVersionTop}>
                <span>Refined Approach</span>
                <p>One responsibility at a time</p>
              </div>

              <div className={styles.refinedDiagram}>
                <div className={styles.refinedStep}>
                  <span>01</span>

                  <div>
                    <p>Management</p>
                    <strong>Choose what you need to do.</strong>
                  </div>
                </div>

                <div className={styles.refinedArrow}>↓</div>

                <div className={styles.refinedSplit}>
                  <div>
                    <span>02A</span>
                    <p>View Entries</p>
                  </div>

                  <div>
                    <span>02B</span>
                    <p>Access Form</p>
                  </div>
                </div>

                <div className={styles.refinedArrow}>↓</div>

                <div className={styles.refinedStep}>
                  <span>03</span>

                  <div>
                    <p>Focused Task</p>
                    <strong>
                      Complete the form without historical clutter.
                    </strong>
                  </div>
                </div>
              </div>

              <div className={styles.refinedOutcome}>
                <span>Result</span>

                <p>
                  Entry history remains available when needed without competing
                  with the primary form-completion experience.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.iterationQuote}>
            <span aria-hidden="true">“</span>

            <p>
              A scalable interface is not always the one that fits more onto a
              screen. Sometimes it is the one that knows when to separate
              responsibilities.
            </p>
          </div>
        </div>

        {/* =====================================================
        FOUNDATION / ENGINEERING EVOLUTION
    ====================================================== */}

        <div className={styles.foundationEvolution}>
          <div className={styles.foundationIntro}>
            <div>
              <span className={styles.storyNumber}>03</span>

              <p className={styles.evolutionLabel}>Engineering Evolution</p>

              <h3>
                Extend the foundation
                <em> instead of replacing it.</em>
              </h3>
            </div>

            <div>
              <p>
                The platform&apos;s core architecture has remained stable even
                as the product around it has grown. New requirements have
                expanded schemas, navigation, permissions and workflows without
                requiring the application to be repeatedly restructured.
              </p>
            </div>
          </div>

          <div className={styles.foundationTimeline}>
            <div className={styles.foundationLine} />

            <article>
              <span>01</span>
              <div className={styles.timelineDot} />
              <p>Core Training</p>
              <strong>Courses + learner accounts</strong>
            </article>

            <article>
              <span>02</span>
              <div className={styles.timelineDot} />
              <p>Company Tools</p>
              <strong>Employees + assignments + oversight</strong>
            </article>

            <article>
              <span>03</span>
              <div className={styles.timelineDot} />
              <p>Digital Forms</p>
              <strong>Templates + entries + permissions</strong>
            </article>

            <article>
              <span>04</span>
              <div className={styles.timelineDot} />
              <p>Checkout Evolution</p>
              <strong>PayPal → Stripe</strong>
            </article>

            <article>
              <span>05</span>
              <div className={styles.timelineDot} />
              <p>New Access Models</p>
              <strong>Expanded permissions + navigation</strong>
            </article>
          </div>

          <div className={styles.foundationPayoff}>
            <p>Architectural Payoff</p>

            <h3>
              The architecture became more capable
              <span> without becoming a different application.</span>
            </h3>

            <div className={styles.foundationPayoffCopy}>
              <p>
                New checks and requirements have been added as the product has
                matured, while the underlying data and application structure has
                continued to support expansion.
              </p>

              <p>
                Even a larger infrastructure change, migrating checkout from
                PayPal to Stripe, could be introduced within the existing
                product while simplifying the resulting purchase experience.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
        WHAT CHANGED IN MY PRACTICE
    ====================================================== */}

        <div className={styles.scaleSection}>
          <div className={styles.scaleHeading}>
            <p className={styles.evolutionEyebrow}>What the project changed</p>

            <h3>
              Learning what
              <span> actually scales.</span>
            </h3>
          </div>

          <div className={styles.scaleContent}>
            <p className={styles.scaleLead}>
              The biggest evolution was not learning to use reusable components
              or separate concerns. It was learning which decisions remain
              manageable as a production product keeps accumulating
              requirements.
            </p>

            <div className={styles.scaleGrid}>
              <article>
                <span>01</span>
                <h4>Anticipate edge cases</h4>
                <p>
                  Inputs and user actions are treated as unpredictable.
                  Validation, trimming and checks happen before data is trusted.
                </p>
              </article>

              <article>
                <span>02</span>
                <h4>Structure for growth</h4>
                <p>
                  Frontend, backend and file structures have evolved toward
                  patterns that remain easier to navigate as the number of
                  features grows.
                </p>
              </article>

              <article>
                <span>03</span>
                <h4>Separate complexity</h4>
                <p>
                  When a workflow becomes difficult to understand or maintain,
                  the answer is not always another condition. Sometimes a
                  responsibility belongs somewhere else.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* =====================================================
        CURRENTLY EVOLVING
    ====================================================== */}

        <div className={styles.currentEvolution}>
          <div>
            <span>Still Evolving</span>

            <h3>
              Production,
              <em> not finished.</em>
            </h3>
          </div>

          <div className={styles.currentEvolutionItems}>
            <div>
              <span>01</span>
              <p>User Dashboard</p>
              <strong>Interface refinement</strong>
            </div>

            <div>
              <span>02</span>
              <p>Training Experience</p>
              <strong>Visual + interaction refinement</strong>
            </div>

            <div>
              <span>03</span>
              <p>Component System</p>
              <strong>Documentation + Storybook</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YodaIteration;
