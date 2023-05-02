import { SuccessStoryCardStyledWrapper } from "./successStory.style";
import SvgIcon from "../SvgIcon";
interface SuccessStoryCardPropType {
  title: string;
  desc: string;
  logo: {
    title: string;
    viewBox: string;
  };
}

export default function SuccessStoryCard({
  title,
  desc,
  logo,
}: SuccessStoryCardPropType) {
  return (
    <SuccessStoryCardStyledWrapper>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="logo">
        <SvgIcon title={logo.title} viewBox={logo.viewBox} />
      </div>
    </SuccessStoryCardStyledWrapper>
  );
}
