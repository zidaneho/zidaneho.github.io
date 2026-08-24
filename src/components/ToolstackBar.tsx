import React from "react";
import StackIcon from "tech-stack-icons";
import { SiBlender } from "react-icons/si";

// Icons that tech-stack-icons doesn't ship.
const CUSTOM_ICONS: Record<string, React.ReactNode> = {
  godot: (
    <img className="w-6 object-contain" src="/custom-icons/godot.png" alt="godot" />
  ),
  blender: <SiBlender className="w-6 h-6 text-[#E87D0D]" />,
};

export interface ToolstackBarProps {
  tools: string[];
}
const ToolstackBar: React.FC<ToolstackBarProps> = ({ tools }) => {
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-4 mb-2">
      {tools.map((tool) => (
        <div
          key={tool}
          className="flex flex-row items-center gap-2 rounded-lg border border-hollow4 px-3 py-1.5"
        >
          <span className="text-sm capitalize">{tool}</span>
          {CUSTOM_ICONS[tool] ?? (
            <StackIcon className="w-6" name={tool} variant="dark" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolstackBar;
