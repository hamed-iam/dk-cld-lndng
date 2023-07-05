import SvgIcon from "../../SvgIcon";
import { TagFrameStyleWrapper } from "./aboutUsSection.style";

export default function TagFrame({ children }: any) {
  return (
    <TagFrameStyleWrapper>
      <SvgIcon title="cornerTLIcon" viewBox="0 0 10 10" />
      <SvgIcon title="cornerTRIcon" viewBox="0 0 10 10" />

      {children}

      <SvgIcon title="cornerBLIcon" viewBox="0 0 10 10" />
      <SvgIcon title="cornerBRIcon" viewBox="0 0 10 10" />
    </TagFrameStyleWrapper>
  );
}
