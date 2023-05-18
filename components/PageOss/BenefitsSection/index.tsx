import SvgIcon from "@/components/SvgIcon";
import StyledWrapper from "./benefitsSection.style";
import OssBenefitCard from "./OssBenefitsCard";

export default function OssBenefitsSection() {
  const cards = [
    {
      icon: { name: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
      title: "Excellent Performance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      icon: { name: "flyingSaucerEmojiIcon", viewBox: "0 0 48 48" },
      title: "Valid Referrer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      icon: { name: "diamondEmojiIcon", viewBox: "0 0 48 48" },
      title: "CORS (Cross Origin Resource)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      icon: { name: "robotIcon", viewBox: "0 0 32 32" },
      title: "Diffrent Storage Classes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">Benefits and Solutions</p>
          <h3>
            <span>Benefits</span> of Object Storage
          </h3>
          <h2>for Business</h2>

          <div className="title-wrapper-sub">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <SvgIcon title="arrowCloudBenefitsIcon" viewBox="0 0 70 78" />
          </div>
        </div>
        <div className="cards-wrapper">
          {cards.map((card) => {
            return (
              <OssBenefitCard
                key={card.title}
                icon={{ name: card.icon.name, viewBox: card.icon.viewBox }}
                title={card.title}
                desc={card.desc}
              />
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
}
