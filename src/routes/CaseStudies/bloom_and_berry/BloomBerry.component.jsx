import React from "react";
import { CertificateContainer } from "../../Certificates/Certificates.styles";
import { TopContainer } from "../CaseStudies.styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Merch from "./bloom_images/Merch.png";
import Logo from "./bloom_images/Logo.png";
import WebsiteBackground from "./bloom_images/Background.png";
import Billboard from "./bloom_images/Billboard.png";
import Labels from "./bloom_images/Labels.png";
import { BloomStudyCase } from "./Bloom.styles";

const BloomAndBerry = () => {
  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Case Study for Bloom & Berry</h2>
      </TopContainer>
      <BloomStudyCase>
        <div>
          <h3>Overview</h3>
          <a href="/BloomAndBerry">See full version</a>
          <p>
            Portfolio project for a fake company that sells juice.The project
            specified to use Dall-E & Chat-GPT to create these different assets
          </p>
          <p>
            Berry & Bloom is a whimsical, flower-powered juice company based in
            Sacramento, California. Founded by longtime florists Lil & Phill,
            the brand blossoms from their beloved flower shop into a vibrant
            juice venture inspired by nature’s most beautiful gifts—blooms and
            botanicals. Berry & Bloom blends florals and fruits into refreshing,
            health-conscious juices, all crafted with care and creativity. The
            brand embraces a whimsical, botanical aesthetic, using a soft
            palette of purple, pink, yellow, and green with swirly script fonts,
            delicate illustrations, and a warm, handcrafted tone.
          </p>
          <h4>Owners Story Angle</h4>
          <p>
            Lil & Phill, longtime Sacramento florists, blend their passion for
            blooms into refreshing, garden-inspired juice blends. The brand
            blooms from their beloved flower shop.
          </p>
          <h4>Brand Essence</h4>
          <p>
            Brand Essence: A whimsical, botanical brand fusing florals and
            fruits into a joyful, health-forward juice experience.{" "}
            <span className="italic">
              {" "}
              “From petal to press made with love.”
            </span>
          </p>
        </div>
        <div>
          <h3>Market Campaign Strategy</h3>
          <h4>Campaign Title</h4>
          <p>“Drink What You Bloom”</p>
          <h4>Campaign Goals</h4>
          <p>
            Awareness: Introduce Berry & Bloom as a juice brand to both local
            and online audiences. Engagement: Build a flower-loving,
            health-conscious community. Conversion: Drive purchases online and
            in-store. Retention: Cultivate brand loyalty with storytelling and
            charm.
          </p>
          <h4>Tactics by Channel</h4>
          <div style={{ marginBottom: "1rem" }}>
            <h5>Local Activation</h5>
            <ul>
              <li>Pop-up Juice Bar</li>
              <li>Flower & Juice Paring Day</li>
              <li>Collaborations with local businesses</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h5>Retail & Product Strategy</h5>
            <ul>
              <li>Limited Editions</li>
              <li>Gift Bundles</li>
              <li>In store display</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h5>Public relations & Press</h5>
            <ul>
              <li>Launch Party</li>
              <li>Pitch to local outlet</li>
              <li>Story feature</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Strategy for Content Creation for Social media</h3>
          <h4>Tone & Style</h4>
          <p>
            Whimsical, heartfelt, nature-rooted. Earthy but not preachy. Think
            wildflower fields, gentle humor, and poetic captions.
          </p>
          <h4>Channels & Frequency</h4>
          <p>
            Instagram <span> 4-5x per week</span>
          </p>
          <p>
            Tiktok <span>3x per week</span>
          </p>
          <p>
            Pinterest <span>2x per week</span>
          </p>
          <p>
            Email Newsletter <span>2x per month</span>
          </p>
          <p>
            Youtube Shorts/Reels <span>1-2x per week</span>
          </p>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Content Pillars</h4>
            <ul>
              <li>Behind-the-scenes flower and juice making</li>
              <li>Seasonal juice recipes and pairings</li>
              <li>Customer stories and testimonials</li>
              <li>Flower and juice care tips</li>
              <li>Community events and collaborations</li>
              <li>Juice health benefits and fun facts</li>
              <li>Brand story and values</li>
              <li>Merch & lifestyle</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Each Flavor of juice</h3>
          <div className="juice">
            <h4>1. Blush Garden</h4>
            <p className="italic">Rose, Strawberry & Honey</p>
            <p>💗 Tastes like: A midsummer picnic in a flower field.</p>
            <p>
              Step into a garden of soft petals and sun-kissed berries. This
              dreamy blend balances the delicate aroma of rose petals with juicy
              strawberries and a kiss of golden honey. Blush Garden is floral,
              fruity, and subtly sweet—a gentle love letter to your senses.
            </p>
          </div>
          <div className="juice">
            <h4>2. Golden Glow</h4>
            <p className="italic">Chamomile, Vanilla & Orange</p>
            <p>🌼 Tastes like: Golden hour in a bottle.</p>
            <p>
              Soothing chamomile and creamy vanilla wrap around a burst of fresh
              orange, creating a warm, citrus-kissed elixir. Golden Glow is a
              calming, sunlit sip perfect for slow mornings and mellow
              afternoons.
            </p>
          </div>
          <div className="juice">
            <h4>3. Velvet Bloom</h4>
            <p className="italic">Violet, Raspberry & Almond</p>
            <p>💜 Tastes like: A secret garden in full bloom.</p>
            <p>
              Dark berries meet soft florals and a whisper of nutty sweetness.
              Violet lends its floral perfume to tart raspberry, rounded off by
              smooth almond notes for a lush, almost dessert-like treat.
            </p>
          </div>
          <div className="juice">
            <h4>4. Fresh Root</h4>
            <p className="italic">Mint, Lemon & Ginger</p>
            <p>🍋 Tastes like: Morning clarity in a bottle.</p>
            <p>
              Zesty lemon and spicy ginger awaken the senses while cooling mint
              keeps it crisp and refreshing. Fresh Root is bright, energizing,
              and bold—a modern tonic with old-soul roots.
            </p>
          </div>
          <div className="juice">
            <h4>5. Peach Petal</h4>
            <p className="italic">Lavender, Peach & Honey</p>
            <p>💛 Tastes like: A hammock nap under a blooming tree.</p>
            <p>
              A delicate bouquet of lavender floats above soft peach nectar and
              a drizzle of sweet honey. Peach Petal is lush, elegant, and subtly
              floral—a peaceful pause in your busy day.
            </p>
          </div>
          <div className="juice">
            <h4>6. Sunny Stem</h4>
            <p className="italic">Marigold, Carrot & Lime</p>
            <p>🧡 Tastes like: Garden sunshine in a glass.</p>
            <p>
              Earthy carrot, citrusy lime, and the sunny essence of marigold
              come together in a bright, grounding blend. Sunny Stem is vibrant
              and vitamin-rich with a twist of floral brightness.
            </p>
          </div>
          <div className="juice">
            <h5>For a new flavor of juice try combing:</h5>
            <p>A mix of Blush Garden + Fresh Root</p>
            <p>🌺 Tastes like: A first kiss on a spring morning walk.</p>
            <p>
              Rose, strawberry, and honey meet lemon, mint, and ginger in this
              invigorating floral-fresh fusion. Petal Punch starts off sweet and
              romantic, then builds into a citrusy zing with a clean herbal
              finish. It’s the perfect pick-me-up with charm and energy in every
              sip.
            </p>
          </div>
        </div>
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
              My idea way to have them each in a different color representing
              each of the flavors that I came up with.
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
      </BloomStudyCase>
    </CertificateContainer>
  );
};

export default BloomAndBerry;
