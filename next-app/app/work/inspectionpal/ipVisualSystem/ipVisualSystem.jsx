import styles from "./ipVisualSystem.module.css";

const IPVisualSystem = () => {
  return (
    <section className={styles.visualSystemSection}>
      <div className={styles.inner}>
        {/* =====================================================
            SECTION META
        ====================================================== */}

        <div className={styles.visualSystemMeta}>
          <span>04</span>
          <p>Visual System + Frontend Craft</p>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className={styles.visualSystemIntro}>
          <div>
            <p className={styles.visualSystemEyebrow}>Building the Language</p>

            <h2>
              One identity,
              <span> repeated with intention.</span>
            </h2>
          </div>

          <div className={styles.visualSystemIntroCopy}>
            <p className={styles.visualSystemLead}>
              The logo provided the starting point. The rest of the interface
              needed a visual system capable of carrying that identity across an
              entire website.
            </p>

            <p>
              I expanded the existing green into a broader palette, introduced
              complementary blue and neutral tones, and used repeated card, icon
              and spacing patterns to create consistency across pages.
            </p>
          </div>
        </div>

        {/* =====================================================
            COLOR SYSTEM
        ====================================================== */}

        <div className={styles.paletteSection}>
          <div className={styles.paletteHeading}>
            <span>01 / Colour</span>

            <h3>
              Start with the logo.
              <em> Build outward.</em>
            </h3>
          </div>

          <div className={styles.paletteGrid}>
            <div
              className={`${styles.paletteBlock} ${styles.paletteGreenDark}`}
            >
              <span>Primary</span>
              <strong>Deep Green</strong>
              <p>Brand foundation</p>
            </div>

            <div className={`${styles.paletteBlock} ${styles.paletteGreen}`}>
              <span>Secondary</span>
              <strong>Green</strong>
              <p>Brand continuity</p>
            </div>

            <div
              className={`${styles.paletteBlock} ${styles.paletteGreenLight}`}
            >
              <span>Support</span>
              <strong>Light Green</strong>
              <p>Sections + accents</p>
            </div>

            <div className={`${styles.paletteBlock} ${styles.paletteBlue}`}>
              <span>Contrast</span>
              <strong>Blue</strong>
              <p>Complementary depth</p>
            </div>

            <div className={`${styles.paletteBlock} ${styles.paletteNeutral}`}>
              <span>Foundation</span>
              <strong>Neutral Grey</strong>
              <p>Structure + balance</p>
            </div>
          </div>

          <p className={styles.paletteNote}>
            The exact palette grew from the logo rather than introducing an
            unrelated visual identity.
          </p>
        </div>

        {/* =====================================================
            VISUAL LANGUAGE
        ====================================================== */}

        <div className={styles.languageSection}>
          <div className={styles.languageHeading}>
            <div>
              <span>02 / Interface Language</span>

              <h3>
                Familiar patterns,
                <em> consistent treatment.</em>
              </h3>
            </div>

            <p>
              Repeated patterns help visitors move through a content-heavy
              website without relearning how each section works.
            </p>
          </div>

          <div className={styles.languageGrid}>
            <article>
              <span className={styles.languageNumber}>01</span>

              <div className={styles.iconDemo}>
                <div>✓</div>
              </div>

              <h4>Icon Anchors</h4>

              <p>
                Simple icons give feature-heavy sections quick visual anchors
                and reinforce the practical character of the brand.
              </p>
            </article>

            <article>
              <span className={styles.languageNumber}>02</span>

              <div className={styles.cardDemo}>
                <span />
                <span />
                <span />
              </div>

              <h4>Card Patterns</h4>

              <p>
                Reusable card treatments create consistency across benefits,
                services and supporting information.
              </p>
            </article>

            <article>
              <span className={styles.languageNumber}>03</span>

              <div className={styles.hierarchyDemo}>
                <span />
                <span />
                <span />
              </div>

              <h4>Clear Hierarchy</h4>

              <p>
                Scale, spacing and contrast separate major messages from
                supporting detail.
              </p>
            </article>

            <article>
              <span className={styles.languageNumber}>04</span>

              <div className={styles.spacingDemo}>
                <span />
                <span />
                <span />
              </div>

              <h4>Consistent Rhythm</h4>

              <p>
                Repeated spacing patterns help long pages feel intentional
                rather than endlessly stacked.
              </p>
            </article>
          </div>
        </div>

        {/* =====================================================
            INTERACTION
        ====================================================== */}

        <div className={styles.interactionSection}>
          <div className={styles.interactionIntro}>
            <span>03 / Interaction</span>

            <h3>
              Enough movement to feel alive.
              <em> Not enough to get in the way.</em>
            </h3>
          </div>

          <div className={styles.interactionFeature}>
            <div className={styles.interactionCardDemo}>
              <div className={styles.demoCard}>
                <span>Feature</span>

                <div className={styles.demoIcon}>✓</div>

                <h4>Dealership Support</h4>

                <p>
                  Repeated interface elements use subtle hover movement to make
                  interactive content feel responsive.
                </p>

                <span className={styles.demoLink}>Learn more →</span>
              </div>

              <div className={styles.motionIndicator}>
                <span>↑</span>
                <p>Subtle lift on hover</p>
              </div>
            </div>

            <div className={styles.interactionCopy}>
              <p className={styles.interactionLead}>
                The interface does not rely on animation to communicate meaning.
              </p>

              <p>
                Small hover transitions, including a slight lift on cards, add
                responsiveness without distracting from the site&apos;s primary
                job: communicating information clearly.
              </p>

              <div className={styles.interactionPrinciple}>
                <span>Interaction Principle</span>
                <strong>Movement supports the interface.</strong>
                <p>It does not become the interface.</p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESPONSIVE SYSTEM
        ====================================================== */}

        <div className={styles.responsiveCraft}>
          <div className={styles.responsiveCraftHeading}>
            <span>04 / Responsive Behaviour</span>

            <h3>
              Same system.
              <em> Different space.</em>
            </h3>
          </div>

          <div className={styles.responsiveCraftGrid}>
            <div className={styles.desktopDiagram}>
              <div className={styles.deviceLabel}>
                <span>Desktop</span>
                <p>Expanded composition</p>
              </div>

              <div className={styles.desktopFrame}>
                <div />
                <div className={styles.desktopColumns}>
                  <span />
                  <span />
                  <span />
                </div>
                <div />
              </div>
            </div>

            <div className={styles.responsiveArrow}>
              <span>→</span>
            </div>

            <div className={styles.mobileDiagram}>
              <div className={styles.deviceLabel}>
                <span>Mobile</span>
                <p>Compressed hierarchy</p>
              </div>

              <div className={styles.mobileFrame}>
                <div />
                <span />
                <span />
                <span />
                <div />
              </div>
            </div>
          </div>

          <div className={styles.responsiveCraftCopy}>
            <p>
              Responsive behaviour preserves the visual hierarchy while allowing
              multi-column layouts, cards and supporting content to reorganize
              for smaller screens.
            </p>

            <strong>
              The goal is consistency of experience, not identical composition.
            </strong>
          </div>
        </div>

        {/* =====================================================
            SYSTEM PAYOFF
        ====================================================== */}

        <div className={styles.visualSystemPayoff}>
          <div>
            <span>Design + Frontend</span>

            <h3>
              The visual system became
              <em> part of the implementation.</em>
            </h3>
          </div>

          <p>
            Repeated colours, spacing, cards, icon treatments and interaction
            patterns were implemented as reusable frontend patterns, making it
            easier to extend the website without redesigning its visual language
            each time a new page was added.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPVisualSystem;
