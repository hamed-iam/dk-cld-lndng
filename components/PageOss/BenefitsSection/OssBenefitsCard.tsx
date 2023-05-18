import SvgIcon from "@/components/SvgIcon";
import { OssBenefitCardStyledWrapper } from "./benefitsSection.style";

interface OssBenefitCardPropTypes {
  icon: {
    name: string;
    viewBox: string;
  };
  title: string;
  desc: string;
}

export default function OssBenefitCard({
  icon: { name, viewBox },
  title,
  desc,
}: OssBenefitCardPropTypes) {
  return (
    <OssBenefitCardStyledWrapper>
      <div className="card-title">
        <SvgIcon title={name} viewBox={viewBox} />
        <h5>{title}</h5>
      </div>
      <p className="card-desc">{desc}</p>
    </OssBenefitCardStyledWrapper>
  );
}
