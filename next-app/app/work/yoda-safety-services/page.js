import styles from "./page.module.css";
import YodaHero from "./yodaHero/yodaHero";
import YodaArchitecture from "./yodaArchitecture/yodaArchitecture";
import YodaAdmin from "./yodaAdmin/yodaAdmin";
import YodaMobile from "./yodaMobile/yodaMobile";
import YodaTraining from "./yodaTraining/yodaTraining";
import YodaIteration from "./yodaIteration/yodaIteration";

export const metadata = {
  title: "Yoda Safety Services | Full-Stack Platform Case Study",

  description:
    "A custom online safety training platform with course purchasing, user accounts, company management, employee assignments, certificate tracking and Stripe checkout workflows.",

  alternates: {
    canonical: "/work/yoda-safety-services",
  },

  openGraph: {
    title: "Yoda Safety Services | Full-Stack Platform Case Study",
    description:
      "A custom online safety training platform with course purchasing, user accounts, company management, employee assignments, certificate tracking and Stripe checkout workflows.",
    url: "/work/yoda-safety-services",
    type: "website",
  },
};

export default function YodaSafetyServicesPage() {
  return (
    <main className={styles.page}>
      <YodaHero />
      <YodaArchitecture />
      <YodaMobile />
      <YodaTraining />
      ƒ <YodaAdmin />
      <YodaIteration />
    </main>
  );
}
