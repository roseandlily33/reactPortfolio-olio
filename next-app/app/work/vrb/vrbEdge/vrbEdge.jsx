import Image from "next/image";
import styles from "./vrbEdge.module.css";

const VRBEdge = () => {
  return (
    <section className={styles.edgeCasesSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.edgeCasesMeta}>
          <span>05</span>
          <p>Payments + Edge Cases</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.edgeCasesIntro}>
          <div>
            <p className={styles.edgeCasesEyebrow}>
              Designing for Real Transactions
            </p>

            <h2>
              The happy path
              <span> wasn&apos;t enough.</span>
            </h2>
          </div>

          <div className={styles.edgeCasesIntroCopy}>
            <p className={styles.edgeCasesLead}>
              An invoice is rarely just created, paid once and forgotten.
            </p>

            <p>
              As I used the system for real client work, the financial workflow
              had to support partial payments, multiple payment records,
              overpayments, receipts and changes made after an invoice was
              originally created.
            </p>
          </div>
        </div>

        {/* =====================================================
            IDEAL VS REAL
        ====================================================== */}

        <div className={styles.paymentReality}>
          <div className={styles.paymentRealityHeader}>
            <span>Expected Flow</span>
            <p>Then real payments happened</p>
          </div>

          <div className={styles.paymentRealityGrid}>
            <article className={styles.paymentIdeal}>
              <div className={styles.paymentRealityLabel}>
                <span>Ideal</span>
                <p>Simple state</p>
              </div>

              <div className={styles.paymentSimpleFlow}>
                <div>
                  <span>01</span>
                  <strong>Invoice</strong>
                </div>

                <span aria-hidden="true">→</span>

                <div>
                  <span>02</span>
                  <strong>Paid</strong>
                </div>
              </div>
            </article>

            <article className={styles.paymentActual}>
              <div className={styles.paymentRealityLabel}>
                <span>Reality</span>
                <p>State changes over time</p>
              </div>

              <div className={styles.paymentActualFlow}>
                <div>
                  <span>01</span>
                  <strong>Invoice</strong>
                  <p>Created</p>
                </div>

                <div className={styles.paymentFlowLine}>
                  <span />
                </div>

                <div>
                  <span>02</span>
                  <strong>Payment</strong>
                  <p>Partial</p>
                </div>

                <div className={styles.paymentFlowLine}>
                  <span />
                </div>

                <div>
                  <span>03</span>
                  <strong>Payment</strong>
                  <p>Remaining amount</p>
                </div>

                <div className={styles.paymentFlowLine}>
                  <span />
                </div>

                <div>
                  <span>04</span>
                  <strong>Receipt</strong>
                  <p>Recorded</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            PAYMENT WORKFLOW
        ====================================================== */}

        <div className={styles.paymentWorkflow}>
          <div className={styles.paymentWorkflowHeading}>
            <div>
              <span>Payment Records</span>

              <h3>
                Payments belong to
                <em> the invoice history.</em>
              </h3>
            </div>

            <p>
              I manually record each payment, including how it was received, and
              attach it to the relevant invoice. That gives the invoice a
              payment history instead of reducing everything to a single
              paid-or-unpaid flag.
            </p>
          </div>

          <div className={styles.paymentWorkflowGrid}>
            <article>
              <span>01</span>

              <strong>Invoice Created</strong>

              <p>
                The invoice receives a sequential invoice number and begins with
                its calculated total.
              </p>
            </article>

            <div className={styles.paymentWorkflowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>02</span>

              <strong>Payment Recorded</strong>

              <p>
                I enter the payment amount and payment method and associate it
                with the invoice.
              </p>
            </article>

            <div className={styles.paymentWorkflowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>03</span>

              <strong>Balance Updates</strong>

              <p>
                The invoice can represent the remaining amount after one or
                several payments.
              </p>
            </article>

            <div className={styles.paymentWorkflowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>04</span>

              <strong>Receipt</strong>

              <p>
                Receipt functionality was added later when the workflow needed a
                client-facing payment record.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            EDGE CASES
        ====================================================== */}

        <div className={styles.edgeCaseExamples}>
          <div className={styles.edgeCaseExamplesHeading}>
            <span>What the Workflow Had to Handle</span>

            <h3>
              Not exceptions anymore.
              <em> Just part of the system.</em>
            </h3>
          </div>

          <div className={styles.edgeCaseGrid}>
            <article>
              <div className={styles.edgeCaseNumber}>01</div>

              <span>Partial Payments</span>

              <h4>One invoice can have more than one payment.</h4>

              <p>
                Instead of assuming a payment closes the invoice, the system
                keeps the transaction open until the remaining balance has
                actually been resolved.
              </p>
            </article>

            <article>
              <div className={styles.edgeCaseNumber}>02</div>

              <span>Overpayments</span>

              <h4>The balance can move past zero.</h4>

              <p>
                A client can pay slightly more than the invoice total. Rather
                than forcing that amount into a clean paid state, the invoice
                can preserve the resulting balance.
              </p>
            </article>

            <article>
              <div className={styles.edgeCaseNumber}>03</div>

              <span>Editable Invoices</span>

              <h4>Created doesn&apos;t always mean finished.</h4>

              <p>
                Certain invoice details can still be edited after creation,
                allowing the document to reflect legitimate changes without
                rebuilding it from scratch.
              </p>
            </article>

            <article>
              <div className={styles.edgeCaseNumber}>04</div>

              <span>Receipts</span>

              <h4>A later requirement became part of the workflow.</h4>

              <p>
                Receipt generation was added after the original version of the
                application when real use made that output useful.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            AUTOMATION VS CONTROL
        ====================================================== */}

        <div className={styles.controlBalance}>
          <div className={styles.controlBalanceHeading}>
            <span>Automation vs. Control</span>

            <h3>
              Automate the math.
              <em> Keep control of the judgement.</em>
            </h3>
          </div>

          <div className={styles.controlBalanceGrid}>
            <article className={styles.controlAutomated}>
              <span>Automatic</span>

              <div>
                <p>Sequential invoice numbers</p>
                <p>Subtotal calculations</p>
                <p>Tax calculations</p>
                <p>Invoice totals</p>
                <p>Balance recalculation</p>
              </div>
            </article>

            <article className={styles.controlManual}>
              <span>Manual</span>

              <div>
                <p>Recording payments</p>
                <p>Selecting payment method</p>
                <p>Changing invoice status</p>
                <p>Reviewing edits</p>
              </div>
            </article>
          </div>

          <div className={styles.controlBalanceCopy}>
            <span>Why Keep Anything Manual?</span>

            <p>
              This is a private tool built for one person. I don&apos;t need to
              automate every decision simply because I can. Calculations and
              repetitive identifiers are good candidates for automation, while
              status changes and payment entry are areas where I prefer direct
              control.
            </p>
          </div>
        </div>

        {/* =====================================================
            PAYMENT SCREEN
        ====================================================== */}

        <div className={styles.paymentScreenFeature}>
          <div className={styles.paymentScreenHeading}>
            <div>
              <span>Transaction History</span>

              <h3>
                The invoice becomes
                <em> a record over time.</em>
              </h3>
            </div>

            <p>
              The generated invoice can show its payment history, paid amount
              and remaining balance, making the final document reflect what has
              actually happened rather than only its original total.
            </p>
          </div>

          <div className={styles.paymentScreenGrid}>
            <div className={styles.paymentScreenBrowser}>
              <div className={styles.paymentScreenBrowserBar}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <p>VRB / Invoice</p>

                <span />
              </div>

              <Image
                src="/images/projects/vrb-operations/invoice-payment-history.jpg"
                alt="Generated invoice showing payment history and balance"
                width={1300}
                height={1600}
                className={styles.paymentScreenImage}
              />
            </div>

            <div className={styles.paymentScreenNotes}>
              <article>
                <span>01</span>

                <div>
                  <strong>Payment history</strong>

                  <p>
                    Individual payment records remain associated with the
                    invoice instead of disappearing into a single status.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <strong>Running balance</strong>

                  <p>
                    The displayed balance reflects what has actually been paid
                    against the invoice.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <strong>Document stays useful</strong>

                  <p>
                    The same invoice view can continue representing the
                    transaction as its payment state changes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESIGN ENGINEERING DECISION
        ====================================================== */}

        <div className={styles.edgeCaseDecision}>
          <div className={styles.edgeCaseDecisionNumber}>
            <span>04</span>
            <p>Design Engineering Decision</p>
          </div>

          <div className={styles.edgeCaseDecisionContent}>
            <h3>
              Model what happened.
              <span> Not what should have happened.</span>
            </h3>

            <p>
              The more I used the application, the more important it became to
              preserve the real state of a transaction. Multiple payments,
              overpayments and later edits are not errors to hide. They are
              information the system needs to represent accurately.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.edgeCasesPrinciple}>
          <span>System Principle</span>

          <p>
            Real business data is rarely perfectly tidy.
            <strong> The interface shouldn&apos;t require it to be.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRBEdge;
