import {
  SectionHeader,
  SubHeader,
  SectionText,
} from "../Campaign/CampaignBB.styles";
import styled from "styled-components";

const JuiceFlavorSection = styled.div`
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  margin-bottom: 1.2rem;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: ${({ textColor }) => textColor || "var(--darkBerry)"};
  .italic {
    font-style: italic;
    opacity: 0.85;
  }
`;

const JuiceBB = () => {
  return (
    <>
      <SectionHeader>
        Each Flavor of Juice
      </SectionHeader>
      <JuiceFlavorSection color="#f8c1d8" textColor="#c72c6c">
        <SubHeader>
          1. Blush Garden
        </SubHeader>
        <SectionText className="italic">Rose, Strawberry & Honey</SectionText>
        <SectionText>
          Tastes like: A midsummer picnic in a flower field.
        </SectionText>
        <SectionText>
          Step into a garden of soft petals and sun-kissed berries. This dreamy
          blend balances the delicate aroma of rose petals with juicy
          strawberries and a kiss of golden honey. Blush Garden is floral,
          fruity, and subtly sweet—a gentle love letter to your senses.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection color="#ffe9a7" textColor="#bfa600">
        <SubHeader>
          2. Golden Glow
        </SubHeader>
        <SectionText className="italic">
          Chamomile, Vanilla & Orange
        </SectionText>
        <SectionText>Tastes like: Golden hour in a bottle.</SectionText>
        <SectionText>
          Soothing chamomile and creamy vanilla wrap around a burst of fresh
          orange, creating a warm, citrus-kissed elixir. Golden Glow is a
          calming, sunlit sip perfect for slow mornings and mellow afternoons.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection color="#d6c1f8" textColor="#6c2cc7">
        <SubHeader>
          3. Velvet Bloom
        </SubHeader>
        <SectionText className="italic">Violet, Raspberry & Almond</SectionText>
        <SectionText>Tastes like: A secret garden in full bloom.</SectionText>
        <SectionText>
          Dark berries meet soft florals and a whisper of nutty sweetness.
          Violet lends its floral perfume to tart raspberry, rounded off by
          smooth almond notes for a lush, almost dessert-like treat.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection textColor="#2cc76c">
        <SubHeader>
          4. Fresh Root
        </SubHeader>
        <SectionText className="italic">Mint, Lemon & Ginger</SectionText>
        <SectionText>Tastes like: Morning clarity in a bottle.</SectionText>
        <SectionText>
          Zesty lemon and spicy ginger awaken the senses while cooling mint
          keeps it crisp and refreshing. Fresh Root is bright, energizing, and
          bold—a modern tonic with old-soul roots.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection color="#ffe5c1" textColor="#c77c2c">
        <SubHeader>
          5. Peach Petal
        </SubHeader>
        <SectionText className="italic">Lavender, Peach & Honey</SectionText>
        <SectionText>
          Tastes like: A hammock nap under a blooming tree.
        </SectionText>
        <SectionText>
          A delicate bouquet of lavender floats above soft peach nectar and a
          drizzle of sweet honey. Peach Petal is lush, elegant, and subtly
          floral—a peaceful pause in your busy day.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection color="#ffd6a1" textColor="#c76c2c">
        <SubHeader>
          6. Sunny Stem
        </SubHeader>
        <SectionText className="italic">Marigold, Carrot & Lime</SectionText>
        <SectionText>Tastes like: Garden sunshine in a glass.</SectionText>
        <SectionText>
          Earthy carrot, citrusy lime, and the sunny essence of marigold come
          together in a bright, grounding blend. Sunny Stem is vibrant and
          vitamin-rich with a twist of floral brightness.
        </SectionText>
      </JuiceFlavorSection>
      <JuiceFlavorSection color="#f8c1d8" textColor="#2cc76c">
        <SubHeader>
          For a new flavor of juice try combining:
        </SubHeader>
        <SectionText>A mix of Blush Garden + Fresh Root</SectionText>
        <SectionText>
          Tastes like: A first kiss on a spring morning walk.
        </SectionText>
        <SectionText>
          Rose, strawberry, and honey meet lemon, mint, and ginger in this
          invigorating floral-fresh fusion. Petal Punch starts off sweet and
          romantic, then builds into a citrusy zing with a clean herbal finish.
          It’s the perfect pick-me-up with charm and energy in every sip.
        </SectionText>
      </JuiceFlavorSection>
    </>
  );
};

export default JuiceBB;
