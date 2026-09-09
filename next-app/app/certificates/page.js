import CertificatesPageClient from "./CertificatesPageClient";

export const metadata = {
  title: "Web Development & UX/UI Certificates",

  description:
    "Professional certificates and continued learning across full-stack web development, UX/UI design, accessibility, SEO and digital strategy.",

  alternates: {
    canonical: "/certificates",
  },

  openGraph: {
    title: "Certificates | Victoria Benoit",
    description:
      "Continued learning across web development, UX/UI design, accessibility, SEO and digital strategy.",
    url: "/certificates",
    type: "website",
  },
};

export default function CertificatesPage() {
  return <CertificatesPageClient />;
}
