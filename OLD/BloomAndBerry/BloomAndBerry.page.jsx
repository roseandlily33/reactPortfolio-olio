import React from "react";
import { BerryAndBloomMain, BerryLogo, BerryAboutUs } from "./Berry.styles";
import x from "../../routes/CaseStudies/bloom_and_berry/bloom_images/Background.png";
import Logo from "../../routes/CaseStudies/bloom_and_berry/bloom_images/Logo.png";
import { juiceFlavors } from "./Juice";


const BloomAndBerryPage = () => {
  return (
    <BerryAndBloomMain
      style={{
        backgroundImage: `url(${x})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* BerryLogo */}
      <BerryLogo>
        <img src={Logo} alt="Berry and Bloom Logo" />
      </BerryLogo>

      {/* BerryAboutUs */}
      <BerryAboutUs>
        <div className="scallop">
          <h2>About Us</h2>
          <p>
            Berry & Bloom is a whimsical, flower-powered juice company based in
            Sacramento, California. Founded by longtime florists Lil & Phill,
            the brand blossoms from their beloved flower shop into a vibrant
            juice venture inspired by nature’s most beautiful gifts—blooms and
            botanicals.
          </p>
          <h2>Our Juices</h2>
          <p>
            Berry & Bloom offers a delightful range of juices that blend the
            essence of flowers and fruits. Each juice is crafted with love,
            bringing together the best of nature's bounty.
          </p>
          <div>
            {juiceFlavors?.map((juice) => (
              <div key={juice?.id} className="juice">
                <h4>
                  {juice?.emoji} {juice?.name}
                </h4>
                <p className="italic">{juice?.ingredients}</p>
                <p>{juice?.description}</p>
                <p>{juice?.details}</p>
              </div>
            ))}
          </div>
        </div>
      </BerryAboutUs>
    </BerryAndBloomMain>
  );
};

export default BloomAndBerryPage;
