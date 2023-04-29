import { SolutionCardStyledWrapper } from "./solutions.style";

export default function SolutionCard({ title = "", desc = "" }) {
  return (
    <SolutionCardStyledWrapper>
      <h2>{title}</h2>
      <p>{desc}</p>
    </SolutionCardStyledWrapper>
  );
}
