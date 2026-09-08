import Image from 'next/image';
import styles from './vrbBusiness.module.css';

const VRBBusiness = () => {
  return (
    <section className={styles.structureSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.structureMeta}>
          <span>02</span>
          <p>Information + Data Structure</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.structureIntro}>
          <div>
            <p className={styles.structureEyebrow}>
              One Place to Run the Business
            </p>

            <h2>
              Overview first.
              <span> Context when I need it.</span>
            </h2>
          </div>

          <div className={styles.structureIntroCopy}>
            <p className={styles.structureLead}>
              I didn&apos;t want to hunt through separate tools every time I
              needed information about the business or a client.
            </p>

            <p>
              The system gives me a high-level operational view from the main
              dashboard, then lets me move into an individual client record
              when I need the details behind those numbers.
            </p>
          </div>
        </div>

        {/* =====================================================
            TWO LEVELS
        ====================================================== */}

        <div className={styles.structureLevels}>
          <div className={styles.structureLevelsHeader}>
            <span>Interface Structure</span>

            <p>Two levels of information</p>
          </div>

          <div className={styles.structureLevelGrid}>
            <article className={styles.structureLevel}>
              <div className={styles.structureLevelNumber}>
                01
              </div>

              <div className={styles.structureLevelContent}>
                <span>Business Level</span>

                <h3>
                  What needs my
                  <em> attention overall?</em>
                </h3>

                <p>
                  The main dashboard surfaces business-wide information such as
                  clients, todos, invoiced totals, payments and outstanding
                  balances alongside shortcuts into the tools I use regularly.
                </p>

                <div className={styles.structureLevelTags}>
                  <span>Clients</span>
                  <span>Todos</span>
                  <span>Invoiced</span>
                  <span>Paid</span>
                  <span>Unpaid</span>
                </div>
              </div>
            </article>

            <div className={styles.structureLevelArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <article className={styles.structureLevel}>
              <div className={styles.structureLevelNumber}>
                02
              </div>

              <div className={styles.structureLevelContent}>
                <span>Client Level</span>

                <h3>
                  What belongs to
                  <em> this relationship?</em>
                </h3>

                <p>
                  Opening a client brings the information connected to that
                  company into one context, including its financial summary,
                  invoices, payments, proposals, todos and meetings.
                </p>

                <div className={styles.structureLevelTags}>
                  <span>Invoices</span>
                  <span>Payments</span>
                  <span>Proposals</span>
                  <span>Todos</span>
                  <span>Meetings</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            CLIENT RECORD
        ====================================================== */}

        <div className={styles.clientRecord}>
          <div className={styles.clientRecordHeading}>
            <div>
              <span>Client Workspace</span>

              <h3>
                One client.
                <em> Connected records.</em>
              </h3>
            </div>

            <p>
              Instead of treating invoices, payments and tasks as isolated
              records, the interface keeps the relevant information grouped
              around the client it belongs to.
            </p>
          </div>

          <div className={styles.clientRecordFeature}>
            <div className={styles.clientRecordBrowser}>
              <div className={styles.clientRecordBrowserBar}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <p>VRB / Client</p>

                <span />
              </div>

              <Image
                src="/images/projects/vrb-operations/client-workspace.jpg"
                alt="Internal VRB client workspace showing connected business records"
                width={1600}
                height={1100}
                className={styles.clientRecordImage}
              />
            </div>

            <div className={styles.clientRecordNotes}>
              <article>
                <span>01</span>

                <div>
                  <strong>Financial state first</strong>

                  <p>
                    Total invoiced, paid and unpaid amounts are surfaced at the
                    top so I can understand the client&apos;s financial state
                    before opening individual records.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <strong>Work stays in context</strong>

                  <p>
                    Payments, invoices, proposals, todos and meetings remain
                    accessible from the same client workspace.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <strong>Actions live beside information</strong>

                  <p>
                    New payments, proposals, todos and meetings can be created
                    from the context where I am already working.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* =====================================================
            DATA RELATIONSHIPS
        ====================================================== */}

        <div className={styles.dataRelationships}>
          <div className={styles.dataRelationshipsHeading}>
            <span>Under the Interface</span>

            <h3>
              The UI follows
              <em> the data relationships.</em>
            </h3>
          </div>

          <div className={styles.relationshipDiagram}>
            <div className={styles.relationshipClient}>
              <span>Parent Record</span>
              <strong>Client</strong>
              <p>MongoDB document</p>
            </div>

            <div
              className={styles.relationshipConnector}
              aria-hidden="true"
            >
              <span />
            </div>

            <div className={styles.relationshipChildren}>
              <article>
                <span>01</span>
                <strong>Invoices</strong>
                <p>clientId</p>
              </article>

              <article>
                <span>02</span>
                <strong>Payments</strong>
                <p>clientId</p>
              </article>

              <article>
                <span>03</span>
                <strong>Proposals</strong>
                <p>clientId</p>
              </article>

              <article>
                <span>04</span>
                <strong>Todos</strong>
                <p>clientId</p>
              </article>

              <article>
                <span>05</span>
                <strong>Meetings</strong>
                <p>clientId</p>
              </article>
            </div>
          </div>

          <div className={styles.relationshipExplanation}>
            <span>Implementation</span>

            <p>
              MongoDB records are connected through IDs, allowing the
              application to retrieve the information associated with a client
              and compose it into one useful workspace.
            </p>
          </div>
        </div>

        {/* =====================================================
            GLOBAL VS CONTEXTUAL
        ====================================================== */}

        <div className={styles.contextDecision}>
          <div className={styles.contextDecisionNumber}>
            <span>01</span>
            <p>Design Decision</p>
          </div>

          <div className={styles.contextDecisionContent}>
            <h3>
              Global when I&apos;m managing the business.
              <span>
                Contextual when I&apos;m managing a client.
              </span>
            </h3>

            <p>
              The same underlying information can serve different purposes
              depending on where I am in the application. The main dashboard
              helps me scan the business as a whole, while the client workspace
              narrows the interface to one relationship.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.structurePrinciple}>
          <span>System Principle</span>

          <p>
            The database connects the records.
            <strong>
              The interface turns those relationships into context.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRBBusiness;