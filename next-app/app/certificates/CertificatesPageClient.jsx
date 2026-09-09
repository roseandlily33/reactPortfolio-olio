'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import CertificateCard from './certificateCard.component';
import { certificates } from '../data/Certs.info';
import styles from './page.module.css';

const ALL_PROVIDERS = 'All providers';

function parseCertificateDate(dateValue) {
  if (!dateValue) return Number.NEGATIVE_INFINITY;
  const parsed = Date.parse(String(dateValue));
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed;
}

export default function CertificatesPageClient() {
  const providerOptions = useMemo(
    () =>
      Array.from(
        new Set(
          certificates
            .map((certificate) => certificate.provider)
            .filter(Boolean)
        )
      ).sort((a, b) => a.localeCompare(b)),
    []
  );

  const tagOptions = useMemo(
    () =>
      Array.from(
        new Set(
          certificates
            .flatMap((certificate) => certificate.tags || [])
            .filter(Boolean)
        )
      ).sort((a, b) => a.localeCompare(b)),
    []
  );

  const [selectedProvider, setSelectedProvider] = useState(ALL_PROVIDERS);
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredCertificates = useMemo(() => {
    return [...certificates]
      .filter((certificate) => {
        const matchesProvider =
          selectedProvider === ALL_PROVIDERS ||
          certificate.provider === selectedProvider;

        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((tag) => (certificate.tags || []).includes(tag));

        return matchesProvider && matchesTags;
      })
      .sort((a, b) => {
        const featuredDifference =
          Number(Boolean(b.important)) - Number(Boolean(a.important));

        if (featuredDifference !== 0) {
          return featuredDifference;
        }

        const aDate = parseCertificateDate(a.date);
        const bDate = parseCertificateDate(b.date);

        if (aDate !== bDate) {
          return bDate - aDate;
        }

        return String(a.title).localeCompare(String(b.title));
      });
  }, [selectedProvider, selectedTags]);

  const featuredCount = certificates.filter((certificate) => certificate.important)
    .length;

  const providerCount = new Set(
    certificates.map((certificate) => certificate.provider)
  ).size;

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedProvider(ALL_PROVIDERS);
    setSelectedTags([]);
  };

  const hasActiveFilters =
    selectedProvider !== ALL_PROVIDERS || selectedTags.length > 0;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.topMeta}>
            <p>Archive / Credentials</p>
            <p>Continued Learning</p>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.headingWrap}>
              <p className={styles.eyebrow}>Certificates + Education</p>

              <h1 className={styles.title}>
                Always
                <span> learning.</span>
              </h1>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.heroLead}>
                Development changes. Design changes. The web changes.
              </p>

              <p>
                This archive collects the courses, certifications and
                professional development that have helped shape how I approach
                development, UX/UI, accessibility, SEO and digital products.
              </p>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>{certificates.length}</span>
              <p>Credentials</p>
            </div>

            <div className={styles.stat}>
              <span>{featuredCount}</span>
              <p>Featured</p>
            </div>

            <div className={styles.stat}>
              <span>{providerCount}</span>
              <p>Learning Providers</p>
            </div>

            <div className={styles.stat}>
              <span>∞</span>
              <p>Still Learning</p>
            </div>
          </div>

          <div className={styles.monogram} aria-hidden="true">
            VB
          </div>
        </div>
      </section>

      <section className={styles.archive}>
        <div className={styles.inner}>
          <div className={styles.archiveHeader}>
            <div className={styles.archiveLabel}>
              <span>01</span>
              <p>Certificate Archive</p>
            </div>

            <p className={styles.archiveIntro}>
              A growing collection of technical, design and digital
              certifications.
            </p>
          </div>

          <div className={styles.filterPanel}>
            <div className={styles.filterRow}>
              <div className={styles.filterGroup}>
                <label htmlFor="provider-filter">Provider</label>
                <select
                  id="provider-filter"
                  value={selectedProvider}
                  onChange={(event) => setSelectedProvider(event.target.value)}
                  className={styles.select}
                >
                  <option value={ALL_PROVIDERS}>{ALL_PROVIDERS}</option>
                  {providerOptions.map((provider) => (
                    <option key={provider} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterSummary}>
                <span>{filteredCertificates.length}</span>
                <p>matching credentials</p>
              </div>
            </div>

            <div className={styles.tagFilters}>
              <div className={styles.tagHeader}>
                <p>Tags</p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    className={styles.clearButton}
                    onClick={clearFilters}
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className={styles.tagList}>
                <button
                  type="button"
                  className={`${styles.tagButton} ${
                    selectedTags.length === 0 ? styles.tagButtonActive : ''
                  }`}
                  onClick={() => setSelectedTags([])}
                >
                  All tags
                </button>

                {tagOptions.map((tag) => {
                  const isSelected = selectedTags.includes(tag);

                  return (
                    <button
                      key={tag}
                      type="button"
                      className={`${styles.tagButton} ${
                        isSelected ? styles.tagButtonActive : ''
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id ?? `${certificate.title}-${index}`}
                  certificate={certificate}
                  index={index}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <h2>No certificates match those filters.</h2>
                <p>
                  Try a different provider or clear the selected tags to browse
                  the full archive.
                </p>
                <button type="button" onClick={clearFilters}>
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.learning}>
        <div className={styles.inner}>
          <div className={styles.learningMeta}>
            <p>02 / Philosophy</p>
          </div>

          <div className={styles.learningGrid}>
            <div>
              <h2>
                The certificate isn&apos;t
                <span> the finish line.</span>
              </h2>
            </div>

            <div className={styles.learningCopy}>
              <p className={styles.learningLead}>
                I care more about what I can apply than what I can collect.
              </p>

              <p>
                Courses and certifications give me structured ways to explore
                new techniques, strengthen existing skills and stay current,
                but the real learning happens when those ideas make their way
                into actual products and projects.
              </p>

              <Link href="/work" className={styles.workLink}>
                See the work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className={styles.learningMark} aria-hidden="true">
            VB
          </div>
        </div>
      </section>
    </main>
  );
}
