import SvgIcon from "@/components/SvgIcon";
import { CloudBenefitCardStyledWrapper } from "./cloudBenefitsSection.style";

interface CloudBenefitCardPropTypes {
  icon: {
    name: string;
    viewBox: string;
  };
  title: string;
  desc: string;
}

export default function CloudBenefitCard({
  icon: { name, viewBox },
  title,
  desc,
}: CloudBenefitCardPropTypes) {
  return (
    <CloudBenefitCardStyledWrapper>
      <div className="card-title">
        <SvgIcon title={name} viewBox={viewBox} />
        <h5>{title}</h5>
      </div>
      <p className="card-desc">{desc}</p>
    </CloudBenefitCardStyledWrapper>
  );
}
