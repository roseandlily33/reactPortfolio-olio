import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Merch from "../bloom_images/Merch.png";
import Logo from "../bloom_images/Logo.png";
import WebsiteBackground from "../bloom_images/Background.png";
import Billboard from "../bloom_images/Billboard.png";
import Labels from "../bloom_images/Labels.png";

const GalleryBB = () => {
  const stylesForH4 = {
    marginBottom: "var(--spacing-xs);",
    color: "var(--pink-4)",
    fontWeight: "500",
  };
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <h4 style={stylesForH4}>Logo</h4>
          <img src={Logo} alt="Bloom & Berry Logo" />
        </div>
        <div>
          <h4 style={stylesForH4}>Template for website background</h4>
          <img src={WebsiteBackground} alt="Website Background" />
        </div>
        <div>
          <h4 style={stylesForH4}>Design for the labels for each flavor</h4>
          <span style={{ marginBottom: "1rem" }}>
            My idea was to have them each in a different color representing each
            of the flavors that I came up with.
          </span>
          <img src={Labels} alt="Labels for each flavor" />
        </div>
        <div>
          <h4 style={stylesForH4}>Billboards</h4>
          <img src={Billboard} alt="Billboard Design" />
        </div>
        <div>
          <h4 style={stylesForH4}>Merchandise Ideas</h4>
          <img src={Merch} alt="Merchandise Ideas" />
        </div>
      </Carousel>
    </>
  );
};

export default GalleryBB;
