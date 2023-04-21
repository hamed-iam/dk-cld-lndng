import SvgIcon from "../SvgIcon";
import StyledWrapper from "./titleFrame.style";

export default function TitleFrame({ children }: any) {
  return (
    <StyledWrapper>
      <SvgIcon title="cornerTLIcon" viewBox="0 0 10 10" />
      <SvgIcon title="cornerTRIcon" viewBox="0 0 10 10" />

      {children}

      <SvgIcon title="cornerBLIcon" viewBox="0 0 10 10" />
      <SvgIcon title="cornerBRIcon" viewBox="0 0 10 10" />
    </StyledWrapper>
  );
}
