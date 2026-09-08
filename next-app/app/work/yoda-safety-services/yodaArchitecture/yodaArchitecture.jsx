import styles from "./yodaArchitecture.module.css";

const YodaArchitecture = () => {
  return (
    <section className={styles.architecture}>
      <div className={styles.inner}>
        {/* =====================================================
        SECTION HEADER
    ====================================================== */}

        <div className={styles.architectureMeta}>
          <span>02</span>
          <p>Product Architecture</p>
        </div>

        <div className={styles.architectureIntro}>
          <div>
            <p className={styles.architectureEyebrow}>Designing the system</p>

            <h2>
              One platform.
              <span> Different responsibilities.</span>
            </h2>
          </div>

          <div className={styles.architectureIntroCopy}>
            <p className={styles.architectureLead}>
              The challenge wasn&apos;t simply deciding which pages to build. It
              was deciding which information, actions and permissions belonged
              to each user context.
            </p>

            <p>
              Starting from functional requirements, I identified the different
              ways people would interact with the platform and structured the
              application around those responsibilities, while leaving room for
              new functionality to be introduced over time.
            </p>
          </div>
        </div>

        {/* =====================================================
        DECISION 01 — MANAGER CONTEXT
    ====================================================== */}

        <div className={styles.contextDecision}>
          <div className={styles.decisionIntro}>
            <span className={styles.decisionNumber}>01</span>

            <p className={styles.decisionLabel}>Context Separation</p>

            <h3>
              Separate the contexts,
              <em> not the account.</em>
            </h3>

            <p>
              A company manager is also a learner. Instead of combining personal
              training and company administration into one interface, I kept
              those experiences intentionally distinct while making both
              available through the same account.
            </p>

            <div className={styles.decisionReason}>
              <span aria-hidden="true">↳</span>

              <p>
                A clear boundary reduces the chance of users confusing personal
                training actions with decisions that affect an entire company.
              </p>
            </div>
          </div>

          <div className={styles.managerDiagram}>
            <div className={styles.diagramAccount}>
              <span>Account</span>
              <strong>Company Manager</strong>
            </div>

            <div className={styles.diagramStem} aria-hidden="true" />

            <div className={styles.diagramBranches}>
              <article className={styles.contextCard}>
                <div className={styles.contextCardTop}>
                  <span>01 / Personal Context</span>
                  <span className={styles.contextStatus}>Learner</span>
                </div>

                <h4>User Dashboard</h4>

                <p>
                  Everything the manager needs when completing their own
                  training.
                </p>

                <ul>
                  <li>Take assigned training</li>
                  <li>Continue courses</li>
                  <li>Track personal progress</li>
                  <li>Access certificates</li>
                  <li>Complete forms</li>
                </ul>
              </article>

              <article className={styles.contextCard}>
                <div className={styles.contextCardTop}>
                  <span>02 / Company Context</span>
                  <span className={styles.contextStatus}>Manager</span>
                </div>

                <h4>Company Dashboard</h4>

                <p>
                  A separate workspace for decisions and actions that affect the
                  organization.
                </p>

                <ul>
                  <li>Manage employees</li>
                  <li>Track company training</li>
                  <li>Send training reminders</li>
                  <li>Purchase courses</li>
                  <li>Manage forms and manuals</li>
                </ul>
              </article>
            </div>

            <div className={styles.sameAccountNote}>
              <span>Same identity</span>
              <span aria-hidden="true">→</span>
              <span>Different responsibilities</span>
            </div>
          </div>
        </div>

        {/* =====================================================
        DECISION 02 — ROLE / PERMISSION MODEL
    ====================================================== */}

        <div className={styles.permissionSection}>
          <div className={styles.permissionHeading}>
            <div>
              <span className={styles.decisionNumber}>02</span>

              <p className={styles.decisionLabel}>Role-Based Access</p>

              <h3>
                The interface changes with
                <em> responsibility.</em>
              </h3>
            </div>

            <p>
              Each context exposes the tools and information relevant to that
              person&apos;s role rather than presenting every capability to
              every user.
            </p>
          </div>

          <div className={styles.roleGrid}>
            <article className={styles.roleCard}>
              <div className={styles.roleTop}>
                <span>01</span>
                <span className={styles.roleBadge}>Production</span>
              </div>

              <h4>Individual</h4>

              <p className={styles.roleType}>Personal Training</p>

              <ul>
                <li>Courses + progress</li>
                <li>Certificates</li>
                <li>Assigned forms</li>
                <li>Personal account</li>
              </ul>
            </article>

            <article className={styles.roleCard}>
              <div className={styles.roleTop}>
                <span>02</span>
                <span className={styles.roleBadge}>Production</span>
              </div>

              <h4>Company</h4>

              <p className={styles.roleType}>Organization Management</p>

              <ul>
                <li>Employees + training</li>
                <li>Course purchasing</li>
                <li>Reminders + oversight</li>
                <li>Forms + manuals</li>
              </ul>
            </article>

            <article className={styles.roleCard}>
              <div className={styles.roleTop}>
                <span>03</span>
                <span className={styles.roleBadge}>Production</span>
              </div>

              <h4>Admin</h4>

              <p className={styles.roleType}>Platform Administration</p>

              <ul>
                <li>Users + companies</li>
                <li>Courses + training content</li>
                <li>Forms + manuals</li>
                <li>Newsletters + products</li>
                <li>Account support</li>
              </ul>
            </article>

            <article className={`${styles.roleCard} ${styles.roleCardFuture}`}>
              <div className={styles.roleTop}>
                <span>04</span>
                <span
                  className={`${styles.roleBadge} ${styles.roleBadgeFuture}`}
                >
                  In Development
                </span>
              </div>

              <h4>Subcontractor</h4>

              <p className={styles.roleType}>Permission-Limited Access</p>

              <ul>
                <li>External company access</li>
                <li>Selected forms</li>
                <li>Selected manuals</li>
                <li>Revocable permissions</li>
              </ul>
            </article>
          </div>
        </div>

        {/* =====================================================
        DECISION 03 — GROWTH
    ====================================================== */}

        <div className={styles.growthSection}>
          <div className={styles.growthHeading}>
            <div>
              <span className={styles.decisionNumber}>03</span>

              <p className={styles.decisionLabel}>Designing for Change</p>
            </div>

            <h3>
              The dashboards were never treated as
              <em> finished screens.</em>
            </h3>
          </div>

          <div className={styles.growthContent}>
            <div className={styles.growthTimeline}>
              <article className={styles.growthItem}>
                <div className={styles.growthMarker}>
                  <span>01</span>
                </div>

                <div>
                  <p className={styles.growthLabel}>Core Training</p>

                  <h4>Establish the foundation.</h4>

                  <p>
                    Training, certificates, company management and distinct
                    dashboards established the initial product structure.
                  </p>
                </div>
              </article>

              <article className={styles.growthItem}>
                <div className={styles.growthMarker}>
                  <span>02</span>
                </div>

                <div>
                  <p className={styles.growthLabel}>Expanded Workflows</p>

                  <h4>Add functionality without losing hierarchy.</h4>

                  <p>
                    Digital forms were introduced later, requiring new user,
                    company and administrative workflows across the existing
                    platform.
                  </p>
                </div>
              </article>

              <article className={styles.growthItem}>
                <div className={styles.growthMarker}>
                  <span>03</span>
                </div>

                <div>
                  <p className={styles.growthLabel}>New Access Models</p>

                  <h4>Extend the permission model.</h4>

                  <p>
                    Subcontractor access builds on the same architecture with a
                    deliberately limited context for external users who only
                    need selected company resources.
                  </p>
                </div>
              </article>
            </div>

            <aside className={styles.growthOutcome}>
              <p className={styles.growthOutcomeLabel}>Architectural Payoff</p>

              <blockquote>
                New functionality could be introduced without collapsing the
                existing information hierarchy.
              </blockquote>

              <p>
                The dashboards have continued to evolve as requirements have
                grown. Structuring the product around distinct user contexts and
                modular interface areas made that evolution easier to
                accommodate.
              </p>

              <div className={styles.growthPrinciple}>
                <span aria-hidden="true">✦</span>

                <p>
                  Build for today&apos;s requirements without assuming
                  today&apos;s requirements are permanent.
                </p>
              </div>
            </aside>
          </div>
        </div>

        <div className={styles.architectureMark} aria-hidden="true">
          VB
        </div>
      </div>
    </section>
  );
};

export default YodaArchitecture;
