import React from "react";
import StackIcon from "tech-stack-icons";

const CUSTOM_ICONS: Record<string, string> = {
  godot: "/custom-icons/godot.png",
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
          {CUSTOM_ICONS[tool] ? (
            <img className="w-6 object-contain" src={CUSTOM_ICONS[tool]} alt={tool} />
          ) : (
            <StackIcon className="w-6" name={tool} variant="dark" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolstackBar;
