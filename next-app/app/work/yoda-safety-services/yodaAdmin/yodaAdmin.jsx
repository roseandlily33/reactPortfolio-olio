import styles from "./yodaAdmin.module.css";
import Image from "next/image";

const YodaAdmin = () => {
  return (
    <section className={styles.adminSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className={styles.adminMeta}>
          <span>05</span>
          <p>Internal Tools + Platform Operations</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.adminIntro}>
          <div>
            <p className={styles.adminEyebrow}>Behind the learner experience</p>

            <h2>
              The product had to work
              <span> for the people running it, too.</span>
            </h2>
          </div>

          <div className={styles.adminIntroCopy}>
            <p className={styles.adminLead}>
              Yoda is not only a training interface. It also includes the
              operational tools required to manage the platform itself.
            </p>

            <p>
              I built internal interfaces for managing courses, quizzes,
              companies, users, forms, manuals, newsletters and training
              activity without relying on direct database changes for normal
              platform operations.
            </p>
          </div>
        </div>

        {/* =====================================================
            ADMIN HERO
        ====================================================== */}

        <div className={styles.adminHero}>
          <div className={styles.adminHeroHeader}>
            <div>
              <span>Platform Administration</span>
              <p>Operational Overview</p>
            </div>

            <p>More data. More controls. Different design priorities.</p>
          </div>

          <div className={styles.adminHeroImage}>
            <Image
              src="/images/projects/yoda/admin-dashboard.jpg"
              alt="Yoda Safety Services administration dashboard"
              fill
              className={styles.image}
              sizes="100vw"
            />
          </div>
        </div>

        {/* =====================================================
            THREE OPERATIONAL AREAS
        ====================================================== */}

        <div className={styles.adminAreas}>
          <article className={styles.adminArea}>
            <span className={styles.adminAreaNumber}>01</span>

            <p className={styles.adminAreaLabel}>Content Operations</p>

            <h3>
              Create and manage
              <em> the training system.</em>
            </h3>

            <p>
              Courses and quizzes are created directly inside the application,
              alongside newsletters, manuals and form resources. The admin
              experience supports the ongoing content work required to keep the
              training platform current.
            </p>

            <div className={styles.adminTags}>
              <span>Courses</span>
              <span>Quizzes</span>
              <span>Newsletters</span>
              <span>Manuals</span>
              <span>Forms</span>
            </div>
          </article>

          <article className={styles.adminArea}>
            <span className={styles.adminAreaNumber}>02</span>

            <p className={styles.adminAreaLabel}>People + Companies</p>

            <h3>
              Manage the system
              <em> across organizations.</em>
            </h3>

            <p>
              Administrators can manage users and companies, review platform
              information, assign training and perform the same company-level
              management tasks available to managers with broader administrative
              access.
            </p>

            <div className={styles.adminTags}>
              <span>Users</span>
              <span>Companies</span>
              <span>Assignments</span>
              <span>Training</span>
              <span>Permissions</span>
            </div>
          </article>

          <article className={styles.adminArea}>
            <span className={styles.adminAreaNumber}>03</span>

            <p className={styles.adminAreaLabel}>Platform Control</p>

            <h3>
              Give administrators control
              <em> without removing safeguards.</em>
            </h3>

            <p>
              Admins can edit platform data, work with company resources, upload
              on behalf of organizations and trial-run form workflows, while
              sensitive actions can be restricted when the surrounding data
              relationships make a generic delete unsafe.
            </p>

            <div className={styles.adminTags}>
              <span>Edit</span>
              <span>Upload</span>
              <span>Trial Run</span>
              <span>Assign</span>
              <span>Safeguards</span>
            </div>
          </article>
        </div>

        {/* =====================================================
            SCREEN DETAILS
        ====================================================== */}

        <div className={styles.adminScreens}>
          <div className={styles.adminScreensHeading}>
            <div>
              <p className={styles.adminEyebrow}>Operational interfaces</p>

              <h3>
                Internal tools trade polish
                <span> for operational clarity.</span>
              </h3>
            </div>

            <p>
              These screens expose more controls, more data and more actions
              than the learner-facing experience. The priority shifts toward
              scanability, hierarchy, efficient management and clear system
              feedback.
            </p>
          </div>

          <div className={styles.adminScreenGrid}>
            <div className={styles.adminScreenLarge}>
              <div className={styles.screenHeader}>
                <span>Company Management</span>
                <p>Overview + Administration</p>
              </div>

              <div className={styles.adminScreenImageLarge}>
                <Image
                  src="/images/projects/yoda/company-admin.jpg"
                  alt="Company administration interface in Yoda Safety Services"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </div>
            </div>

            <div className={styles.adminScreenStack}>
              <div>
                <div className={styles.screenHeader}>
                  <span>Course Builder</span>
                  <p>Content Operations</p>
                </div>

                <div className={styles.adminScreenImageSmall}>
                  <Image
                    src="/images/projects/yoda/course-builder.jpg"
                    alt="Course creation interface in Yoda Safety Services"
                    fill
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 34vw"
                  />
                </div>
              </div>

              <div>
                <div className={styles.screenHeader}>
                  <span>Newsletter</span>
                  <p>Communication</p>
                </div>

                <div className={styles.adminScreenImageSmall}>
                  <Image
                    src="/images/projects/yoda/newsletter-admin.jpg"
                    alt="Newsletter management interface in Yoda Safety Services"
                    fill
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 34vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SAFEGUARDS
        ====================================================== */}

        <div className={styles.adminSafeguard}>
          <div className={styles.adminSafeguardTitle}>
            <span>System Safeguard</span>

            <h3>
              Destructive actions need
              <em> context.</em>
            </h3>
          </div>

          <div className={styles.adminSafeguardCopy}>
            <p>
              Not every database entity can be treated the same way. A course
              can become connected to learners, training records and completion
              history, so destructive actions require additional restrictions
              rather than a universal delete pattern.
            </p>

            <div className={styles.safeguardFlow}>
              <div>
                <span>Course</span>
              </div>

              <b aria-hidden="true">→</b>

              <div>
                <span>Assignments</span>
              </div>

              <b aria-hidden="true">→</b>

              <div>
                <span>Training History</span>
              </div>

              <b aria-hidden="true">→</b>

              <div>
                <span>Completion Data</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FORMS / ADMIN PERMISSIONS
        ====================================================== */}

        <div className={styles.adminPermissionFeature}>
          <div>
            <p className={styles.adminEyebrow}>Permission-aware tooling</p>

            <h3>
              Administrative access
              <span> doesn&apos;t mean impersonating the user.</span>
            </h3>
          </div>

          <div className={styles.permissionContent}>
            <p>
              Administrators can view and edit company form resources, upload on
              behalf of a company and perform a trial run of the workflow
              without completing the form as the company user.
            </p>

            <div className={styles.permissionActions}>
              <div>
                <span>01</span>
                <strong>View + Edit</strong>
                <p>Manage the company&apos;s form resources.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Upload</strong>
                <p>Act on behalf of the company where required.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Trial Run</strong>
                <p>Test the workflow without producing a real submission.</p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            NEWSLETTER MICRO STORY
        ====================================================== */}

        <div className={styles.adminNewsletter}>
          <div>
            <span>Communication System</span>

            <h3>
              Create.
              <br />
              Edit.
              <br />
              <em>Send.</em>
            </h3>
          </div>

          <div>
            <p>
              Newsletter management also lives inside the platform. Admins can
              write, edit and remove newsletter content and trigger the email
              send without moving the workflow into a separate publishing
              system.
            </p>

            <div className={styles.newsletterFlow}>
              <span>Draft</span>
              <b>→</b>
              <span>Edit</span>
              <b>→</b>
              <span>Publish</span>
              <b>→</b>
              <strong>Email</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default YodaAdmin;
