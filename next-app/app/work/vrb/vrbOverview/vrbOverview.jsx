import Image from 'next/image';
import styles from './vrbOverview.module.css';

const VRBOverview = () => {
  return (
    <section className={styles.operationsOverview}>
      <div className={styles.operationsMonogram} aria-hidden="true">
        VB
      </div>

      <div className={styles.inner}>
        {/* =====================================================
            PROJECT META
        ====================================================== */}

        <div className={styles.operationsMeta}>
          <div>
            <span>03</span>
            <p>Selected Work</p>
          </div>

          <p>Design + Development / Internal Tool</p>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className={styles.operationsHero}>
          <div className={styles.operationsHeading}>
            <p className={styles.operationsEyebrow}>
              Internal Product / Design Engineering
            </p>

            <h1>
              VRB Business
              <span>Operations</span>
            </h1>
          </div>

          <div className={styles.operationsHeroCopy}>
            <p className={styles.operationsLead}>
              I needed a business tool.
              <strong> So I built my own.</strong>
            </p>

            <p>
              Rather than adapting my workflow to subscription software, I
              designed and developed a private internal system around the way I
              actually run my business.
            </p>
          </div>
        </div>

        {/* =====================================================
            DETAILS
        ====================================================== */}

        <div className={styles.operationsDetails}>
          <div>
            <span>Role</span>
            <p>Designer + Developer</p>
          </div>

          <div>
            <span>Product</span>
            <p>Internal Business Tool</p>
          </div>

          <div>
            <span>Technology</span>
            <p>Next.js · Node · MongoDB</p>
          </div>

          <div>
            <span>Use</span>
            <p>Active · Personal Business</p>
          </div>
        </div>

        {/* =====================================================
            DASHBOARD FEATURE
        ====================================================== */}

        <div className={styles.operationsFeature}>
          <div className={styles.operationsFeatureHeader}>
            <div>
              <span>Business Overview</span>
              <p>Private administration dashboard</p>
            </div>

            <p>
              One place to see the information and tools I regularly need to
              manage the operational side of my business.
            </p>
          </div>

          <div className={styles.operationsBrowser}>
            <div className={styles.operationsBrowserBar}>
              <div className={styles.operationsBrowserDots}>
                <span />
                <span />
                <span />
              </div>

              <p>VRB / Dashboard</p>

              <span />
            </div>

            <div className={styles.operationsScreenshot}>
              <Image
                src="/images/projects/vrb-operations/dashboard.jpg"
                alt="VRB Business Operations internal dashboard"
                width={1600}
                height={1000}
                className={styles.operationsImage}
                priority
              />
            </div>
          </div>

          <div className={styles.operationsImageMeta}>
            <div>
              <span>01</span>
              <p>Operational Overview</p>
            </div>

            <div>
              <span>Private Tool</span>
              <p>
                Client and financial information is obscured throughout this
                case study.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY BUILD IT
        ====================================================== */}

        <div className={styles.operationsContext}>
          <div className={styles.operationsContextHeading}>
            <span>Why Build It?</span>

            <h2>
              Software shaped around
              <em> my workflow.</em>
            </h2>
          </div>

          <div className={styles.operationsContextContent}>
            <p className={styles.operationsContextLead}>
              I wanted control over the system I relied on to manage my
              business.
            </p>

            <p>
              I didn&apos;t want another subscription, I wanted my business
              information to remain under my control, and I knew I could build
              something more specific to the way I work than an off-the-shelf
              platform.
            </p>

            <p>
              The result became a practical internal product that I use
              regularly, particularly for creating invoices and managing
              client-related information.
            </p>
          </div>
        </div>

        {/* =====================================================
            SYSTEM SCOPE
        ====================================================== */}

        <div className={styles.operationsScope}>
          <div className={styles.operationsScopeHeader}>
            <span>Built Around the Business</span>

            <p>
              Not a collection of demos. One working system.
            </p>
          </div>

          <div className={styles.operationsScopeGrid}>
            <article>
              <span>01</span>
              <p>Clients</p>
            </article>

            <article>
              <span>02</span>
              <p>Invoices + Payments</p>
            </article>

            <article>
              <span>03</span>
              <p>Services</p>
            </article>

            <article>
              <span>04</span>
              <p>Todos</p>
            </article>

            <article>
              <span>05</span>
              <p>Social Planning</p>
            </article>

            <article>
              <span>06</span>
              <p>Templates</p>
            </article>
          </div>
        </div>

        {/* =====================================================
            OWNERSHIP
        ====================================================== */}

        <div className={styles.operationsOwnership}>
          <div className={styles.operationsOwnershipNumber}>
            <span>01</span>
          </div>

          <div className={styles.operationsOwnershipCopy}>
            <span>Product Perspective</span>

            <h3>
              The user, designer and developer
              <em> were the same person.</em>
            </h3>

            <p>
              That made the feedback loop unusually direct. I could identify
              something I needed while running the business, decide how it
              should fit into the existing workflow, build it and immediately
              use it in real work.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.operationsPrinciple}>
          <span>Project Principle</span>

          <p>
            Why adapt my workflow to someone else&apos;s software
            <strong> when I could build software around my workflow?</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRBOverview;