import SvgIcon from "@/components/SvgIcon";
import StyledWrapper from "./cloudBenefitsSection.style";
import CloudBenefitCard from "./CloudBenefitCard";

export default function CloudBenefitsSection() {
  const cards = [
    {
      icon: { name: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
      title: "Easy to use",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: { name: "playgroundIcon", viewBox: "0 0 33 32" },
      title: "Flexible",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: { name: "trophyIcon", viewBox: "0 0 33 32" },
      title: "Efficient",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: { name: "robotIcon", viewBox: "0 0 32 32" },
      title: "Scalable and high performance",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: { name: "swordsIcon", viewBox: "0 0 33 32" },
      title: "Security",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: { name: "flashlightIcon", viewBox: "0 0 33 32" },
      title: "Reliable",
      desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">Benefits and Solutions</p>
          <h3>
            <span>Benefits</span> of Cloud Computing
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
              <CloudBenefitCard
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
