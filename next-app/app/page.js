import Hero from "../components/hero/hero.component";
import SelectedWork from "../components/selectedWork/selectedWork.component";
import Capabilities from "../components/capabilities/capabilities.component";
import ExperienceAbout from "../components/experienceAbout/experienceAbout.component";
import BeyondCode from "../components/beyondCode/beyondCode.component";
import PersonSchema from "../components/personSchema/personSchema";

export const metadata = {
  title: "Web Developer Halifax | Victoria Benoit",

  description:
    "Halifax-area web developer and UX/UI designer creating custom websites and full-stack web applications with React, Next.js, Node.js and MongoDB.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Web Developer Halifax | Victoria Benoit",
    description:
      "Full-stack web development and UX/UI design for businesses in Nova Scotia and across Canada.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <PersonSchema />

      <main
        style={{
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Hero />
        <SelectedWork />
        <Capabilities />
        <ExperienceAbout />
        <BeyondCode />
      </main>
    </>
  );
}
