import Image from 'next/image';
import styles from './vrbServices.module.css';

const VRBServices = () => {
  return (
    <section className={styles.costTrackingSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.costTrackingMeta}>
          <span>04</span>
          <p>Product Evolution + Financial Logic</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.costTrackingIntro}>
          <div>
            <p className={styles.costTrackingEyebrow}>
              When the Original Model Changed
            </p>

            <h2>
              Then a real invoice
              <span> broke my assumptions.</span>
            </h2>
          </div>

          <div className={styles.costTrackingIntroCopy}>
            <p className={styles.costTrackingLead}>
              The original invoice workflow was built around services.
            </p>

            <p>
              That worked until I purchased physical products for a client and
              needed to mark them up. Suddenly the selling price was only half
              of the information I needed.
            </p>
          </div>
        </div>

        {/* =====================================================
            BEFORE / AFTER ASSUMPTION
        ====================================================== */}

        <div className={styles.assumptionShift}>
          <div className={styles.assumptionShiftHeader}>
            <span>Changing Requirement</span>
            <p>From simple billing to tracked cost</p>
          </div>

          <div className={styles.assumptionShiftGrid}>
            <article className={styles.assumptionBefore}>
              <span>Original Model</span>

              <h3>
                Service
                <em> → Invoice</em>
              </h3>

              <div className={styles.assumptionFields}>
                <div>
                  <span>01</span>
                  <p>Name</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Description</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Price</p>
                </div>
              </div>

              <p className={styles.assumptionCaption}>
                Enough for the service-based work I was originally invoicing.
              </p>
            </article>

            <div className={styles.assumptionArrow} aria-hidden="true">
              →
            </div>

            <article className={styles.assumptionAfter}>
              <span>New Requirement</span>

              <h3>
                Product
                <em> → Cost + Markup + Invoice</em>
              </h3>

              <div className={styles.assumptionFields}>
                <div>
                  <span>01</span>
                  <p>Supplier Cost</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Client Price</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Profit</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Supplier Payment</p>
                </div>
              </div>

              <p className={styles.assumptionCaption}>
                The invoice still needed to stay simple for the client while
                the application tracked the extra business logic privately.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            INTERNAL COST TRACKING SCREEN
        ====================================================== */}

        <div className={styles.costTrackingFeature}>
          <div className={styles.costTrackingHeading}>
            <div>
              <span>Internal Cost Tracking</span>

              <h3>
                One transaction.
                <em> Two different views.</em>
              </h3>
            </div>

            <p>
              The client only needs to see what they are being charged. I still
              need to know what I paid, what was marked up and what the work
              actually earned.
            </p>
          </div>

          <div className={styles.costTrackingFeatureGrid}>
            <div className={styles.costTrackingBrowser}>
              <div className={styles.costTrackingBrowserBar}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <p>VRB / Invoice Builder</p>

                <span />
              </div>

              <Image
                src="/images/projects/vrb-operations/invoice-cost-tracking.jpg"
                alt="Internal invoice cost tracking and profit calculations"
                width={1600}
                height={1100}
                className={styles.costTrackingImage}
              />
            </div>

            <div className={styles.costTrackingNotes}>
              <article>
                <span>01</span>

                <div>
                  <strong>Supplier cost</strong>

                  <p>
                    The amount I actually paid can be tracked separately from
                    the amount charged to the client.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <strong>Markup + profit</strong>

                  <p>
                    The application can use both values when calculating the
                    financial result of a physical product sale.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <strong>Private by design</strong>

                  <p>
                    Supplier and margin information stays inside the internal
                    workflow and does not appear on the client-facing invoice.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* =====================================================
            TWO CONTEXTS
        ====================================================== */}

        <div className={styles.financialContexts}>
          <div className={styles.financialContextsHeading}>
            <span>Information Boundary</span>

            <h3>
              Same sale.
              <em> Different information needs.</em>
            </h3>
          </div>

          <div className={styles.financialContextsGrid}>
            <article className={styles.clientFinancialContext}>
              <div className={styles.contextLabel}>
                <span>Client-Facing</span>
                <p>What the client needs</p>
              </div>

              <div className={styles.contextTitle}>
                <strong>Invoice</strong>
                <span>External Document</span>
              </div>

              <div className={styles.contextItems}>
                <div>
                  <span>01</span>
                  <p>Line item</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Description</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Price</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Tax</p>
                </div>

                <div>
                  <span>05</span>
                  <p>Total</p>
                </div>
              </div>
            </article>

            <article className={styles.internalFinancialContext}>
              <div className={styles.contextLabel}>
                <span>Internal</span>
                <p>What I need to run the business</p>
              </div>

              <div className={styles.contextTitle}>
                <strong>Cost Record</strong>
                <span>Private Operational Data</span>
              </div>

              <div className={styles.contextItems}>
                <div>
                  <span>01</span>
                  <p>Supplier cost</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Supplier tax</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Selling price</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Profit</p>
                </div>

                <div>
                  <span>05</span>
                  <p>Payment state</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            LOGIC FLOW
        ====================================================== */}

        <div className={styles.costLogic}>
          <div className={styles.costLogicHeading}>
            <span>Calculation Flow</span>

            <h3>
              Track the cost without
              <em> exposing the cost.</em>
            </h3>
          </div>

          <div className={styles.costLogicDiagram}>
            <article>
              <span>01</span>
              <p>Supplier Cost</p>
            </article>

            <div aria-hidden="true">+</div>

            <article>
              <span>02</span>
              <p>Markup</p>
            </article>

            <div aria-hidden="true">→</div>

            <article className={styles.costLogicHighlight}>
              <span>03</span>
              <p>Client Price</p>
            </article>

            <div aria-hidden="true">↘</div>

            <article>
              <span>04</span>
              <p>Internal Profit</p>
            </article>
          </div>

          <div className={styles.costLogicFootnote}>
            <span>Separation of Concerns</span>

            <p>
              Client-facing pricing and private cost information belong to the
              same transaction, but they do not belong in the same interface.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESIGN + ENGINEERING DECISION
        ====================================================== */}

        <div className={styles.costTrackingDecision}>
          <div className={styles.costTrackingDecisionNumber}>
            <span>03</span>
            <p>Design Engineering Decision</p>
          </div>

          <div className={styles.costTrackingDecisionContent}>
            <h3>
              Extend the workflow.
              <span> Don&apos;t overload the document.</span>
            </h3>

            <p>
              Adding product cost tracking did not mean adding every new field
              to the invoice itself. I extended the internal data and
              calculations while keeping the client-facing document focused on
              the information the client actually needs.
            </p>
          </div>
        </div>

        {/* =====================================================
            REAL-WORLD CHANGE
        ====================================================== */}

        <div className={styles.realWorldChange}>
          <div className={styles.realWorldChangeNumber}>
            <span>REAL</span>
          </div>

          <div className={styles.realWorldChangeCopy}>
            <span>Why This Matters</span>

            <h3>
              Real use found the requirement
              <em> before a roadmap ever could.</em>
            </h3>

            <p>
              I didn&apos;t add cost tracking because I thought the application
              might need it someday. I added it when an actual client purchase
              exposed a gap in the original model.
            </p>

            <p>
              That made the change grounded in a real transaction, with real
              consequences for pricing, margin and record keeping.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.costTrackingPrinciple}>
          <span>Product Principle</span>

          <p>
            The original workflow worked
            <strong> until the business asked something new of it.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRBServices;