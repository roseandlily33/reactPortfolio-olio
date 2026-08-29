export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Victoria Benoit',
    url: 'https://www.vrbwebdesignanddev.com',
    jobTitle: 'Web Developer and UX/UI Designer',
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'UX/UI Design',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Responsive Web Design',
      'Accessibility',
      'Search Engine Optimization',
    ],
    sameAs: [
      'https://www.linkedin.com/in/victoria-benoit-3rose3/',
      "https://github.com/roseandlily33"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}