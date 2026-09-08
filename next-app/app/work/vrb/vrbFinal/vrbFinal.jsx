import Link from 'next/link';
import styles from './vrbFinal.module.css';

const VRBFinal = () => {
  return (
    <section className={styles.operationsWrapUp}>
      <div className={styles.wrapUpMonogram} aria-hidden="true">
        VB
      </div>

      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.wrapUpMeta}>
          <span>06</span>
          <p>Project Wrap-Up</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.wrapUpIntro}>
          <div>
            <p className={styles.wrapUpEyebrow}>
              Built to Fit, Not Built to Sell
            </p>

            <h2>
              Useful because it fits
              <span> the way I work.</span>
            </h2>
          </div>

          <div className={styles.wrapUpIntroCopy}>
            <p className={styles.wrapUpLead}>
              This was never meant to become another all-purpose business
              platform.
            </p>

            <p>
              It only needed to solve my problems well: keep the information I
              rely on together, remove repetitive work, handle the financial
              situations I actually encounter and give me complete control over
              the system behind it.
            </p>
          </div>
        </div>

        {/* =====================================================
            SYSTEM ECOSYSTEM
        ====================================================== */}

        <div className={styles.operationsEcosystem}>
          <div className={styles.operationsEcosystemHeader}>
            <span>Inside the System</span>

            <p>One internal tool, several parts of the business</p>
          </div>

          <div className={styles.operationsEcosystemGrid}>
            <article>
              <span>01</span>
              <p>Client Records</p>
            </article>

            <article>
              <span>02</span>
              <p>Invoices</p>
            </article>

            <article>
              <span>03</span>
              <p>Payments</p>
            </article>

            <article>
              <span>04</span>
              <p>Receipts</p>
            </article>

            <article>
              <span>05</span>
              <p>Services</p>
            </article>

            <article>
              <span>06</span>
              <p>Todos</p>
            </article>

            <article>
              <span>07</span>
              <p>Social Calendar</p>
            </article>

            <article>
              <span>08</span>
              <p>Instagram Checklist</p>
            </article>

            <article>
              <span>09</span>
              <p>Templates</p>
            </article>

            <article>
              <span>10</span>
              <p>CSV Export</p>
            </article>
          </div>
        </div>

        {/* =====================================================
            WHAT THIS PROJECT DEMONSTRATES
        ====================================================== */}

        <div className={styles.wrapUpCapabilities}>
          <div className={styles.wrapUpCapabilitiesHeading}>
            <span>What This Project Demonstrates</span>

            <h3>
              Design decisions,
              <em> connected to working systems.</em>
            </h3>
          </div>

          <div className={styles.wrapUpCapabilitiesGrid}>
            <article>
              <span>Design</span>

              <h4>Workflow + Information Design</h4>

              <p>
                Turning business operations into interfaces that keep global
                information, client context and financial data understandable.
              </p>
            </article>

            <article>
              <span>Engineering</span>

              <h4>Full-Stack Application Logic</h4>

              <p>
                Building the interface, calculations, persistent data and
                workflows behind clients, invoices, payments and operational
                records.
              </p>
            </article>

            <article>
              <span>Systems</span>

              <h4>Connected Data</h4>

              <p>
                Structuring related records so the application can move between
                business-level views and individual client context.
              </p>
            </article>

            <article>
              <span>Product</span>

              <h4>Real-World Adaptation</h4>

              <p>
                Extending the tool when actual business needs introduced
                receipts, supplier costs, physical products and less tidy
                payment scenarios.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            WHY CUSTOM SOFTWARE
        ====================================================== */}

        <div className={styles.customSoftwareStatement}>
          <div className={styles.customSoftwareNumber}>
            <span>OWN</span>
          </div>

          <div className={styles.customSoftwareContent}>
            <span>Why I Kept It Custom</span>

            <h3>
              No subscription.
              <span>No borrowed workflow.</span>
              <em>No dependency on someone else&apos;s product.</em>
            </h3>

            <div className={styles.customSoftwareCopy}>
              <p>
                Building the application myself gives me control over how it
                works, how it looks and how it changes. If I need something
                different, I can change the system instead of changing the way
                I run the business.
              </p>

              <p>
                It also means the information remains mine. I am not relying on
                a subscription continuing forever or another platform deciding
                which features and data I can access.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <div className={styles.wrapUpStatement}>
          <span>Project Reflection</span>

          <p>
            The value of this project isn&apos;t that I recreated existing
            business software.
            <strong>
              It&apos;s that I recognized exactly what I needed, designed a
              system around those needs, engineered it, and now use it to run
              my business.
            </strong>
          </p>
        </div>

        {/* =====================================================
            SCOPE SUMMARY
        ====================================================== */}

        <div className={styles.wrapUpScope}>
          <div>
            <span>01</span>
            <strong>Designed</strong>
            <p>Interface · hierarchy · workflows</p>
          </div>

          <div>
            <span>02</span>
            <strong>Engineered</strong>
            <p>Next.js · Node · MongoDB · application logic</p>
          </div>

          <div>
            <span>03</span>
            <strong>Operated</strong>
            <p>Used regularly for real business administration</p>
          </div>

          <div>
            <span>04</span>
            <strong>Extended</strong>
            <p>Adapted as new operational needs appeared</p>
          </div>
        </div>

        {/* =====================================================
            FINAL QUOTE
        ====================================================== */}

        <div className={styles.wrapUpFinal}>
          <p>
            I didn&apos;t build software and then look for a use for it.
          </p>

          <strong>
            I had a workflow,
            <em> and built the software it needed.</em>
          </strong>
        </div>

        {/* =====================================================
            NEXT PROJECT
        ====================================================== */}

        <div className={styles.nextProject}>
          <div className={styles.nextProjectMeta}>
            <span>Continue</span>
            <p>Next Case Study</p>
          </div>

          <Link
            href="/work/yoda-safety-services"
            className={styles.nextProjectLink}
          >
            <div>
              <span>01 / Selected Work</span>

              <h3>
                Yoda Safety
                <em> Services</em>
              </h3>

              <p>
                Designing and engineering a production online training
                platform across individual, company and administrative
                workflows.
              </p>
            </div>

            <span className={styles.nextProjectArrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VRBFinal;