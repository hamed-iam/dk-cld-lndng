import SvgIcon from "@/components/SvgIcon";
import { ScenarioCardStyledWrapper } from "./scenarios.style";
interface ScenarioCardPropType {
  title: string;
  desc: string;
  logo: {
    title: string;
    viewBox: string;
  };
}

export default function ScenarioCard({
  title,
  desc,
  logo,
}: ScenarioCardPropType) {
  return (
    <ScenarioCardStyledWrapper>
      <div className="title">
        <SvgIcon title={logo.title} viewBox={logo.viewBox} />
        <h4>{title}</h4>
      </div>
      <p>{desc}</p>
    </ScenarioCardStyledWrapper>
  );
}
