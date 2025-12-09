import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Merch from "../bloom_images/Merch.png";
import Logo from "../bloom_images/Logo.png";
import WebsiteBackground from "../bloom_images/Background.png";
import Billboard from "../bloom_images/Billboard.png";
import Labels from "../bloom_images/Labels.png";

const GalleryBB = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <h3>Logo</h3>
          <img src={Logo} alt="Bloom & Berry Logo" />
        </div>
        <div>
          <h3>Template for website background</h3>
          <img src={WebsiteBackground} alt="Website Background" />
        </div>
        <div>
          <h3>Design for the labels for each flavor</h3>
          <span>
            My idea was to have them each in a different color representing each
            of the flavors that I came up with.
          </span>
          <img src={Labels} alt="Labels for each flavor" />
        </div>
        <div>
          <h3>Billboards</h3>
          <img src={Billboard} alt="Billboard Design" />
        </div>
        <div>
          <h3>Merchandise Ideas</h3>
          <img src={Merch} alt="Merchandise Ideas" />
        </div>
      </Carousel>
    </>
  );
};

export default GalleryBB;
