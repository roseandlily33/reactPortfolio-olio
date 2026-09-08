import Image from 'next/image';
import styles from './vrbWorkflow.module.css';

const VRBWorkflow = () => {
  return (
    <section className={styles.invoiceWorkflowSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.invoiceWorkflowMeta}>
          <span>03</span>
          <p>Invoice Workflow</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.invoiceWorkflowIntro}>
          <div>
            <p className={styles.invoiceWorkflowEyebrow}>
              From Service to Document
            </p>

            <h2>
              Build once.
              <span> Reuse every time.</span>
            </h2>
          </div>

          <div className={styles.invoiceWorkflowIntroCopy}>
            <p className={styles.invoiceWorkflowLead}>
              I didn&apos;t want every invoice to start from a blank form.
            </p>

            <p>
              My services are stored in the database and pulled directly into
              the invoice builder, where I can select an existing service,
              customize it for the client, calculate the totals and generate a
              finished invoice from the same workflow.
            </p>
          </div>
        </div>

        {/* =====================================================
            WORKFLOW MAP
        ====================================================== */}

        <div className={styles.invoiceFlow}>
          <div className={styles.invoiceFlowHeader}>
            <span>Workflow</span>
            <p>Saved data → working document</p>
          </div>

          <div className={styles.invoiceFlowGrid}>
            <article>
              <span>01</span>
              <p>Saved Service</p>
              <strong>Pull from MongoDB</strong>
            </article>

            <div className={styles.invoiceFlowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>02</span>
              <p>Select + Edit</p>
              <strong>Customize for the client</strong>
            </article>

            <div className={styles.invoiceFlowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>03</span>
              <p>Calculate</p>
              <strong>Subtotal · Tax · Total</strong>
            </article>

            <div className={styles.invoiceFlowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>04</span>
              <p>Generate</p>
              <strong>Create stored invoice</strong>
            </article>

            <div className={styles.invoiceFlowArrow} aria-hidden="true">
              →
            </div>

            <article>
              <span>05</span>
              <p>Print</p>
              <strong>Save as PDF + send</strong>
            </article>
          </div>
        </div>

        {/* =====================================================
            INVOICE BUILDER
        ====================================================== */}

        <div className={styles.invoiceBuilderFeature}>
          <div className={styles.invoiceBuilderHeading}>
            <div>
              <span>Invoice Builder</span>

              <h3>
                The form and the output
                <em> stay connected.</em>
              </h3>
            </div>

            <p>
              The builder combines reusable service data with invoice-specific
              information, so creating a document is mostly selecting,
              adjusting and confirming rather than re-entering the same
              information every time.
            </p>
          </div>

          <div className={styles.invoiceBuilderGrid}>
            <div className={styles.invoiceBuilderBrowser}>
              <div className={styles.invoiceBuilderBrowserBar}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <p>VRB / Create Invoice</p>

                <span />
              </div>

              <Image
                src="/images/projects/vrb-operations/invoice-builder.jpg"
                alt="VRB internal invoice builder"
                width={1600}
                height={1100}
                className={styles.invoiceBuilderImage}
              />
            </div>

            <div className={styles.invoiceBuilderNotes}>
              <article>
                <span>01</span>

                <div>
                  <strong>Saved services</strong>

                  <p>
                    Existing services are pulled from the database so I can
                    select from the packages and extras I already offer.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <strong>Editable per client</strong>

                  <p>
                    A saved service gives me a starting point without locking
                    the invoice to a fixed description or price.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <strong>Calculated totals</strong>

                  <p>
                    Subtotals, tax and final totals recalculate as the invoice
                    changes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* =====================================================
            SAVED SERVICE MODEL
        ====================================================== */}

        <div className={styles.serviceModel}>
          <div className={styles.serviceModelHeading}>
            <span>Reusable Data</span>

            <h3>
              The service is the starting point.
              <em> The invoice is the instance.</em>
            </h3>
          </div>

          <div className={styles.serviceModelFlow}>
            <div className={styles.serviceSource}>
              <span>Stored Service</span>

              <strong>Website Essentials</strong>

              <div>
                <p>Name</p>
                <p>Default price</p>
                <p>Description</p>
              </div>
            </div>

            <div className={styles.serviceModelArrow} aria-hidden="true">
              →
            </div>

            <div className={styles.serviceInstance}>
              <span>Invoice Line Item</span>

              <strong>Customized for Client</strong>

              <div>
                <p>Selected service</p>
                <p>Adjusted price</p>
                <p>Edited description</p>
              </div>
            </div>
          </div>

          <p className={styles.serviceModelNote}>
            The stored service reduces repetitive entry while the invoice line
            item stays flexible enough for project-specific changes.
          </p>
        </div>

        {/* =====================================================
            GENERATE + DISPLAY
        ====================================================== */}

        <div className={styles.documentGeneration}>
          <div className={styles.documentGenerationHeading}>
            <div>
              <span>Generate Invoice</span>

              <h3>
                The finished document is
                <em> still part of the application.</em>
              </h3>
            </div>

            <p>
              Creating the invoice saves the data and takes me to a dedicated
              document view styled specifically for printing.
            </p>
          </div>

          <div className={styles.documentGenerationGrid}>
            <div className={styles.documentPreview}>
              <div className={styles.documentPreviewLabel}>
                <span>Stored Invoice</span>
                <p>Browser-rendered document</p>
              </div>

              <div className={styles.documentPaper}>
                <Image
                  src="/images/projects/vrb-operations/invoice-document.jpg"
                  alt="Generated VRB invoice document"
                  width={1200}
                  height={1600}
                  className={styles.documentImage}
                />
              </div>
            </div>

            <div className={styles.documentGenerationCopy}>
              <span>Why CSS?</span>

              <p className={styles.documentGenerationLead}>
                I wanted the generated invoice to look exactly the way I
                designed it every time.
              </p>

              <p>
                The final invoice is a dedicated CSS template rendered from the
                stored invoice data. Because the document is still HTML and
                CSS, the content can adjust naturally while the overall layout
                stays predictable.
              </p>

              <p>
                I print only the invoice area, save it as a PDF and send that
                finished document to the client.
              </p>

              <div className={styles.documentBenefits}>
                <div>
                  <span>01</span>
                  <p>Consistent output</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Content adjusts naturally</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Easy to review before export</p>
                </div>

                <div>
                  <span>04</span>
                  <p>No separate PDF layout system</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING LAYER
        ====================================================== */}

        <div className={styles.invoiceEngineering}>
          <div className={styles.invoiceEngineeringHeading}>
            <span>Under the Workflow</span>

            <h3>
              Interface decisions
              <em> backed by application logic.</em>
            </h3>
          </div>

          <div className={styles.invoiceEngineeringGrid}>
            <article>
              <span>Frontend</span>

              <strong>Next.js UI</strong>

              <p>
                Service selection, editable line items, invoice fields and
                calculated totals.
              </p>
            </article>

            <article>
              <span>Application</span>

              <strong>Invoice Logic</strong>

              <p>
                Sequential invoice numbers, calculations and editable stored
                invoice data.
              </p>
            </article>

            <article>
              <span>Data</span>

              <strong>MongoDB</strong>

              <p>
                Services, clients and invoices are stored and connected through
                application data.
              </p>
            </article>

            <article>
              <span>Output</span>

              <strong>CSS Print Template</strong>

              <p>
                The stored invoice is transformed into the final printable
                client document.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            DECISION
        ====================================================== */}

        <div className={styles.invoiceDecision}>
          <div className={styles.invoiceDecisionNumber}>
            <span>02</span>
            <p>Design Decision</p>
          </div>

          <div className={styles.invoiceDecisionContent}>
            <h3>
              Reduce repetitive input.
              <span> Keep the final document flexible.</span>
            </h3>

            <p>
              Reusing stored services speeds up invoice creation, but each
              invoice still needs room for client-specific pricing and
              descriptions. The workflow keeps the reusable data and the
              one-off document connected without treating them as the same
              thing.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ====================================================== */}

        <div className={styles.invoiceWorkflowPrinciple}>
          <span>Workflow Principle</span>

          <p>
            The goal wasn&apos;t to automate everything.
            <strong>
              It was to remove the parts I shouldn&apos;t have to repeat.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRBWorkflow;