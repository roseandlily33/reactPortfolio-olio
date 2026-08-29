import { Cormorant_Garamond, Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";
const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://victoriabenoit.ca"),

  title: {
    default: "Victoria Benoit | Full-Stack Web Developer & UX/UI Designer",
    template: "%s | Victoria Benoit",
  },

  description:
    "Victoria Benoit is a full-stack web developer and UX/UI designer based in Nova Scotia, Canada, creating thoughtful, accessible and scalable digital experiences.",

  keywords: [
    "web developer Halifax",
    "full stack developer",
    "full stack web developer",
    "web designer and developer",
    "web developer Canada",
    "full stack developer Canada",
    "UX UI designer",
    "React developer",
    "MERN stack developer",
  ],

  authors: [
    {
      name: "Victoria Benoit",
    },
  ],

  creator: "Victoria Benoit",
  publisher: "Victoria Benoit",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://victoriabenoit.ca",
    siteName: "Victoria Benoit",
    title: "Victoria Benoit | Full-Stack Web Developer & UX/UI Designer",
    description:
      "Full-stack web developer and UX/UI designer based in Nova Scotia, Canada, creating thoughtful, accessible and scalable digital experiences.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victoria Benoit | Full-Stack Web Developer & UX/UI Designer",
    description:
      "Full-stack web developer and UX/UI designer based in Nova Scotia, Canada, creating thoughtful, accessible and scalable digital experiences.",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
