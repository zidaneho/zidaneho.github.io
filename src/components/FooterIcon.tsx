import type React from "react";
import type { IconType } from "react-icons";

interface FooterIconProps {
  icon: IconType;
  src: string;
  label: string;
}
const FooterIcon: React.FC<FooterIconProps> = ({ icon: Icon, src, label }) => {
  return (
    <a
      href={src}
      className="flex flex-row items-center gap-2 rounded-lg border border-hollow4-dark text-hollow4-dark px-3 py-1.5 shrink-0 transition-colors duration-300 hover:border-hollow4 hover:text-hollow4"
    >
      <span className="text-sm">{label}</span>
      <Icon className="w-5 h-5" />
    </a>
  );
};
export default FooterIcon;
