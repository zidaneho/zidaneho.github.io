import type React from "react";
import type { IconType } from "react-icons";

interface FooterIconProps {
  icon: IconType;
  src: string;
}
const FooterIcon: React.FC<FooterIconProps> = ({ icon: Icon, src }) => {
  return (
    <a href={src} className="rounded-lg w-5 h-5 shrink-0">
      <Icon className="w-full h-full" />
    </a>
  );
};
export default FooterIcon;
