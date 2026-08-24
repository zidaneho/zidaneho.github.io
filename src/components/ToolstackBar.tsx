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
      {tools.map((tool) =>
        CUSTOM_ICONS[tool] ? (
          <img key={tool} className="w-50 object-contain" src={CUSTOM_ICONS[tool]} alt={tool} />
        ) : (
          <StackIcon key={tool} className="w-12" name={tool} variant="dark" />
        )
      )}
    </div>
  );
};

export default ToolstackBar;
