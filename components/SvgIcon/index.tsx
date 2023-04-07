import * as Path from "@/helpers/icons.helper";

type SvgIconProps = {
  title: string;
  viewBox: string;
  fill?: string;
};

const SvgIcon = (props: SvgIconProps) => {
  const { title, viewBox, fill } = props;
  return (
    <div className={`icon icon-${title}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill={fill}>
        {(Path as any)[title]}
      </svg>
    </div>
  );
};

SvgIcon.defaultProps = {
  fill: "none",
};

export default SvgIcon;
