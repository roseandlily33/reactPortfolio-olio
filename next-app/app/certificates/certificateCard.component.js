import Image from 'next/image';
import styles from './certificateCard.module.css';

export default function CertificateCard({ certificate, index }) {
  const {
    photo,
    title,
    provider,
    date,
    important,
    tags = [],
  } = certificate;

  return (
    <article
      className={`${styles.card} ${
        important ? styles.featured : ''
      }`}
    >
      <div className={styles.cardTop}>
        <p className={styles.number}>
          {String(index + 1).padStart(2, '0')}
        </p>

        <div className={styles.cardMeta}>
          <span>{date}</span>

          {important && (
            <span className={styles.featuredLabel}>
              Featured
            </span>
          )}
        </div>
      </div>

      <div className={styles.imageWrap}>
        <Image
          src={photo}
          alt={`${title} certificate`}
          fill
          className={styles.image}
          sizes="
            (max-width: 700px) 100vw,
            (max-width: 1100px) 50vw,
            33vw
          "
        />

        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.provider}>
          {provider}
        </p>

        <h2 className={styles.title}>
          {title}
        </h2>

        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.cardBottom}>
        <span>Credential</span>

        <span aria-hidden="true">↗</span>
      </div>
    </article>
  );
}