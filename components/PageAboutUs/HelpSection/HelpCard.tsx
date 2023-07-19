import SvgIcon from "@/components/SvgIcon";
import Link from "next/link";
import { HelpCardStyledWrapper } from "./helpSection.style";

interface HelpCardPropTypes {
  icon: {
    name: string;
    viewBox: string;
  };
  title: string;
  footer: any;
  desc: string;
  zIndex: number;
  className: string;
}

export default function HelpCard({
  icon: { name, viewBox },
  title,
  desc,
  zIndex,
  footer,
  className,
}: HelpCardPropTypes) {
  return (
    <HelpCardStyledWrapper zIndex={zIndex}>
      <div className={"card-wrapper " + className}>
        <div className="icon-wrapper">
          <SvgIcon title={name} viewBox={viewBox} />
        </div>
        <div className="card-content">
          <h5>{title}</h5>
          <p className="card-content-desc">{desc}</p>
          <div className="card-content-footer">{footer}</div>
        </div>
      </div>
    </HelpCardStyledWrapper>
  );
}
