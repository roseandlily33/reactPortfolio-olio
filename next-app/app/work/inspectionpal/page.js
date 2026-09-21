// import styles from './page.module.css';
import IPOverview from "./ipOverview/ipOverview";
import IPUnderstandable from "./ipUnderstandable/ipUnderstandable";
import IPRedesign from "./ipRedesign/ipRedesign";
import IPVisualSystem from "./ipVisualSystem/ipVisualSystem";
import IPExpanding from "./ipExpanding/ipExpanding";
import IPFinal from "./ipFinal/ipFinal";

export const metadata = {
  title: "InspectionPal Website Case Study",
  description:
    "Website design and development case study for InspectionPal, a dealership-focused digital platform. Designed and developed with Gatsby by Victoria Benoit.",
  alternates: {
    canonical: "/work/inspectionpal",
  },
  openGraph: {
    title: "InspectionPal Website Case Study | Victoria Benoit",
    description:
      "Explore the design and Gatsby development of a website for a dealership-focused digital platform.",
    url: "/work/inspectionpal",
    type: "article",
  },
};

const InspectionPalPage = () => {
  return (
    <>
      <IPOverview />
      <IPUnderstandable />
      <IPRedesign />
      <IPVisualSystem />
      <IPExpanding />
      <IPFinal />
    </>
  );
};

export default InspectionPalPage;
