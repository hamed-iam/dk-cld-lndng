import SvgIcon from "../SvgIcon";
import { StyledProductDefineCard } from "./productDefineSection.style";

export default function ProductDefineCard({ title = "", desc = "" }) {
  return (
    <StyledProductDefineCard>
      <SvgIcon title="productDefineCardBadgeIcon" viewBox="0 0 25 36" />
      <h2 className="title">{title}</h2>
      <p className="desc">{desc}</p>
    </StyledProductDefineCard>
  );
}
