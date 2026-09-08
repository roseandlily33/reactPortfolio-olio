import styles from "./yodaTraining.module.css";
import Image from "next/image";

const YodaTraining = () => {
  return (
    <section className={styles.lifecycleSection}>
      <div className={styles.inner}>
        {/* =====================================================
        SECTION HEADER
    ====================================================== */}

        <div className={styles.lifecycleMeta}>
          <span>04</span>
          <p>Product Workflow + Engineering</p>
        </div>

        <div className={styles.lifecycleIntro}>
          <div>
            <p className={styles.lifecycleEyebrow}>Beyond the interface</p>

            <h2>
              The interface doesn&apos;t stop
              <span> at the screen.</span>
            </h2>
          </div>

          <div className={styles.lifecycleIntroCopy}>
            <p className={styles.lifecycleLead}>
              Purchasing and completing a course crosses multiple parts of the
              product.
            </p>

            <p>
              I designed the experience around the full training lifecycle, then
              implemented the frontend and backend functionality connecting
              account state, payment, course access, progress, assessment,
              notifications and certification.
            </p>
          </div>
        </div>

        {/* =====================================================
        FULL LIFECYCLE
    ====================================================== */}

        <div className={styles.lifecycleFlow}>
          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>01</span>
            <p>Discover</p>
            <strong>Course Catalogue</strong>
          </div>

          <div className={styles.flowArrow} aria-hidden="true">
            →
          </div>

          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>02</span>
            <p>Select</p>
            <strong>Course + Cart</strong>
          </div>

          <div className={styles.flowArrow} aria-hidden="true">
            →
          </div>

          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>03</span>
            <p>Purchase</p>
            <strong>Account + Stripe</strong>
          </div>

          <div className={styles.flowArrow} aria-hidden="true">
            →
          </div>

          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>04</span>
            <p>Learn</p>
            <strong>Course Content</strong>
          </div>

          <div className={styles.flowArrow} aria-hidden="true">
            →
          </div>

          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>05</span>
            <p>Assess</p>
            <strong>Quiz + Progress</strong>
          </div>

          <div className={styles.flowArrow} aria-hidden="true">
            →
          </div>

          <div className={styles.flowItem}>
            <span className={styles.flowNumber}>06</span>
            <p>Complete</p>
            <strong>Certificate</strong>
          </div>
        </div>

        {/* =====================================================
        INDIVIDUAL PURCHASE
    ====================================================== */}

        <div className={styles.workflowFeature}>
          <div className={styles.workflowVisual}>
            <div className={styles.visualHeader}>
              <span>01 / Individual Purchase</span>
              <p>Cart + Checkout</p>
            </div>

            <div className={styles.workflowImage}>
              <Image
                src="/images/projects/yoda/yoda-cart.jpg"
                alt="Yoda Safety Services course cart and checkout flow"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className={styles.workflowCopy}>
            <span className={styles.workflowNumber}>01</span>

            <p className={styles.workflowLabel}>Identity + Purchase</p>

            <h3>
              Preserve the purchase,
              <em> require the identity.</em>
            </h3>

            <p>
              Learners can browse courses and build their cart before signing
              in. Because purchased training must belong to an account,
              authentication becomes part of the checkout flow without forcing
              the learner to rebuild their purchase.
            </p>

            <div className={styles.microFlow}>
              <span>Cart</span>
              <b>→</b>
              <span>Sign in / Create Account</span>
              <b>→</b>
              <span>Return to Cart</span>
              <b>→</b>
              <span>Stripe</span>
            </div>

            <div className={styles.workflowNote}>
              <span aria-hidden="true">↳</span>

              <p>
                After payment, the purchased course or courses are added to the
                learner&apos;s account and can be started immediately.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
        COMPANY PURCHASE
    ====================================================== */}

        <div className={styles.companyWorkflow}>
          <div className={styles.companyHeading}>
            <div>
              <span className={styles.workflowNumber}>02</span>

              <p className={styles.workflowLabel}>Company Purchasing</p>

              <h3>
                One purchase.
                <em> Multiple learners.</em>
              </h3>
            </div>

            <p>
              Company purchasing introduces another layer of responsibility:
              managers need to choose both what is being purchased and exactly
              who should receive the training.
            </p>
          </div>

          <div className={styles.companyContent}>
            <div className={styles.companySteps}>
              <article>
                <span>01</span>
                <div>
                  <p>Select Course</p>
                  <strong>Choose the required training.</strong>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <p>Select Employees</p>
                  <strong>Choose who should receive access.</strong>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <p>Review</p>
                  <strong>Confirm the assignment before payment.</strong>
                </div>
              </article>

              <article>
                <span>04</span>
                <div>
                  <p>Checkout</p>
                  <strong>Complete payment securely through Stripe.</strong>
                </div>
              </article>

              <article>
                <span>05</span>
                <div>
                  <p>Assign</p>
                  <strong>Training is added to the selected learners.</strong>
                </div>
              </article>

              <article>
                <span>06</span>
                <div>
                  <p>Notify</p>
                  <strong>
                    Receipt to manager + course email to learners.
                  </strong>
                </div>
              </article>
            </div>

            <div className={styles.companyVisual}>
              <div className={styles.visualHeader}>
                <span>Assignment Review</span>
                <p>Company Flow</p>
              </div>

              <div className={styles.companyImage}>
                <Image
                  src="/images/projects/yoda/company-course-assignment.jpg"
                  alt="Company manager selecting employees for course training"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>

              <div className={styles.companyVisualCaption}>
                <span>Design decision</span>

                <p>
                  Employee selection and review happen before payment so the
                  assignment is explicit before it affects multiple accounts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
        LEARNING + COMPLETION
    ====================================================== */}

        <div className={styles.completionSection}>
          <div className={styles.completionHeading}>
            <span className={styles.workflowNumber}>03</span>

            <p className={styles.workflowLabel}>Learning + Completion</p>

            <h3>
              Completion is a state change,
              <em> not just a score.</em>
            </h3>
          </div>

          <div className={styles.completionVisuals}>
            <div className={styles.courseVisual}>
              <div className={styles.visualHeader}>
                <span>Course Experience</span>
                <p>Learning</p>
              </div>

              <div className={styles.courseImage}>
                <Image
                  src="/images/projects/yoda/course-interface.jpg"
                  alt="Yoda Safety Services online course interface"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 56vw"
                />
              </div>
            </div>

            <div className={styles.certificateVisual}>
              <div className={styles.visualHeader}>
                <span>Completion</span>
                <p>Certificate</p>
              </div>

              <div className={styles.certificateImage}>
                <Image
                  src="/images/projects/yoda/certificate.jpg"
                  alt="Yoda Safety Services course certificate"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
            </div>
          </div>

          <div className={styles.completionDetails}>
            <article>
              <span>01</span>
              <h4>Learn</h4>
              <p>
                Course content can include PDF material, supporting documents
                and video resources. Multi-part courses expose progress
                throughout the experience.
              </p>
            </article>

            <article>
              <span>02</span>
              <h4>Assess</h4>
              <p>
                Quiz answers are stored as the learner works through the
                assessment. A score of 85% or higher is required to pass.
              </p>
            </article>

            <article>
              <span>03</span>
              <h4>Complete</h4>
              <p>
                Passing marks the training as complete while keeping the course
                content available for future review. Learners can then complete
                the follow-up questionnaire and access their certificate.
              </p>
            </article>

            <article>
              <span>04</span>
              <h4>Retain</h4>
              <p>
                Certificates can be downloaded by the learner and are also
                stored in S3 so they remain available after the original
                completion session.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
        ENGINEERING LAYER
    ====================================================== */}

        <div className={styles.systemLayer}>
          <div className={styles.systemHeading}>
            <p>Behind the interface</p>

            <h3>
              A connected
              <span> product system.</span>
            </h3>
          </div>

          <div className={styles.systemDiagram}>
            <div className={styles.systemNode}>
              <span>01</span>
              <strong>React UI</strong>
              <p>Interactions + application state</p>
            </div>

            <div className={styles.systemConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.systemNode}>
              <span>02</span>
              <strong>API Layer</strong>
              <p>Requests + business logic</p>
            </div>

            <div className={styles.systemConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.systemNode}>
              <span>03</span>
              <strong>Authorization</strong>
              <p>Protected access + permissions</p>
            </div>

            <div className={styles.systemConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.systemNode}>
              <span>04</span>
              <strong>Services + Data</strong>
              <p>MongoDB · Stripe · S3 · Email</p>
            </div>
          </div>

          <div className={styles.systemFootnote}>
            <span>Design Engineering</span>

            <p>
              Frontend feedback and backend state stay connected throughout the
              workflow, while protected operations are validated server-side
              rather than relying on the interface alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YodaTraining;
